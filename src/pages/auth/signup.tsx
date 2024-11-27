import { AuthForm } from '@/components/auth/auth-form';
import type { SignupData } from '@/lib/types/auth';

export function SignupPage() {
  const handleSignup = (data: SignupData) => {
    // TODO: Implement signup logic
    console.log('Signup:', data);
  };

  return <AuthForm type="signup" onSubmit={handleSignup} />;
}