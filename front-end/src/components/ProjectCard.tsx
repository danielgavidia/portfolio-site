interface iProjectCard {
    project: {
        title: string;
        body: string;
        image: string;
        linkSite: string;
        linkGithub: string;
        linkDemo: string;
    };
}

const ProjectCard: React.FC<iProjectCard> = ({ project }) => {
    return (
        <div className="card bg-base-100 shadow-x p-10">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.body}</p>
                <div className="card-actions justify-evenly">
                    <a
                        className="btn btn-sm btn-primary w-20"
                        href={project.linkSite}
                    >
                        Site
                    </a>
                    <a
                        className="btn btn-sm btn-primary w-20"
                        href={project.linkGithub}
                    >
                        Github
                    </a>
                    <a
                        className="btn btn-sm btn-primary w-20"
                        href={project.linkDemo}
                    >
                        Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
