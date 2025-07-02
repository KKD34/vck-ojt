import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const HomePage = () => {
     return(
        <div>
           <Header/>
           
           <div className="main-section">
            <img src="\Images\college-banner-Cz0xylpt.png"  className="img-logo" alt=" vck college photo" style={{width:"100%",objectFit:"fill",filter:"brightness(60%)"}}/>
            <div className="second-main"> 
                <h1 style={{color:"white"}}>Welcome to Vivekanand 
                 College!
                </h1>
                <p style={{ color:"white"}}> Your Journey to Excellence Starts Here.</p><br/>
           <Link className="btn hero-btn" to="/admission"> Apply Now!</Link>
           </div>
           
           </div>
            <p><b> Vivekanand College</b> Vivekanand College is a premier educational institution dedicated to
             fostering academic excellence, innovation, and holistic development. 
            Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.
            
            At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, 
        experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
            </p>
            <h2> Why Choose Vivekanand College ?</h2>
            <ul>
                <li> <b> Legacy of Excellence :</b> Decades of Commitment to quality education.</li>
                <li><b> Experience Faculty:</b> Learn from renowned expert and passinate educators.</li>
                <li> <b> Modern Facilities:</b> Well-wquipped labs,expansive library, and comfortable campus.</li>
                <li> <b> Holistic Development:</b> Focus on co-curricular activities,sports,and community servise.</li>
                <li> <b> Strong Placement:</b> Excellent career opportunity with leading companies.</li>
            </ul>
            <h2> Campus Life and Facilities</h2>
            <hr/>
           
            <div className="image">
            <img src="\Images\students-studying-DbLGuwF_.jpeg" alt="student studying" style={{height:"100%",width:"100%",border:"2px"}}/>
            
         
            <img src="\Images\campus-life-Crkero7B.jpg" alt="campus photo" style={{height:"100%",width:"100%",border:"2px"}}/>
         
            </div>
            <p> Explore our vibrant campus and state-of-the-art facilities desingned to enhance your learning experience and personal growth</p><br/>
            <center> Ready to explore our courses ?</center>
            <br/>
            <center> <Link className="btn1" to="/courses"> Explore Courses</Link></center>
            
        </div> 
     )
}

export default HomePage;