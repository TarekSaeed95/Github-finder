import Header from "./base/component/Header";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./base/component/pages/Home";
import About from "./base/component/pages/About";
import {DataProvider} from "./base/context/DataContext"
import NotFound from "./base/component/pages/NotFound";
import { ErrorProvider } from "./base/context/ErrorContext";
export default function App() {
  return (
    <ErrorProvider>
    <DataProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>

    </Router>
    </DataProvider>
    </ErrorProvider>
  )
}


