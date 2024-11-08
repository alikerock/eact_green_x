import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from './Router';
import { authService } from '../firebase';
console.log(authService);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AppRouter isLoggedIn={isLoggedIn}/>
  );
}

export default App;
