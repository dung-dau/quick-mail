import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import EmailList from './components/EmailList';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/counter/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Routes>
            <Route path='/' element={<EmailList />}/>
            <Route path='/mail' element={<Mail />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </BrowserRouter>
  );
}

export default App;
