import { useState } from 'react';
import './App.css'
import Dashboard from './Dashboard';

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface AppProps {}
function App({}: AppProps) {
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'Me',
  });

  return (
    <div>
      <Dashboard user={user}/>
    </div>
  )
}

export default App
