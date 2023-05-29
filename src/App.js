import React, { useState , useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  //use effect for tokenization
  useEffect(()=>{
    const storeUSerLoginInforamtion =  localStorage.getItem('isLoggedIn');

    if (storeUSerLoginInforamtion === '1')
    {
      setIsLoggedIn(true)
    }


  } , []);


  //login authenticato
  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn' , '1')
    setIsLoggedIn(true);
  };


  //logout athenticator
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
