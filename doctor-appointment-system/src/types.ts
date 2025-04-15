export interface Appointment {
  id: string;
  title: string;
  start: Date;
  end: Date;
  doctorId: string;
  patientId: string;
  patientName: string;
  doctorName: string;
  description: string;
  status: 'scheduled' | 'confirmed' | 'cancelled' | 'completed';
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  about: string;
  availableDays: string[];
  availableHours: {
    start: string;
    end: string;
  };
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
}
