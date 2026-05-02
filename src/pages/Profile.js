import Typography from "../components/Typography";
import Flex from "../components/Flex";
import profileImg from "../assets/profile.jpeg";
import LinkText from "../components/LinkText";
import { useTranslation } from 'react-i18next';

function Profile() {
    const { t } = useTranslation('profile');

    const imageStyle = {
        width: 'clamp(60px, 15vw, 250px)',
        aspectRatio: '1 / 1',
        borderRadius: '50%',
        objectFit: 'cover',
    };

    return (
        <Flex gap="10px" align="start">
            <Flex gap="20px" direction="row">
                <img src={profileImg} alt="Profile" style={imageStyle} />
                <Flex align="start">
                    <Typography size="xl" variant="title">
                        MINJI JEONG
                    </Typography>
                    <Flex direction="row" gap="15px">
                        <Typography size="lg" variant="title">
                            Software Engineer
                        </Typography>
                        {/* <a href="https://github.com/jeongminji4490" target="_blank" rel="noopener noreferrer">
                            <Icon.Github size={25} style={{ cursor: 'pointer' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/minji-jeong-97a1b4236/" target="_blank" rel="noopener noreferrer">
                            <Icon.LinkedIn size={25} style={{ cursor: 'pointer' }} />
                        </a> */}
                    </Flex>
                </Flex>
            </Flex>
            <Typography size="lg" variant="semiTitle">
                Introduction
            </Typography>
            <Typography size="sm">
                {t('introduction1')}
                {t('introduction2')}
                {t('introduction3')}
            </Typography>
            <Typography size="lg" variant="semiTitle">
                Work Experience
            </Typography>
            <Flex direction="row">
                <Typography size="sm" variant="semiTitle" >
                    GE Appliances, a Haier Company (2023.11-present)
                </Typography>
                <Typography size="sm">
                    Associate Software Engineer
                </Typography>
            </Flex>
            <Flex direction="row">
                <Typography size="sm" variant="semiTitle" >
                    GE Appliances, a Haier Company (2022.09-2023.09)
                </Typography>
                <Typography size="sm">
                    Software Intern
                </Typography>
            </Flex>
            <Typography size="lg" variant="semiTitle">
                Education
            </Typography>
            <Flex direction="row">
                <Typography size="sm" variant="semiTitle">
                    {t('education1')} (2020-2022)
                </Typography>
                <Typography size="xs">
                    {t('education2')}
                </Typography>
            </Flex>
            <Typography size="xs">
                {t('education3')}
                <LinkText text="DBpia" link="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10664680" />
            </Typography>
            <Typography size="xs">
                {t('education4')}
                <LinkText text="GitHub" link="https://github.com/jeongminji4490/UTH-pro" />
            </Typography>
        </Flex>
    );
}

export default Profile;