import { useState } from 'react';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { HomePage } from './pages/HomePage';

type AppPage = 'home' | 'signin' | 'signup';

function App() {
  const [page, setPage] = useState<AppPage>('home');

  if (page === 'signin') {
    return (
      <SignInPage
        onSignIn={() => setPage('home')}
        onNavigateSignUp={() => setPage('signup')}
      />
    );
  }

  if (page === 'signup') {
    return (
      <SignUpPage
        onSignUp={() => setPage('home')}
        onNavigateSignIn={() => setPage('signin')}
      />
    );
  }

  return <HomePage />;
}

export default App;
