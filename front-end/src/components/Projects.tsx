import ProjectCard from "./ProjectCard";
import { dataProjects } from "../data/dataProjects";

const Projects = () => {
    return (
        <div className="p-6">
            <br />
            <div className="grid grid-cols-3 gap-4">
                {dataProjects.map((x) => {
                    return <ProjectCard key={x.id} project={x} />;
                })}
            </div>
            <br />
        </div>
    );
};

export default Projects;
