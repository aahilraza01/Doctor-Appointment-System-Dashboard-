import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Quick and Easy Doctor Appointments
            </h1>
            <p className="text-xl mb-8">
              Book appointments with the best doctors in your area, manage your
              schedule, and take control of your healthcare journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => navigate("/appointments")}
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
                size="lg"
              >
                Book Appointment
              </Button>
              <Button
                onClick={() => navigate("/doctors")}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                size="lg"
              >
                Find Doctors
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose MediBook?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a seamless experience for managing your healthcare needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
            <p className="text-gray-600">
              Book appointments with just a few clicks, 24/7, without phone calls or waiting
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Top Doctors</h3>
            <p className="text-gray-600">
              Access a network of qualified healthcare providers across various specialties
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Reminders</h3>
            <p className="text-gray-600">
              Get timely notifications for upcoming appointments to stay on top of your schedule
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Booking your appointment is quick and simple
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Find a Doctor</h3>
              <p className="text-gray-600 text-center">
                Browse through our extensive list of qualified healthcare professionals
              </p>
            </div>

            <div className="relative">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Check Availability</h3>
              <p className="text-gray-600 text-center">
                View the doctor's schedule and choose a convenient time slot
              </p>
            </div>

            <div className="relative">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Book Appointment</h3>
              <p className="text-gray-600 text-center">
                Enter your details and confirm your booking in seconds
              </p>
            </div>

            <div className="relative">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Get Confirmation</h3>
              <p className="text-gray-600 text-center">
                Receive an instant confirmation and reminder for your appointment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to take care of your health?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied patients who have simplified their healthcare journey with MediBook
          </p>
          <Button
            onClick={() => navigate("/signup")}
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
            size="lg"
          >
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
