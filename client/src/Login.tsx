import React from 'react'
import '../style/Login.css';
import Header from './Header';
import Footer from './Footer';

export default function Login() {
  return (
    <div className='flex flex-col h-screen'>
        <Header />
        <div className="main h-screen">
          <div className="main-image h-[90%]"></div>
          <div className="main-form"></div>
        </div>
        <Footer />
    </div>
  )
}
