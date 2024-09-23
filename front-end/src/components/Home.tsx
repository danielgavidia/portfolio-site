import ProjectCard from "./ProjectCard";

const data = [
    {
        id: 0,
        title: "project1",
        body: "this is project1!",
        image: "",
        linkSite: "",
        linkGithub: "https://github.com/danielgavidia/portfolio-site",
        linkDemo: "",
    },
    {
        id: 1,
        title: "project2",
        body: "this is project2!",
        image: "",
        linkSite: "",
        linkGithub: "",
        linkDemo: "",
    },
    {
        id: 2,
        title: "project3",
        body: "this is project3",
        image: "",
        linkSite: "",
        linkGithub: "",
        linkDemo: "",
    },
    {
        id: 3,
        title: "project4",
        body: "this is project4!",
        image: "",
        linkSite: "",
        linkGithub: "",
        linkDemo: "",
    },
    {
        id: 4,
        title: "project5",
        body: "this is project5!",
        image: "",
        linkSite: "",
        linkGithub: "",
        linkDemo: "",
    },
    {
        id: 5,
        title: "project6",
        body: "this is project6",
        image: "",
        linkSite: "",
        linkGithub: "",
        linkDemo: "",
    },
];

const Home = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {data.map((x) => {
                return <ProjectCard key={x.id} project={x} />;
            })}
        </div>
    );
};

export default Home;
