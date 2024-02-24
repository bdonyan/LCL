import React, { Profiler, useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import LabelHub from './pages/LabelHub';
import profile from './pages/Profile';

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  const data = [
    {
        price: 149,
        storage: "100 GB storage",
        feature1: "1 fdf",
        feature2: "dummy",
        title: "big"
    },
    {
        price: 199,
        storage: "200 GB storage",
        feature1: "2 fdf",
        feature2: "dummy",
        title: "small"
    },
    // Add more items as needed
];

const profileData = [
  {
      id: 1,
      jobsFinished: 10,
      earnings: 500
  }
];

var stat = -1;

  let Component 
  switch (window.location.pathname) {
    case "/":
      Component = Hero
      stat = 0
      break
    case "/labelhub":
      Component = LabelHub
      stat = 1
      break
    case "/profile":
      Component = profile
      stat = 2
      break
  }

  return (
    <div>
      <Navbar />
      {stat === 0 && <Component />}
      {stat === 1 && <Component data={data} />}
      {stat === 2 && <Component profileData={profileData} />}
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )} 
    </div>
  );
}

export default App;
