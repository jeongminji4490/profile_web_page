import Typography from "../components/Typography";
import theme from "../Theme";
import Flex from "../components/Flex";
import BulletList from "../components/BulletList";
import Icon from "../components/Icons";
import { useTranslation } from "react-i18next";

function Project() {
    const { t } = useTranslation('project');

    return (
        <Flex direction="column" gap="20px" align="stretch">
            <ProjectItem
                title="Pokedex"
                date="2026.02 - 1 week"
                description="Flutter 3.41.1 • Riverpod • Dio"
                github="https://github.com/jeongminji4490/flutter-simple-pokedex"
                link="http://minji-pokedex-flutter-web.s3-website-ap-southeast-2.amazonaws.com/"
                features={[
                    <>{t('pokedex_1')}</>,
                    <>{t('pokedex_2')}</>,
                    <>{t('pokedex_3')}</>
                ]}
                techs={[
                    { icon: <Icon.Flutter />, text: "Flutter", color: "#2088ff" },
                    { icon: <Icon.Riverpod />, text: "Riverpod", color: "#05998b" },
                    { icon: <Icon.Cloud />, text: "AWS S3", color: "#ff4b4b" }
                ]}
            />

            <div style={{
                width: '100%',
                borderTop: `2px dashed ${theme.gray}`,
                margin: '10px 0'
            }} />

            <ProjectItem
                title="Nickname Generator"
                date="2026.01 - 2 days"
                description="Full-stack Web Service • LLM Integration"
                github="https://github.com/jeongminji4490/nickname_maker"
                link="http://13.238.182.199:8501/"
                features={[
                    <>{t('nickname_1')}</>,
                    <>{t('nickname_2')}</>,
                    <>{t('nickname_3')}</>,
                    <>{t('nickname_4')}</>
                ]}
                techs={[
                    { icon: <Icon.Python />, text: "Python", color: "#ffd700" },
                    { icon: <Icon.Docker />, text: "Docker", color: "#2496ed" },
                    { icon: <Icon.Cloud />, text: "AWS EC2", color: "#ff4b4b" }
                ]}
            />
        </Flex>
    );
}

function ProjectItem({ title, date, description, github, link, features, techs }) {
    return (
        <Flex align="start">
            <Flex direction="row" justify="space-between" align="flex-start" style={{ marginBottom: '25px' }}>
                <div>
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '10px' }}>
                        {github && <a href={github} target="_blank" rel="noreferrer" style={{ color: theme.white }}><Icon.Github size={24} /></a>}
                        {link && <a href={link} target="_blank" rel="noreferrer" style={{ color: theme.white }}><Icon.Link size={22} /></a>}
                    </div>
                    <Flex direction="row" align="baseline" gap="10px">
                        <Typography size="lg">{title}</Typography>
                        <Typography size="sm" variant="title" color="gray">{date}</Typography>
                    </Flex>
                    <Typography size="xs" color="gray" style={{ marginTop: '5px' }}>{description}</Typography>
                </div>
            </Flex>

            <div style={{ marginBottom: '30px' }}>
                <Typography size="sm" weight="bold" color="lightGray" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Icon.Code size={14} /> Key Features
                </Typography>
                <BulletList gap="10px">
                    {features.map((feature, i) => <span key={i}>{feature}</span>)}
                </BulletList>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {techs.map((tech, i) => (
                    <TechTag key={i} icon={tech.icon} text={tech.text} color={tech.color} />
                ))}
            </div>
        </Flex>
    );
}

function TechTag({ icon, text, color }) {
    return (
        <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 12px',
            borderRadius: '20px',
            fontSize: '11px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            color: '#fff',
            border: `1px solid ${color}44`,
        }}>
            <span style={{ color: color, display: 'flex' }}>{icon}</span>
            {text}
        </span>
    );
}

export default Project;