import { AuthForm } from '@/components/auth/auth-form';
import type { LoginCredentials } from '@/lib/types/auth';

export function LoginPage() {
  const handleLogin = (credentials: LoginCredentials) => {
    // TODO: Implement login logic
    console.log('Login:', credentials);
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}