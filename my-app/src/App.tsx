import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import LoginPage from 'pages/LoginPage';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
  );
}

export default App;
