import { useState } from 'react';
import './App.css'
import Dashboard from './Dashboard';
import { DashboardContext } from './context';

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
      <DashboardContext.Provider value={user}>
        <Dashboard/>
      </DashboardContext.Provider>
    </div>
  )
}

export default App
