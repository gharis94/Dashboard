import './App.css';
import Navbar from './components/NavBar/Navbar';
import SideBar from './components/SideBar/Sidebar';
import styled from 'styled-components';
import {Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Contacts from './pages/Contacts/Contacts';
import Team from './pages/Team/Team';
import BarChart from './pages/BarChart/BarChart';
import Calender from './pages/Calender/Calender';
import FAQ from './pages/FAQ/FAQ';
import Form from './pages/Form/Form';
import Invoices from './pages/Invoices/Invoices';
import Demographic from './pages/Demographic/Demographic';
import PieChart from './pages/PieChart/PieChart';
import LineChart from './pages/LineChart/LineChart';
function App() {

  return (
      <div className='app'>
        <main className='content'>
          <HeaderContainer>
            <SideBar/>
            <Routes>
              <Route  path='/' element = {<Navbar/>}>
                <Route index element ={<Dashboard/>}/>
                <Route path='contact' element={<Contacts/>}/>
                <Route path='team'  element={<Team/>}/>
                <Route path='bar' element={<BarChart/>}/>
                <Route path='calender' element={<Calender/>}/>
                <Route path='faq' element={<FAQ/>}/>
                <Route path='profile' element={<Form/>}/>
                <Route path='invoice' element={<Invoices/>}/>
                <Route path='pie' element={<PieChart/>}/>
                <Route path='demographic' element={<Demographic/>}/>
                <Route path='line' element={<LineChart/>}/>
              </Route>
            </Routes>
            
          </HeaderContainer>
         
        </main>
      </div>
  );
}

export default App;


const HeaderContainer=styled.div`
  display:flex;
`
