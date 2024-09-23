import { dataEducation } from "../data/dataEducation";
import { dataExperience } from "../data/dataExperience";
import { dataContact } from "../data/dataContact";
import imageProfile from "../assets/profile.jpg";

interface iCardResume {
    institution: string;
    location: string;
    dateStart: string;
    dateEnd: string;
    role: string;
    description: string[];
}

const CardResume: React.FC<iCardResume> = ({
    institution,
    location,
    dateStart,
    dateEnd,
    role,
    description,
}) => {
    return (
        <div>
            <div>
                <div className="flex justify-between">
                    <p className="text-sm font-medium">{institution}</p>
                    <p className="text-xs font-light text-right">{location}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-xs font-bold">{role}</p>
                    <p className="text-xs font-light">
                        {dateStart} - {dateEnd}
                    </p>
                </div>
            </div>
            <div>
                {description.map((x, id) => {
                    return (
                        <p key={id} className="text-sm font-light">
                            &#8226; {x}
                        </p>
                    );
                })}
            </div>
            <br />
        </div>
    );
};

const About = () => {
    return (
        <div className="flex justify-center">
            <div className="w-[600px]">
                <br />
                <br />
                <div className="flex">
                    <div className="w-[300px]">
                        <div className="text-lg font-bold">Daniel Gavidia</div>
                        <div className="text-sm font-medium">
                            Software Development, Finance
                        </div>
                        <div className="text-sm font-light">Brooklyn, NY</div>
                        <br />
                        <div>
                            {dataContact.map((x, id) => {
                                return (
                                    <a href={x.linkHyper}>
                                        <div
                                            key={id}
                                            className="flex space-x-4 pb-2"
                                        >
                                            <img
                                                src={x.linkSrc}
                                                alt="svgImg"
                                                className="w-[25px] h-[25px]"
                                            />
                                            <div className="text-xs content-center">
                                                {x.linkContact}
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-[300px] flex justify-end">
                        <img
                            src={imageProfile}
                            className="w-[200px] h-[200px] rounded-lg"
                        />
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <div className="text-lg font-bold">Education</div>
                    {dataEducation.map((x, id) => {
                        return (
                            <CardResume
                                key={id}
                                institution={x.institution}
                                location={x.location}
                                dateStart={x.dateStart}
                                dateEnd={x.dateEnd}
                                role={x.role}
                                description={x.description}
                            />
                        );
                    })}
                </div>
                <br />
                <div>
                    <div className="text-lg font-bold">Experience</div>
                    {dataExperience.map((x, id) => {
                        return (
                            <CardResume
                                key={id}
                                institution={x.institution}
                                location={x.location}
                                dateStart={x.dateStart}
                                dateEnd={x.dateEnd}
                                role={x.role}
                                description={x.description}
                            />
                        );
                    })}
                </div>
                <br />
                <br />
            </div>
        </div>
    );
};

export default About;
