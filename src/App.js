import React, { useState } from 'react';
import Authentication from './authentication/Authentication';
import Header from './components/Header';

function App() {

  const [userChanged, setUserChanged] = useState("no change so far");

  const [authentication, setAuthentication] = useState(false);

  return (
    <>
      {
        authentication ?
          <Header setUserChanged={setUserChanged} authentication={authentication}/> :
          <Authentication setUserChanged={setUserChanged} />
      }
    </>
  );
}

export default App;
