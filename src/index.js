import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import ForgotPasswordPage from './Pages/Forgot_password/ForgotPasswordPage';
import ResetPasswordPage from './Pages/Forgot_password/ResetPasswordPage';

ReactDOM.render(
  // <Login/>,
  // <Registration/>,
  // <ForgotPasswordPage/>,
  <ResetPasswordPage/>,
  document.getElementById('root')
);
