import { formatDistanceToNow } from 'date-fns';
import { Users, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/types/project';

interface ProjectCardProps {
  project: Project;
  onJoin: (projectId: string) => void;
}

export function ProjectCard({ project, onJoin }: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
          <p className="text-sm text-gray-600">Created by {project.creator.name}</p>
        </div>
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            project.status === 'open'
              ? 'bg-green-100 text-green-800'
              : project.status === 'in-progress'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <Users className="h-4 w-4 mr-2" />
          {project.members.length} / {project.teamSize} members
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          {project.duration}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Tag className="h-4 w-4 mr-2" />
          {project.category}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex -space-x-2 overflow-hidden">
          {project.members.slice(0, 3).map((member) => (
            <img
              key={member.id}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src={member.avatar}
              alt={member.name}
            />
          ))}
          {project.members.length > 3 && (
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 ring-2 ring-white">
              <span className="text-xs font-medium text-gray-500">
                +{project.members.length - 3}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-2">
        <Button variant="outline">Learn More</Button>
        <Button onClick={() => onJoin(project.id)}>Join Project</Button>
      </div>
    </div>
  );
}