import t1 from './images/Charles Leclerc (2).jpeg';
import t2 from './images/Corey Mylchreest (1).jpeg';
import t3 from './images/download (3).jpeg';
import { Link } from 'react-router-dom';
function Search(){
    const templates = [
        {
          id: 1,
          name: 'Mr.Charles Leclerc',
          description: 'Expert in Mechanics',
          image: t1,
          
        },
        {
          id: 2,
          name: 'Mr.Corey Mylchreest',
          description: 'Expert in Software Designing',
          image:  t2,
        },
        {
          id: 3,
          name: 'Mr.Joseph Morgan',
          description: 'Expert in Accounting',
          image: t3,
        }
    ]
    return(
        <>
         <div className="create-portfolio">
      <div className="create-portfolio-header">
        <h1 className="create-portfolio-title">Search Results</h1>
        <p className="create-portfolio-description"></p>
      </div>
      <div className="create-portfolio-templates">
        {templates.map((template) => (
          <div className="create-portfolio-template" key={template.id}>
            <div className="template-image">
              <img src={template.image} alt={template.name} />
            </div>
            <div className="template-details">
              <h2 className="template-name">{template.name}</h2>
              <p className="template-description">{template.description}</p>
              <Link to={`/viewadvisor`} className="template-link">View</Link>
            </div>
          </div>
        ))}
      </div>
      <footer className="homepage-footer">
      
      </footer>
    </div>
        </>
    )

}
export default Search;