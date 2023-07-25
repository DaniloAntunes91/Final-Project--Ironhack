import { Route, Routes } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/indexpage';
import LoginPage from './pages/loginPage';
import Layout from './Layout';
import RegisterPage from './pages/Registerpage';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        </Route>
    </Routes>
  );
}

export default App;
