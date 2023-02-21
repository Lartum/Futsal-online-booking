import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {Button} from '@mui/material'
import { useAuth } from '@/components/auth/authUserProvider';

const Home = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    console.log(authUser);
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading])

  return (
    //Your logged in page
    <div>
        Protected route
        <Button onClick={signOut}>Sign Out</Button>
    </div>
  )
}

export default Home;