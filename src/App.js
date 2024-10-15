import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [apiData, setApiData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await fetch('https://www.example.com'); 
        const data = await response.json();
        setApiData(data); 
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getApiData();
  }, []);

  return (
    <div>
      <h1>Task Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Completed</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{apiData.title || 'N/A'}</td>
              <td>{apiData.description || 'N/A'}</td>
              <td>{apiData.dueDate ? new Date(apiData.dueDate).toLocaleDateString() : 'N/A'}</td>
              <td>{apiData.completed ? 'Yes' : 'No'}</td>
              <td>{apiData.createdAt ? new Date(apiData.createdAt).toLocaleDateString() : 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
