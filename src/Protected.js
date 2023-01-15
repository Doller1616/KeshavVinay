import React from 'react'
import { useNavigate, Navigate, useHref } from 'react-router-dom';
import NotFound404 from './404';
import LoginPage from './Login';

export default function Protected({Component}) {
  // const token = localStorage.getItem('token');
  return <Component/> 
}
