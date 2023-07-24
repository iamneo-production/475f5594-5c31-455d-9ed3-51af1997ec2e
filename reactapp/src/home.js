import { Link } from "react-router-dom";
import Navbar from "./navbar";
import'./home.css';
import SidePanel from "./sidepanel";
import Section from "./section";
function Home(){
    return(
        
        <div>
            <Navbar/>
            <h1>Advisor Hub</h1>
            <Section/>
            <div className="container">
    <div className="post">
      <div className="header_post">
        
      </div>
      <div className="body_post">
        <div className="container7">
          <h1 style={{color:"black"}}>Upcoming Meeting</h1>
          <p>
           Private virtual meeting on Financial Counsuling.
           
          </p>
          <br></br>
          <br></br>
          
          <div className="container_infos">
            <div className="postedBy">
              <span>Participants :</span>
              <br></br>
              Mr. Antony Broad and Mr.Benedict Cumberbatch
            </div>
            
              
                <ul>
                  <li>Date:</li>
                  <li>Time: </li>
                  {/* <li className="j"><a href="/join">Join Now</a></li>  */}
                  <button>Join now</button>
                
               
                </ul>
              
           
          </div>
        </div>
      </div>
    </div>
  </div>
  
    <footer>
      <div className="texto">
       
      </div>
    </footer>
  


                
          
            
        </div>
        
    )

}
export default Home;