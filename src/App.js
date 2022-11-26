import Header from "./base/component/Header";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./base/component/pages/Home";
import About from "./base/component/pages/About";
import {DataProvider} from "./base/context/DataContext"
export default function App() {
  return (
    <DataProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

    </Router>
    </DataProvider>
  )
}


