import { Hero } from '@/components/home/hero';
import { FeaturedJobs } from '@/components/home/featured-jobs';
import { HowItWorks } from '@/components/home/how-it-works';

export function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedJobs />
      <HowItWorks />
    </div>
  );
}