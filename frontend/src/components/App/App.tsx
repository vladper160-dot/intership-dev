import { useFetchData } from '../../hooks/useFetchData';
import { DataTable } from '../DataTable/DataTable';
import { Sidebar } from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { Secbar } from '../Secbar/secbar';
import './App.css';

function App() {
  const { data } = useFetchData();


  return (
    <div className="app-container">
      <Navbar />
      <Secbar />
      <Sidebar />
      <div className="main-container">
        <DataTable data={data} />
      </div>
    </div>
  );
}

export default App;
