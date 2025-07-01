
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AdmissionPage from "./pages/AdmissionPage";
import NotFoundPage from "./pages/NotFoundPage";
import './App.css';
import './styles/Pages.css'


import ChatbotComponent from "./components/Chatbot/ChatbotComponents";

import Footer from "./components/Footer/Footer";
import { useState ,useEffect } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";

const App = () => {
  // const [showPopup, setShowPopup] = useState(true);
  const [showPopup ,setShowPopup] = useState(false);
  useEffect(() => {
    const alreadyShown =
      localStorage.getItem("popupShown");
      if(!alreadyShown){
        setShowPopup(true);
        localStorage.setItem("popupShown","true");
      }
    
  } ,[] );
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Komal Dattatraya Kumbhar"
          studentPhotoUrl="\Images\MyImage.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

      <div className="app-container">
      
      <div className="page-wrapper">
   <Router> 
      <Routes> 
      
       <Route path="/" element={<HomePage/>} />
        <Route path="/home"element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/admission" element={<AdmissionPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    <Footer/>
      <ChatbotComponent/>
   </Router>
   </div>
   </div>
  </>
  )
}

export default App;