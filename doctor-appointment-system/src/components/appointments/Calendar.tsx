import { useCallback, useMemo, useState } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, getDay, startOfWeek } from "date-fns";
import { parse as dateFnsParse } from "date-fns";
import { enUS } from "date-fns/locale";
import { Card, CardContent } from "@/components/ui/card";
import type { Appointment } from "@/types";
import AppointmentForm from "./AppointmentForm";
import { Button } from "@/components/ui/button";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse: (str: string, format: string) => {
    return dateFnsParse(str, format, new Date());
  },
  startOfWeek,
  getDay,
  locales,
});

interface CalendarProps {
  events: Appointment[];
  onAddAppointment: (appointment: Appointment) => void;
  onDeleteAppointment: (appointmentId: string) => void;
}

const AppointmentCalendar = ({ events, onAddAppointment, onDeleteAppointment }: CalendarProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Appointment | null>(null);

  const handleSelectSlot = useCallback(
    ({ start }: { start: Date }) => {
      setSelectedDate(start);
      setSelectedEvent(null);
      setIsFormOpen(true);
    },
    []
  );

  const handleSelectEvent = useCallback(
    (event: Appointment) => {
      setSelectedEvent(event);
      setSelectedDate(event.start);
      setIsFormOpen(true);
    },
    []
  );

  // Custom styling for events
  const eventStyleGetter = useCallback(() => {
    return {
      style: {
        backgroundColor: "#0ea5e9",
        borderRadius: "4px",
        color: "white",
        border: "none",
        display: "block",
      },
    };
  }, []);

  const closeForm = useCallback(() => {
    setIsFormOpen(false);
    setSelectedEvent(null);
  }, []);

  const { defaultDate, scrollToTime } = useMemo(() => {
    return {
      defaultDate: new Date(),
      scrollToTime: new Date(1970, 1, 1, 8),
    };
  }, []);

  return (
    <div className="space-y-6 pb-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Appointment Calendar</h2>
        <Button onClick={() => {
          setSelectedDate(new Date());
          setSelectedEvent(null);
          setIsFormOpen(true);
        }}>
          New Appointment
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="h-[600px] p-4">
            <BigCalendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              defaultDate={defaultDate}
              defaultView="week"
              selectable
              onSelectSlot={handleSelectSlot}
              onSelectEvent={handleSelectEvent}
              eventPropGetter={eventStyleGetter}
              scrollToTime={scrollToTime}
              step={30}
              timeslots={2}
              toolbar={true}
            />
          </div>
        </CardContent>
      </Card>

      {isFormOpen && (
        <AppointmentForm
          isOpen={isFormOpen}
          onClose={closeForm}
          selectedDate={selectedDate}
          appointment={selectedEvent}
          onAddAppointment={onAddAppointment}
          onDeleteAppointment={onDeleteAppointment}
        />
      )}
    </div>
  );
};

export default AppointmentCalendar;
