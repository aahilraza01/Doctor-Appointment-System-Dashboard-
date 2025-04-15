import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/home/HomePage";
import DoctorList from "./components/doctors/DoctorList";
import AppointmentCalendar from "./components/appointments/Calendar";
import type { Appointment } from "./types";
import { useCallback } from "react";

// Mock appointments data - in a real app this would come from an API
const initialAppointments: Appointment[] = [
  {
    id: "1",
    title: "Annual Checkup",
    start: new Date(2025, 3, 12, 10, 0),
    end: new Date(2025, 3, 12, 11, 0),
    doctorId: "1",
    doctorName: "Dr. John Smith",
    patientId: "patient-1",
    patientName: "Alex Johnson",
    description: "Regular annual physical examination",
    status: "confirmed",
  },
  {
    id: "2",
    title: "Dermatology Consultation",
    start: new Date(2025, 3, 14, 14, 0),
    end: new Date(2025, 3, 14, 14, 30),
    doctorId: "2",
    doctorName: "Dr. Sarah Johnson",
    patientId: "patient-1",
    patientName: "Alex Johnson",
    description: "Followup on skin condition",
    status: "scheduled",
  },
  {
    id: "3",
    title: "Pediatric Checkup",
    start: new Date(2025, 3, 16, 9, 0),
    end: new Date(2025, 3, 16, 9, 45),
    doctorId: "3",
    doctorName: "Dr. Michael Brown",
    patientId: "patient-2",
    patientName: "Emma Wilson",
    description: "Regular checkup for child",
    status: "scheduled",
  },
];

// Wrapper component to provide appointments context and navigation
const AppContent = () => {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const navigate = useNavigate();

  const handleAddAppointment = useCallback((appointment: Appointment) => {
    setAppointments((prev) => {
      const existingIndex = prev.findIndex((a) => a.id === appointment.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = appointment;
        return updated;
      }
      return [...prev, appointment];
    });
  }, []);

  const handleDeleteAppointment = useCallback((id: string) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const handleBookAppointment = useCallback((doctorId: string) => {
    // In a real app, you might store this in context or state
    // For now, navigate to the appointments page
    navigate("/appointments", { state: { doctorId } });
  }, [navigate]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<DoctorList onBookAppointment={handleBookAppointment} />} />
        <Route
          path="/appointments"
          element={
            <AppointmentCalendar
              events={appointments}
              onAddAppointment={handleAddAppointment}
              onDeleteAppointment={handleDeleteAppointment}
            />
          }
        />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
