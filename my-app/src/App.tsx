import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import SessionsPage from 'pages/SessionsPage';
import TransactionsPage from 'pages/TransactionsPage';
import PersonalDataPage from 'pages/PersonalDataPage';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={< HomePage />}/>
          <Route path='/sessions' element={< SessionsPage />}/>
          <Route path='/personalData' element={< PersonalDataPage />}/>
          <Route path='/transactions' element={< TransactionsPage />}/>
        </Routes>
      </div>
  );
}

export default App;
