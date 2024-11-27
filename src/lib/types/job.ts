export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'internship' | 'remote';
  salary: string;
  description: string;
  requirements: string[];
  posted: string;
  deadline: string;
}

export interface JobFilters {
  type?: string[];
  location?: string;
  salary?: {
    min: number;
    max: number;
  };
  experience?: string[];
}