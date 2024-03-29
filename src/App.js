import Header from "./base/component/Header";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./base/component/pages/Home";
import About from "./base/component/pages/About";
import {GithubProvider} from "./base/context/Github/GithubContext"
import NotFound from "./base/component/pages/NotFound";
import { AlertProvider } from "./base/context/Alert/AlertContext";
import UserInfo from "./base/component/pages/UserInfo";
import React from "react";
import Footer from "./base/component/Footer";

import { IntercomProvider, useIntercom } from 'react-use-intercom';

import Hotjar from '@hotjar/browser';
export default function App() {

const siteId = 3812167;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
  return (
    <AlertProvider>
    <GithubProvider>
    <Router>
    <IntercomProvider appId={'qgglww7a'}>
      <div className="relative flex justify-center app">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path={`/user/:login`} element={<UserInfo/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
      </div>
      </IntercomProvider>

    </Router>
    </GithubProvider>
    </AlertProvider> 
  )
}


