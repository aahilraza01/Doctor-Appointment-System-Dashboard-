import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { Appointment } from "@/types";

// Mock data - in a real app this would come from an API or context
const doctors = [
  { id: "1", name: "Dr. John Smith", specialty: "Cardiology" },
  { id: "2", name: "Dr. Sarah Johnson", specialty: "Dermatology" },
  { id: "3", name: "Dr. Michael Brown", specialty: "Pediatrics" },
  { id: "4", name: "Dr. Lisa Williams", specialty: "Neurology" },
];

interface AppointmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  appointment: Appointment | null;
  onAddAppointment: (appointment: Appointment) => void;
  onDeleteAppointment: (appointmentId: string) => void;
}

const AppointmentForm = ({
  isOpen,
  onClose,
  selectedDate,
  appointment,
  onAddAppointment,
  onDeleteAppointment,
}: AppointmentFormProps) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    patientName: "",
    patientId: "patient-id", // Normally this would come from user auth
    doctorId: "",
    doctorName: "",
    description: "",
    status: "scheduled" as Appointment["status"],
    date: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    if (selectedDate) {
      setFormData((prev) => ({
        ...prev,
        date: format(selectedDate, "yyyy-MM-dd"),
        startTime: format(selectedDate, "HH:mm"),
        endTime: format(new Date(selectedDate.getTime() + 30 * 60000), "HH:mm"),
      }));
    }

    if (appointment) {
      setFormData({
        id: appointment.id,
        title: appointment.title,
        patientName: appointment.patientName,
        patientId: appointment.patientId,
        doctorId: appointment.doctorId,
        doctorName: appointment.doctorName,
        description: appointment.description,
        status: appointment.status,
        date: format(appointment.start, "yyyy-MM-dd"),
        startTime: format(appointment.start, "HH:mm"),
        endTime: format(appointment.end, "HH:mm"),
      });
    }
  }, [selectedDate, appointment]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    if (name === "doctorId") {
      const selectedDoctor = doctors.find((doctor) => doctor.id === value);
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        doctorName: selectedDoctor ? selectedDoctor.name : "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create start and end dates from the form data
    const startDate = new Date(`${formData.date}T${formData.startTime}`);
    const endDate = new Date(`${formData.date}T${formData.endTime}`);

    const newAppointment: Appointment = {
      id: formData.id || `appointment-${Date.now()}`,
      title: formData.title,
      start: startDate,
      end: endDate,
      doctorId: formData.doctorId,
      doctorName: formData.doctorName,
      patientId: formData.patientId,
      patientName: formData.patientName,
      description: formData.description,
      status: formData.status,
    };

    onAddAppointment(newAppointment);
    onClose();
  };

  const handleDelete = () => {
    if (appointment?.id) {
      onDeleteAppointment(appointment.id);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {appointment ? "Edit Appointment" : "New Appointment"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="title">Appointment Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Routine Checkup"
                required
              />
            </div>

            <div>
              <Label htmlFor="patientName">Patient Name</Label>
              <Input
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <Label htmlFor="doctorId">Doctor</Label>
              <Select
                value={formData.doctorId}
                onValueChange={(value) => handleSelectChange("doctorId", value)}
              >
                <SelectTrigger id="doctorId">
                  <SelectValue placeholder="Select Doctor" />
                </SelectTrigger>
                <SelectContent>
                  {doctors.map((doctor) => (
                    <SelectItem key={doctor.id} value={doctor.id}>
                      {doctor.name} - {doctor.specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => handleSelectChange("status", value)}
                >
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="startTime">Start Time</Label>
                <Input
                  id="startTime"
                  name="startTime"
                  type="time"
                  value={formData.startTime}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="endTime">End Time</Label>
                <Input
                  id="endTime"
                  name="endTime"
                  type="time"
                  value={formData.endTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Notes about the appointment..."
                rows={3}
              />
            </div>
          </div>

          <DialogFooter className="flex justify-between">
            {appointment && (
              <Button
                type="button"
                variant="destructive"
                onClick={handleDelete}
              >
                Delete
              </Button>
            )}
            <div className="flex gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                {appointment ? "Update" : "Create"}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentForm;
