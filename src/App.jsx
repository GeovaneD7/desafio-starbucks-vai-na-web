import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import News from "./components/News/News";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};
