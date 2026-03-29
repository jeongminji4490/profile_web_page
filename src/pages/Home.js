import '../App.css';

import { useState, useEffect } from 'react';
import Typography from "../components/Typography";
import Flex from "../components/Flex";
import theme from "../Theme";
import { LiaQrcodeSolid } from "react-icons/lia";

const pageStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.indigoBlue,
    padding: '10%',
    overflow: 'hidden',
    cursor: 'default',
};

function Home() {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => {
                setProgress(prev => prev + 1);
            }, 5);
            return () => clearTimeout(timer);
        } else {
            setIsComplete(true);
        }
    }, [progress]);

    return (
        <div style={pageStyle}>
            <Flex direction="column" align="start" gap="20px">

                <Typography color={theme.yellow} size="lg" variant="semiTitle" style={{ marginBottom: '30px' }}>
                    :)
                </Typography>

                <Typography color={theme.yellow} size="sm" variant="semiTitle" style={{ lineHeight: '1.4' }}>
                    Your expectations ran into an unexpected developer. <br />
                    We’re just collecting some skill info, and then we’ll show you the portfolio.
                </Typography>

                <Typography color={theme.yellow} variant="semiTitle" size="lg" weight="light" style={{ marginTop: '20px' }}>
                    {progress}% complete
                </Typography>

                {isComplete && (
                    <div style={{ marginTop: '40px', animation: 'fadeIn 1s ease' }}>
                        <Typography size="sm" color={theme.lightGray} variant="semiTitle" style={{ fontStyle: 'italic' }}>
                            Error resolved. Realizing the potentials...
                        </Typography>

                        <a href="/profile" style={{
                            marginTop: '20px',
                            display: 'inline-block',
                            color: '#FFFFFF',
                            fontFamily: "'Inconsolata', sans-serif",
                            textDecoration: 'none',
                            fontSize: '20px',
                        }}>
                            View Profile →
                        </a>
                    </div>
                )}

                <Flex direction="row" gap="50px" style={{ marginTop: '50px' }}>
                    <LiaQrcodeSolid size={100} color={theme.white} />
                    <Flex direction="column" align="start" gap="8px">
                        <Typography size="xs" variant="body" color={theme.lightGray} style={{ marginBottom: '10px' }}>
                            For more information about this developer, visit:
                        </Typography>
                        <Typography size="xs" variant="semiTitle" style={{ textDecoration: 'underline' }}>
                            <a href="https://www.linkedin.com/in/minji-jeong-97a1b4236/" target="_blank" rel="noopener noreferrer" style={{ color: theme.white }}>
                                https://www.linkedin.com/in/minji-jeong-97a1b4236/
                            </a>
                        </Typography>
                        <Typography size="xs" variant="semiTitle" color={theme.yellow} style={{ marginTop: '10px' }}>
                            Stop Code: CRITICAL_SKILL_REQUIRED
                        </Typography>
                    </Flex>
                </Flex>


            </Flex>
        </div>
    );
}

export default Home;