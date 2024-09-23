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
        <div className="card card-compact bg-base-100 p-10 border-2 border-gray">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p className="">{project.body}</p>
                <br />
                <div className="card-actions justify-end">
                    <a
                        className="btn btn-xs bg-white border-1 border-black w-[70px]"
                        href={project.linkSite}
                    >
                        Site
                    </a>
                    <a
                        className="btn btn-xs bg-white border-1 border-black w-[70px]"
                        href={project.linkGithub}
                    >
                        Github
                    </a>
                    <a
                        className="btn btn-xs bg-white border-1 border-black w-[70px]"
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
