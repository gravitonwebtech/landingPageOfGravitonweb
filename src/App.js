import logo from "./logo.svg";
import "./App.css";
import Home1 from "./Home1";
import WhatsAppButton from "./WhatsAppButton";
import Home2 from "./Home2";
import { useEffect } from "react";
import ReactGA from "react-ga";
import { Route, Routes } from 'react-router-dom';
import PopUp from "./PopUp";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-286352148-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <> 
       <Routes>
     
       <Route path="/thankyou" element={<PopUp />} />
        <Route path="/" element={<Home2 />} />
        {/* Other routes go here */}
        </Routes> 

      {/* <Home2 /> */}
      <WhatsAppButton />
    </>
  );
}

export default App;
