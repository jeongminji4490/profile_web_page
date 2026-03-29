import Typography from "../components/Typography";
import DashedBox from "../components/DashedBox";
import Flex from "../components/Flex";
import profileImg from "../assets/profile.jpeg";
import Icon from "../components/Icons";
import LinkText from "../components/LinkText";

function Profile() {

    const imageStyle = {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        objectFit: 'cover'
    };

    return (
        <Flex gap="15px">
            <Flex gap="20px" direction="row">
                <img src={profileImg} alt="Profile" style={imageStyle} />
                <Flex align="start">
                    <Typography size="xl">
                        Minji Jeong
                    </Typography>
                    <Flex direction="row" gap="15px">
                        <Typography size="lg" color="lightGray">
                            Software Engineer
                        </Typography>
                        <a href="https://github.com/jeongminji4490" target="_blank" rel="noopener noreferrer">
                            <Icon.Github size={25} color="white" style={{ cursor: 'pointer' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/minji-jeong-97a1b4236/" target="_blank" rel="noopener noreferrer">
                            <Icon.LinkedIn size={25} color="white" style={{ cursor: 'pointer' }} />
                        </a>
                    </Flex>
                </Flex>
            </Flex>
            <Typography size="lg">
                Introduction
            </Typography>
            <DashedBox>
                <Typography size="sm" variant="body" color="lightGray">
                    I’m a software engineer with 3+ years of experience in mobile application development. I began my career as an Android developer, where I built a foundation in developing scalable and maintainable applications.
                    In addition, I have experience in automating development workflows and building efficient CI/CD pipelines, enabling faster and more reliable delivery of mobile software.
                    Beyond my professional work, I actively expand my expertise through side projects, exploring diverse domains such as AI and cloud technologies.
                </Typography>
            </DashedBox>
            <Typography size="lg">
                Work Experience
            </Typography>
            <Typography size="sm" variant="semiTitle" color="lightGray">
                GE Appliances, a Haier Company (2023.11-present)
            </Typography>
            <Typography size="xs" variant="body" color="lightGray">
                Associate Software Engineer
            </Typography>
            <Typography size="sm" variant="semiTitle" color="lightGray">
                GE Appliances, a Haier Company (2022.09-2023.11)
            </Typography>
            <Typography size="xs" variant="body" color="lightGray">
                Software Intern
            </Typography>
            <Typography size="lg">
                Education
            </Typography>
            <Typography size="sm" variant="semiTitle" color="lightGray">
                Chungbuk National University (2020-2022)
            </Typography>
            <Typography size="xs" variant="body" color="lightGray">
                Bachelor of Computer Science
            </Typography>
            <Typography size="xs" variant="body" color="lightGray">
                Published paper: CNN based Hand Gesture Authentication Model
                <LinkText text="DBpia" link="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10664680" />
            </Typography>
            <Typography size="xs" variant="body" color="lightGray">
                Project: Hand gesture authentication program written by Python
                <LinkText text="GitHub" link="https://github.com/jeongminji4490/UTH-pro" />
            </Typography>
        </Flex>
    );
}

export default Profile;