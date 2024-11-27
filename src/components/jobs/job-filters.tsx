import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin, DollarSign, Briefcase } from 'lucide-react';
import type { JobFilters } from '@/lib/types/job';

interface JobFiltersProps {
  onFilterChange: (filters: JobFilters) => void;
}

export function JobFilters({ onFilterChange }: JobFiltersProps) {
  const [filters, setFilters] = useState<JobFilters>({
    type: [],
    location: '',
    salary: { min: 0, max: 100 },
    experience: [],
  });

  const handleFilterChange = (newFilters: Partial<JobFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="space-y-4">
        <div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <MapPin className="inline-block h-4 w-4 mr-1" />
              Location
            </label>
            <input
              type="text"
              placeholder="Any location"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => handleFilterChange({ location: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <DollarSign className="inline-block h-4 w-4 mr-1" />
              Salary Range
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) =>
                  handleFilterChange({
                    salary: { ...filters.salary, min: parseInt(e.target.value) },
                  })
                }
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) =>
                  handleFilterChange({
                    salary: { ...filters.salary, max: parseInt(e.target.value) },
                  })
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Briefcase className="inline-block h-4 w-4 mr-1" />
              Job Type
            </label>
            <select
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => handleFilterChange({ type: [e.target.value] })}
            >
              <option value="">Any type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="internship">Internship</option>
              <option value="remote">Remote</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <Button
            variant="outline"
            onClick={() =>
              setFilters({
                type: [],
                location: '',
                salary: { min: 0, max: 100 },
                experience: [],
              })
            }
          >
            Clear Filters
          </Button>
          <Button onClick={() => onFilterChange(filters)}>Apply Filters</Button>
        </div>
      </div>
    </div>
  );
}