import Typography from "../../components/Typography";
import theme from "../../Theme";
import Flex from "../../components/Flex";
import BulletList from "../../components/BulletList";
import Icon from "../../components/Icons";
import { useTranslation } from "react-i18next";
import Divider from "../../components/Divider";
import ProjectCard from "../../components/Card";


function ProjectMain() {

    const { t } = useTranslation('project');

    return (
        <Flex direction="row" gap="10px" align="stretch">
            <ProjectCard
                title="Portfolio Website"
                subTitle={t('portfolio_subtitle')}
                imagePath={require("../../assets/portfolio_site.png")}
                techs={[
                    { icon: <Icon.React />, text: "React", color: "#61dafb" },
                    { icon: <Icon.Cloud />, text: "AWS S3", color: "#ff4b4b" },
                    { icon: <Icon.Cloud />, text: "CloudFront", color: "#88E788" },
                ]}
            />
            <ProjectCard
                title="Pokedex"
                subTitle={t('pokedex_subtitle')}
                imagePath={require("../../assets/pokedex.png")}
                techs={[
                    { icon: <Icon.Flutter />, text: "Flutter", color: "#2088ff" },
                    { icon: <Icon.Riverpod />, text: "Riverpod", color: "#05998b" },
                    { icon: <Icon.Cloud />, text: "AWS S3", color: "#ff4b4b" }
                ]}
            />
            <ProjectCard
                title="Nickname Maker"
                subTitle={
                    <span style={{ whiteSpace: 'pre-line' }}>
                        {t('nickname_subtitle')}
                    </span>
                }
                imagePath={require("../../assets/nickname_maker.png")}
                techs={[
                    { icon: <Icon.Python />, text: "Python", color: "#ffd700" },
                    { icon: <Icon.Docker />, text: "Docker", color: "#2496ed" },
                    { icon: <Icon.Cloud />, text: "AWS EC2", color: "#ff4b4b" }
                ]}
            />
        </Flex>
    )
}

export default ProjectMain;