import React, { useState } from 'react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

interface SignInPageProps {
  onSignIn?: (email: string, password: string) => void;
  onNavigateSignUp?: () => void;
}

export const SignInPage: React.FC<SignInPageProps> = ({ onSignIn, onNavigateSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white border-2 border-black shadow-[8px_8px_0_0_#000] p-8">
        <h1 className="font-serif text-3xl font-bold text-bronze-dark text-center mb-1">
          Readmark
        </h1>
        <h2 className="font-serif text-xl text-bronze-dark text-center mb-8">Welcome Back!</h2>

        <div className="flex flex-col gap-5">
          <Input
            label="Email"
            type="email"
            placeholder="reader@readmark.app"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            rightElement={
              <button className="font-sans text-sm font-semibold text-bronze hover:underline">
                Forgot?
              </button>
            }
          />

          <Button
            variant="primary"
            size="lg"
            className="w-full mt-2"
            onClick={() => onSignIn?.(email, password)}
          >
            Sign In
          </Button>
        </div>

        <p className="font-sans text-sm text-center mt-6 text-bronze-dark">
          Don&apos;t have an account?{' '}
          <button
            onClick={onNavigateSignUp}
            className="font-semibold text-bronze hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};
