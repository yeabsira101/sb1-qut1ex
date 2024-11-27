import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BriefcaseIcon, GraduationCapIcon, Users2Icon } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCapIcon className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">StudentJobLink</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/jobs"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                Jobs
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                <Users2Icon className="h-4 w-4 mr-2" />
                Projects
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" as={Link} to="/login">
              Log in
            </Button>
            <Button size="sm" as={Link} to="/signup">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}