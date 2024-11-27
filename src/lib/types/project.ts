export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  skills: string[];
  teamSize: number;
  duration: string;
  status: 'open' | 'in-progress' | 'completed';
  creator: {
    id: string;
    name: string;
    avatar: string;
  };
  members: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  }[];
}