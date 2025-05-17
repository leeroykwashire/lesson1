import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/customers', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      console.log('Fetched customers:', response.data);
      setCustomers(response.data);
    })
    .catch(error => {
      console.error('Error fetching customers:', error);
    });
  }, []);

  return (
    <>
  
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>{JSON.stringify(customer)}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
