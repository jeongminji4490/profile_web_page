import Typography from "../components/Typography";
import theme from "../Theme";
import Flex from "../components/Flex";

const circleStyle = {
    width: '50%',
    height: '60%',
    borderRadius: '50%',

    backgroundColor: theme.indigoBlue,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
};

function Study() {
    return (
        <Flex justify="center" align="center" style={{ height: '100%' }}>
            <div style={circleStyle}>
                <Typography size="xl" variant="title" color={theme.gray}>
                    <a href="https://velog.io/@jeongminji4490/posts" target="_blank" rel="noopener noreferrer" style={{ color: theme.white, textDecoration: 'none' }}>
                        Velog
                    </a>
                </Typography>
            </div>
        </Flex>
    );
}

export default Study;