import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [apiData, setApiData] = useState('');

  useEffect(() => {
    const getApiData = async () => { 
      try {
        const response = await fetch('https://www.example.com'); 
        const data = await response.json();
        console.log(data);
        setApiData(data);
      } catch (e) {
        console.log(e);
      }
    };
    getApiData();
  }, []); 

  return (
    <>
      <div>
        <h1>API Data:</h1>
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
