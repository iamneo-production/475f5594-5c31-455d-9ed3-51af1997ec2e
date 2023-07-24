import { Link } from "react-router-dom";
function Contact(){
   
    return(
        <div className="container-fluid px-1 py-5 mx-auto">
  <div className="row d-flex justify-content-center">
    <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
        <form className="form-card" >
          <div className="row justify-content-between text-left">
            <div className="form-group col-sm-6 flex-column d-flex">
                
            <h3 style={{color:"black"}}>Contact the advisor</h3>
    
              
              <label className="form-control-label px-3">
                Name<span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter your first name"
               
              />
            </div>
            <div className="form-group col-sm-6 flex-column d-flex">
              
              <label className="form-control-label px-3">
                Field of Interest<span className="text-danger" placeholder="Enter your field of interest"> *</span>
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Enter your field of interest"
               
              />
            </div>
          </div>
          <div className="row justify-content-between text-left">
            <div className="form-group col-sm-6 flex-column d-flex">
              
              <label className="form-control-label px-3">
                Email<span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your mail id"
                
              />{" "}
            </div>
            <div className="form-group col-sm-6 flex-column d-flex">
              {" "}
              <label className="form-control-label px-3">
                Phone number<span className="text-danger"> *</span>
              </label>{" "}
              <input
                type="text"
                id="mob"
                name="mob"
                placeholder="Enter your Phone number"
               
              />{" "}
            </div>
          </div>
          <div className="form-group col-sm-6 flex-column d-flex">
              {" "}
              <label className="form-control-label px-3">
               Date and time <span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                id="job"
                name="job"
                placeholder="Enter Date and time"
                
              />
            </div>
            
          <div className="row justify-content-between text-left">
            <div className="form-group col-sm-6 flex-column d-flex">
              {" "}
              <label className="form-control-label px-3">
                Topic of discussion<span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                id="job"
                name="job"
                placeholder="Enter the topic to be discussed"
                
              />
            </div>
          </div>
          <div className="row justify-content-between text-left">
            <div className="form-group col-12 flex-column d-flex">
             
              <label className="form-control-label px-3">
               What support do you need?
                <span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                id="ans"
                name="ans"
                placeholder="Enter your doubt"
                
              />
            </div>
          </div>
      
            <div className="form-group col-sm-6">
             
              <button type="submit" className="btn-block btn-primary"><Link to="./payment">
                Request a Session
                </Link></button>
                <div/>
                <div/>
          </div>
        </form>
      </div>
    </div>
  </div>


    )
}
export default Contact;