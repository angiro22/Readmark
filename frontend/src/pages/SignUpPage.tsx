import React, { useState } from 'react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

interface SignUpPageProps {
  onSignUp?: (name: string, email: string, password: string) => void;
  onNavigateSignIn?: () => void;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({ onSignUp, onNavigateSignIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#f5f0e8] flex items-center justify-center p-4">
      <div className="relative w-full max-w-sm">
        <div
          className="absolute -top-6 -left-3 z-10 w-14 h-14 bg-cream border-2 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center"
          style={{ transform: 'rotate(-8deg)' }}
        >
          <span className="text-2xl">📖</span>
        </div>

        <div className="bg-white border-2 border-black shadow-[8px_8px_0_0_#000] p-8 pt-10">
          <h1 className="font-serif text-4xl font-bold text-bronze-dark text-center mb-2">
            Join the Club
          </h1>
          <p className="font-sans text-sm text-bronze-dark text-center mb-8">
            Your next great read awaits.
          </p>

          <div className="flex flex-col gap-5">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="Repeat your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button
              variant="primary"
              size="lg"
              className="w-full mt-2"
              onClick={() => onSignUp?.(name, email, password)}
            >
              Create Account
            </Button>
          </div>

          <div className="border-b-2 border-black my-6" />

          <p className="font-sans text-sm text-center text-bronze-dark">
            Already have an account?{' '}
            <button
              onClick={onNavigateSignIn}
              className="font-semibold text-bronze-dark underline hover:text-bronze"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
