import './section.css';
function Section(){
    return(
        <div className="row">
  <div className="column">
    <div className="card">
      <p>
        <i className="fa fa-user" />
      </p>
      <h3>100+</h3>
      <p>Advisors</p>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <p>
        <i className="fa fa-check" />
      </p>
      <h3>50+</h3>
      <p>Sessions</p>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <p>
        <i className="fa fa-smile-o" />
      </p>
      <h3>100+</h3>
      <p>Happy Clients</p>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <p>
        <i className="fa fa-coffee" />
      </p>
      <h3>100+</h3>
      <p>Meetings</p>
    </div>
  </div>
</div>
    )
}
export default Section;