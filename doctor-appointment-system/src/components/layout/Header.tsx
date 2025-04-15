import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          <h1 className="text-xl font-bold">MediBook</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="hover:text-blue-100 transition-colors">Home</a>
          <a href="/doctors" className="hover:text-blue-100 transition-colors">Doctors</a>
          <a href="/appointments" className="hover:text-blue-100 transition-colors">Appointments</a>
          <a href="/contact" className="hover:text-blue-100 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-white text-primary hover:bg-blue-50">Login</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
