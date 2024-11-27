import { useState } from 'react';
import { ProjectCard } from '@/components/projects/project-card';
import { Button } from '@/components/ui/button';
import { Search, Plus } from 'lucide-react';
import type { Project } from '@/lib/types/project';

// Mock data - Replace with API calls
const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Student Social Platform',
    description: 'Building a social platform for university students to connect and collaborate...',
    category: 'Web Development',
    skills: ['React', 'Node.js', 'MongoDB'],
    teamSize: 5,
    duration: '3 months',
    status: 'open',
    creator: {
      id: '1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    members: [
      {
        id: '1',
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        role: 'Project Lead',
      },
      // Add more members...
    ],
  },
  // Add more mock projects...
];

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const handleJoin = (projectId: string) => {
    // Implement join logic
    console.log('Joined project:', projectId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Student Projects</h1>
          <p className="mt-2 text-sm text-gray-600">
            Join exciting projects or start your own
          </p>
        </div>
        <Button>
          <Plus className="h-5 w-5 mr-2" />
          Create Project
        </Button>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onJoin={handleJoin} />
        ))}
      </div>
    </div>
  );
}