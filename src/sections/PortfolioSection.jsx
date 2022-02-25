import projects from "../projects.js";
import Project from '../components/project'
export default function PortfolioSection () {
//   const [projects] = useState(projectsData);
  return (
        <section className="section" id="portfolio">
          <h2 className="h5 fw-600 pb-5 opacity-50 text-center">
            <span className="">PORTFOLIO </span>
          </h2>
          <div className="row">
            {projects &&
              projects.map((item) => {
                return (
                 <Project color={item.color} gitHub={item.gitHub} name={item.name} link={item.link} image={item.image}/>
                );
              })}
          </div>
          
        </section>
    )
}