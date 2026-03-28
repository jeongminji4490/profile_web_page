import Typography from "../components/Typography";
import profileImg from "../assets/profile.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Profile() {
    const wrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    };

    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
    };

    const textColumnStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const textRowStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '15px'
    }

    const imageStyle = {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        objectFit: 'cover'
    };

    const dashedBoxStyle = {
        border: '2px dashed #9F9F9F',
        padding: '20px',
        marginTop: '10px',
        marginBottom: '10px',
    };

    return (
        <div style={wrapperStyle}>
            <div style={headerStyle}>
                <img src={profileImg} alt="Profile" style={imageStyle} />
                <div style={textColumnStyle}>
                    <Typography size="xl">
                        Minji Jeong
                    </Typography>
                    <div style={textRowStyle}>
                        <Typography size="lg" color="lightGray">
                            Software Engineer
                        </Typography>
                        <a href="https://github.com/jeongminji4490" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={25} color="white" style={{ cursor: 'pointer' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/minji-jeong-97a1b4236/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={25} color="white" style={{ cursor: 'pointer' }} />
                        </a>
                    </div>
                </div>
            </div>
            <Typography size="lg">
                Introduction
            </Typography>
            <div style={dashedBoxStyle}>
                <Typography size="sm" variant="body" color="lightGray">
                    I’m a software engineer with 3+ years of experience in mobile application development. I began my career as an Android developer, where I built a foundation in developing scalable and maintainable applications.
                    In addition, I have experience in automating development workflows and building efficient CI/CD pipelines, enabling faster and more reliable delivery of mobile software.
                    Beyond my professional work, I actively expand my expertise through side projects, exploring diverse domains such as AI and cloud technologies.
                </Typography>
            </div>
            <Typography size="lg">
                Work Experience
            </Typography>
            <Typography size="sm" variant="semiTitle" color="lightGray">
                GE Appliances, a Haier Company (2023.11-present)
            </Typography>
            <Typography size="xs" variant="body" color="lightGray">
                - Associate Software Engineer
            </Typography>
            <Typography size="sm" variant="semiTitle" color="lightGray">
                GE Appliances, a Haier Company (2022.09-2023.09)
            </Typography>
            <Typography size="xs" variant="body" color="lightGray">
                - Software Engineer Intern
            </Typography>
            <Typography size="lg">
                Education
            </Typography>
            <Typography size="sm" variant="semiTitle" color="lightGray">
                Chungbuk National University (2020-2022)
            </Typography>
            <Typography size="xs" variant="body" color="lightGray">
                - Bachelor of Computer Science, GPA 3.43/4.5
            </Typography>
            <Typography size="xs" variant="body" color="lightGray">
                - Published paper: CNN based Hand Gesture Authentication Model
                <a
                    href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10412345"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#58a6ff',
                        marginLeft: '10px',
                        textDecoration: 'none'
                    }}
                >
                    [DBpia ↗]
                </a>
            </Typography>
            <Typography size="xs" variant="body" color="lightGray">
                - Project: Hand gesture authentication program written by Python
                <a
                    href="https://github.com/jeongminji4490/UTH-pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#58a6ff',
                        marginLeft: '10px',
                        textDecoration: 'none'
                    }}
                >
                    [GitHub ↗]
                </a>
            </Typography>
        </div>
    );
}

export default Profile;