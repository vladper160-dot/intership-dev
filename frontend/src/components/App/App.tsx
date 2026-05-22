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
      <Sidebar />
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Secbar />
        <div className="main-container">
          <DataTable data={data} />
        </div>
      </section>
    </div>
  );
}

export default App;
