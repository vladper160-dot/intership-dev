import { useFetchData } from '../../hooks/useFetchData';
import { DataTable } from '../DataTable/DataTable';
import { Sidebar } from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import './App.css';

function App() {
  const { data } = useFetchData();


  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <div className="main-container">
        <DataTable data={data} />
      </div>
    </div>
  );
}

export default App;
