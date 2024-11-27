import { Recommendation } from '@/lib/types/dashboard';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, UserPlus } from 'lucide-react';

interface RecommendationsProps {
  recommendations: Recommendation[];
}

export function Recommendations({ recommendations }: RecommendationsProps) {
  const getIcon = (type: Recommendation['type']) => {
    switch (type) {
      case 'job':
        return <Briefcase className="h-5 w-5" />;
      case 'project':
        return <Users className="h-5 w-5" />;
      case 'connection':
        return <UserPlus className="h-5 w-5" />;
    }
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {recommendations.map((recommendation) => (
        <div
          key={recommendation.id}
          className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
        >
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="p-2 bg-blue-100 rounded-lg">
                {getIcon(recommendation.type)}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{recommendation.title}</p>
              <p className="text-sm text-gray-500 truncate">{recommendation.description}</p>
            </div>
            <div className="inline-flex items-center text-sm font-medium text-blue-600">
              {recommendation.matchScore}% match
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}