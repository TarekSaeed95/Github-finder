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
export default function App() {
  window.Intercom('boot', {
    app_id: 'qgglww7a',
    // name: data.user.username,
    // email: data.user.email,
    // user_id: data.user.id,
  })
  return (
    <AlertProvider>
    <GithubProvider>
    <Router>
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
    </Router>
    </GithubProvider>
    </AlertProvider> 
  )
}


