import { Briefcase, Users, CheckSquare, UserPlus } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/stats-card';
import { ActivityFeed } from '@/components/dashboard/activity-feed';
import { Recommendations } from '@/components/dashboard/recommendations';
import type { DashboardStats, Activity, Recommendation } from '@/lib/types/dashboard';

// Mock data - Replace with actual API calls
const stats: DashboardStats = {
  appliedJobs: 12,
  activeProjects: 3,
  connections: 28,
  completedTasks: 45,
};

const activities: Activity[] = [
  {
    id: '1',
    type: 'application',
    title: 'Applied to Frontend Developer Internship',
    description: 'TechCorp Inc.',
    timestamp: new Date().toISOString(),
    status: 'pending',
  },
  // Add more activities...
];

const recommendations: Recommendation[] = [
  {
    id: '1',
    type: 'job',
    title: 'UI/UX Designer',
    description: 'DesignStudio - Remote',
    matchScore: 95,
  },
  // Add more recommendations...
];

export function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Applied Jobs"
          value={stats.appliedJobs}
          icon={Briefcase}
          description="Applications this month"
        />
        <StatsCard
          title="Active Projects"
          value={stats.activeProjects}
          icon={Users}
          description="Ongoing collaborations"
        />
        <StatsCard
          title="Connections"
          value={stats.connections}
          icon={UserPlus}
          description="Professional network"
        />
        <StatsCard
          title="Completed Tasks"
          value={stats.completedTasks}
          icon={CheckSquare}
          description="Tasks this month"
        />
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recommended for You</h2>
          <Recommendations recommendations={recommendations} />
        </div>
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <ActivityFeed activities={activities} />
        </div>
      </div>
    </div>
  );
}