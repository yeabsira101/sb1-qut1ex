export interface DashboardStats {
  appliedJobs: number;
  activeProjects: number;
  connections: number;
  completedTasks: number;
}

export interface Activity {
  id: string;
  type: 'application' | 'project' | 'connection' | 'task';
  title: string;
  description: string;
  timestamp: string;
  status?: 'pending' | 'accepted' | 'rejected' | 'completed';
}

export interface Recommendation {
  id: string;
  type: 'job' | 'project' | 'connection';
  title: string;
  description: string;
  matchScore: number;
}