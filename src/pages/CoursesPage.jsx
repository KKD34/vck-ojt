import Header from "../components/Header/Header";

const CoursesPage = () => {
     return (
        <div>
            <Header/>
            <h1  style={{color:"blue"}}> Our Academic Programs </h1>
            <p> vivekanand College offers a comperhensive range of undergraduate and postgraduate programs desingned to equip students with
                the knowledge and skills demanded by todays dynamic global landscape.Our curriculum is regularly updated to reflect industry
                trends and academic advancements. </p>
                <h2>Discover Campus Life</h2>
                <h2> Undergraduate Programs(UG)</h2>
                <ul>
                    <li><b>Bachelor of Science (B.Sc.)</b></li>
                    <li>Computer Science (3 years)</li>
                    <li>Informantion Technology (3 years)</li>
                    <li>Biotechnology (3 years)</li>
                    <li><b> Bachelor of Commerce(B.com)</b></li>
                    <li>Accounting & Finance(3 years) </li>
                    <li>Banking & Insurance</li>
                    
                     <li><b>Bachelor of Art (B.A)</b></li>
                     <li>English Literature</li>
                     <li> Psychology</li>  
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
                <table border="1">
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
                <h2> Specialized and Vocational Courses</h2>
                <hr/>
                <p> In Addition to traditional degree programs.we offer various certificate and deploma courses in areas like Degital Marketing,
                    Web Development ,Data Analytics ,and Soft Skills Development, provideng specislized training for career enhancement.
                </p>
                <center> Have question about specific course ?</center>
                
        </div>
     )
}

export default CoursesPage;