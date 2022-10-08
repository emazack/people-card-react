import React from 'react';
import './App.css';
import UserCard from './UserCard';

interface User {
  id: number;
  name: string;
  url: string;
  gender: 'M' | 'F';
  description: string;
  isAdmin: boolean;
}

const USER1: User = {
  id: 1,
  name: 'Mario Rossi',
  url: 'https://www.w3schools.com/howto/img_avatar.png',
  gender: 'M',
  description: "Mario è bello",
  isAdmin: true
};
const USER2: User = { 
  id: 1, name: 'Rebecca Green', 
  url: 'https://www.w3schools.com/howto/img_avatar2.png', 
  gender: 'F',  
  description: "Maria è bella",
  isAdmin: false
};

function App() {

  return (
    <div className="App">
      <UserCard 
        user={USER1}
      />

      <UserCard 
        user={USER2}
      />
    </div>
  );
}

export default App;

