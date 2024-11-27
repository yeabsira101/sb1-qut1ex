import { formatDistanceToNow } from 'date-fns';
import { MapPin, DollarSign, Clock, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Job } from '@/lib/types/job';

interface JobCardProps {
  job: Job;
  onApply: (jobId: string) => void;
}

export function JobCard({ job, onApply }: JobCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.company}</p>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {job.type}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-2" />
          {job.location}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <DollarSign className="h-4 w-4 mr-2" />
          {job.salary}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          Posted {formatDistanceToNow(new Date(job.posted))} ago
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Briefcase className="h-4 w-4 mr-2" />
          Apply by {new Date(job.deadline).toLocaleDateString()}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 3).map((req, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {req}
            </span>
          ))}
          {job.requirements.length > 3 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              +{job.requirements.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-2">
        <Button variant="outline">Save</Button>
        <Button onClick={() => onApply(job.id)}>Apply Now</Button>
      </div>
    </div>
  );
}