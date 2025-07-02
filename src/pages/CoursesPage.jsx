import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const CoursesPage = () => {
     return (
        <div>
            <Header/>
            <h1>  Our Academic Programs </h1>
            
            <p> vivekanand College offers a comperhensive range of undergraduate and postgraduate programs desingned to equip students with
                the knowledge and skills demanded by todays dynamic global landscape.Our curriculum is regularly updated to reflect industry
                trends and academic advancements. </p>
                <h2>Discover Campus Life</h2>
                <hr/><br/>
                 <video src="\Videos\college-tour-FAmcnyfF.mp4" alt="video mp4" controls width="100%" height="auto"/>
                <h2> Undergraduate Programs(UG)</h2>
                <ul>
                    <li><b>Bachelor of Science (B.Sc.)</b></li>
                    <ul>
                    <li>Computer Science (3 years)</li>
                    <li>Informantion Technology (3 years)</li>
                    <li>Biotechnology (3 years)</li>
                    </ul>
                    <li><b> Bachelor of Commerce(B.com)</b></li>
                    <ul>
                    <li>Accounting & Finance(3 years) </li>
                    <li>Banking & Insurance</li>
                    </ul>
                     <li><b>Bachelor of Art (B.A)</b></li>
                     <ul>
                     <li>English Literature</li>
                     <li> Psychology</li> 
                     </ul> 
                </ul>
                <h2> Postgraduate Programs(PG)</h2>
                <hr/>
                <ul>
                    <li> <b> Master of Science (M.Sc.)</b></li>
                    <li> Computer Science (2 year)</li>
                    <li>Information Technology (2 year)</li>
                    <li><b> Master of Commerce (M.Com)</b>(2 year)</li>
                    <li><b> Master Of Arts (M.A)</b>(2year)</li>
                </ul>
                <h2> Program Detail And Fee Structure (Annual)</h2>
                <div className="table-wrapper">
                <table className="course-table">
                    <tr>
                        <th> Program Type</th>
                        <th> Course Name</th>
                        <th> Duration</th>
                        <th> Annual Fee(INR)</th>
                        <th>Eligibility</th>

                    </tr>
                    <tr>
                        <td> UG</td>
                        <td> B.Sc Computer science</td>
                        <td> 3 year</td>
                        <td> 85,0000</td>  
                        <td> 10+2 with PCM(50%)</td>                  
                    </tr>
                    <tr>
                        <td> UG</td>
                        <td> B.Com Accounting And Finance</td>
                        <td> 3 year</td>
                        <td> 70,000</td>
                        <td> 10+2 Commerce(45%)</td>
                    </tr>
                    <tr>
                        <td> PG</td>
                        <td> M.Sc Infromation Technology</td>
                        <td> 2 year</td>
                        <td> 95,0000</td>
                        <td> B.Sc IT/CS (50%)</td>
                    </tr>
                </table>
                </div>
                <h2> Specialized and Vocational Courses</h2>
                <hr/>
                <p> In Addition to traditional degree programs.we offer various certificate and deploma courses in areas like Degital Marketing,
                    Web Development ,Data Analytics ,and Soft Skills Development, provideng specislized training for career enhancement.
                </p>
                <center> <p>Have question about specific course ?</p></center><br/>
                <center> <Link to="/contact"className="btn"> Inquire About Courses</Link></center>
                
        </div>
     )
}

export default CoursesPage;