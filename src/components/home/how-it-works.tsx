import { UserPlusIcon, SearchIcon, HandshakeIcon } from 'lucide-react';

const STEPS = [
  {
    title: 'Create Your Profile',
    description: 'Sign up and showcase your skills, experience, and availability.',
    icon: UserPlusIcon,
  },
  {
    title: 'Discover Opportunities',
    description: 'Browse through part-time jobs and collaboration projects.',
    icon: SearchIcon,
  },
  {
    title: 'Connect & Grow',
    description: 'Apply for positions and collaborate with fellow students.',
    icon: HandshakeIcon,
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get started with StudentJobLink in three simple steps
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">{step.title}</h3>
                <p className="mt-2 text-base text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}