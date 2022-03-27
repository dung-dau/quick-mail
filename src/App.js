import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailList from './components/EmailList';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import Login from './components/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login } from './features/userSlice';
import { selectStarred } from './features/starredSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        //user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }))
      }
    })
  }, [])
  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ): (
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
      )}
    </BrowserRouter>
  );
}

export default App;
