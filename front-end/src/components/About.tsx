import { dataEducation } from "../data/dataEducation";
import { dataExperience } from "../data/dataExperience";

interface iCardEducation {
    institution: string;
    dateStart: string;
    dateEnd: string;
    description: string[];
}

interface iCardExperience {
    company: string;
    location: string;
    dateStart: string;
    dateEnd: string;
    role: string;
    description: string[];
}

const CardEducation: React.FC<iCardEducation> = ({
    institution,
    dateStart,
    dateEnd,
    description,
}) => {
    return (
        <div>
            <div>
                <p>{institution}</p>
                <p>
                    {dateStart} - {dateEnd}
                </p>
            </div>
            <div>
                {description.map((x, id) => {
                    return <p key={id}>{x}</p>;
                })}
            </div>
        </div>
    );
};

const CardExperience: React.FC<iCardExperience> = ({
    company,
    location,
    dateStart,
    dateEnd,
    role,
    description,
}) => {
    return (
        <div>
            <div>
                <p>{company}</p>
                <p>{location}</p>
                <p>
                    {dateStart} - {dateEnd}
                </p>
            </div>
            <div>{role}</div>
            <div>
                {description.map((x, id) => {
                    return <p key={id}>{x}</p>;
                })}
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div>
            <div>Daniel Gavidia</div>
            <div>Software Development, Finance</div>
            <div>Brooklyn, NY</div>
            <div>
                <div>email</div>
                <div>github</div>
                <div>linkedin</div>
                <div>X/twitter</div>
            </div>
            <div>
                {dataEducation.map((x, id) => {
                    return (
                        <CardEducation
                            key={id}
                            institution={x.institution}
                            dateStart={x.dateStart}
                            dateEnd={x.dateEnd}
                            description={x.description}
                        />
                    );
                })}
            </div>
            <div>
                {dataExperience.map((x, id) => {
                    return (
                        <CardExperience
                            key={id}
                            company={x.company}
                            location={x.location}
                            dateStart={x.dateStart}
                            dateEnd={x.dateEnd}
                            role={x.role}
                            description={x.description}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default About;
