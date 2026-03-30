import Typography from "../components/Typography";
import DashedBox from "../components/DashedBox";
import Flex from "../components/Flex";
import profileImg from "../assets/profile.jpeg";
import Icon from "../components/Icons";
import LinkText from "../components/LinkText";
import { useTranslation } from 'react-i18next';

function Profile() {
    const { t } = useTranslation('profile');

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
                    {t('introduction1')}
                    {t('introduction2')}
                    {t('introduction3')}
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
                {t('education1')} (2020-2022)
            </Typography>
            <Typography size="xs" variant="body" color="lightGray">
                {t('education2')}
            </Typography>
            <Typography size="xs" variant="body" color="lightGray">
                {t('education3')}
                <LinkText text="DBpia" link="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10664680" />
            </Typography>
            <Typography size="xs" variant="body" color="lightGray">
                {t('education4')}
                <LinkText text="GitHub" link="https://github.com/jeongminji4490/UTH-pro" />
            </Typography>
        </Flex>
    );
}

export default Profile;