import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from './Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import theme from '../Theme';

export default function ProjectCard({
    title,
    subTitle,
    imagePath,
    techs
}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={imagePath}
                    alt={title}
                />
                <CardContent>
                    <Typography size="md" variant="semiTitle">
                        {title}
                    </Typography>
                    <Typography size="xs" variant="body">
                        {subTitle}
                    </Typography>
                </CardContent>
                <div style={{ display: 'flex', gap: '10px', margin: '0 16px', flexWrap: 'wrap' }}>
                    {techs.map((tech, i) => (
                        <TechTag key={i} icon={tech.icon} text={tech.text} color={tech.color} />
                    ))}
                </div>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    GO
                </Button>
            </CardActions>
        </Card>
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
            backgroundColor: theme.black,
            color: theme.white,
            border: `1px solid ${color}44`,
        }}>
            <span style={{ color: color, display: 'flex' }}>{icon}</span>
            {text}
        </span>
    );
}
