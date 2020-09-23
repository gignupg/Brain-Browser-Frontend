import React, { useContext } from 'react';
import Authentication from './components/auth/Authentication';
import AppLayout from './components/layout/AppLayout';
import UserContext from './context/UserContext';

function App() {

  const { user } = useContext(UserContext);
  const { auth } = user;

  return (
    <>
      {
        auth ? 
          <AppLayout />
        :
          <Authentication />
      }
    </>
  );
}

export default App;
