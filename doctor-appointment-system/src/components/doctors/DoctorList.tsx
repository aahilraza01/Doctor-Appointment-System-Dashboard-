import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Doctor } from "@/types";

// Mock data - would normally be fetched from an API
const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. John Smith",
    specialty: "Cardiology",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    about: "Dr. Smith is a board-certified cardiologist with over 15 years of experience in treating heart conditions.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Friday"],
    availableHours: {
      start: "09:00",
      end: "17:00"
    }
  },
  {
    id: "2",
    name: "Dr. Sarah Johnson",
    specialty: "Dermatology",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    about: "Dr. Johnson specializes in treating skin conditions and performing cosmetic procedures with over 10 years of experience.",
    availableDays: ["Monday", "Wednesday", "Thursday"],
    availableHours: {
      start: "10:00",
      end: "18:00"
    }
  },
  {
    id: "3",
    name: "Dr. Michael Brown",
    specialty: "Pediatrics",
    imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    about: "Dr. Brown is a compassionate pediatrician dedicated to providing the best care for children from birth through adolescence.",
    availableDays: ["Tuesday", "Thursday", "Friday"],
    availableHours: {
      start: "08:00",
      end: "16:00"
    }
  },
  {
    id: "4",
    name: "Dr. Lisa Williams",
    specialty: "Neurology",
    imageUrl: "https://randomuser.me/api/portraits/women/32.jpg",
    about: "Dr. Williams is a leading neurologist with expertise in treating conditions affecting the brain, spinal cord, and nerves.",
    availableDays: ["Monday", "Wednesday", "Friday"],
    availableHours: {
      start: "09:00",
      end: "17:00"
    }
  },
  {
    id: "5",
    name: "Dr. Robert Chen",
    specialty: "Orthopedics",
    imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    about: "Dr. Chen specializes in the diagnosis and treatment of musculoskeletal disorders including sports injuries.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    availableHours: {
      start: "08:30",
      end: "16:30"
    }
  },
  {
    id: "6",
    name: "Dr. Emily Martinez",
    specialty: "Obstetrics & Gynecology",
    imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    about: "Dr. Martinez provides comprehensive women's healthcare services with a focus on patient education and preventive care.",
    availableDays: ["Monday", "Wednesday", "Thursday", "Friday"],
    availableHours: {
      start: "09:00",
      end: "17:30"
    }
  }
];

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctorId: string) => void;
}

const DoctorCard = ({ doctor, onBookAppointment }: DoctorCardProps) => (
  <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
    <CardHeader className="p-0">
      <img
        src={doctor.imageUrl}
        alt={doctor.name}
        className="w-full h-48 object-cover"
      />
    </CardHeader>
    <CardContent className="flex-grow p-4">
      <CardTitle className="text-xl mb-1">{doctor.name}</CardTitle>
      <CardDescription className="text-primary font-medium mb-3">
        {doctor.specialty}
      </CardDescription>
      <p className="text-sm text-gray-600 mb-4">{doctor.about}</p>
      <div className="text-sm">
        <p className="font-semibold mb-1">Available Days:</p>
        <p className="text-gray-600 mb-2">{doctor.availableDays.join(", ")}</p>
        <p className="font-semibold mb-1">Hours:</p>
        <p className="text-gray-600">
          {doctor.availableHours.start} - {doctor.availableHours.end}
        </p>
      </div>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Button className="w-full" onClick={() => onBookAppointment(doctor.id)}>
        Book Appointment
      </Button>
    </CardFooter>
  </Card>
);

interface DoctorListProps {
  onBookAppointment: (doctorId: string) => void;
}

const DoctorList = ({ onBookAppointment }: DoctorListProps) => {
  // In a real application, you would fetch doctors from an API
  const [doctors] = useState<Doctor[]>(mockDoctors);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];

  const filteredDoctors = selectedSpecialty
    ? doctors.filter(doctor => doctor.specialty === selectedSpecialty)
    : doctors;

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Our Doctors</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          <Button
            variant={selectedSpecialty === null ? "default" : "outline"}
            onClick={() => setSelectedSpecialty(null)}
          >
            All Specialties
          </Button>
          {specialties.map(specialty => (
            <Button
              key={specialty}
              variant={selectedSpecialty === specialty ? "default" : "outline"}
              onClick={() => setSelectedSpecialty(specialty)}
            >
              {specialty}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map(doctor => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onBookAppointment={onBookAppointment}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
