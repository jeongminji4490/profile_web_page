import '../App.css';

import { useState, useEffect } from 'react';
import Typography from "../components/Typography";
import Flex from "../components/Flex";
import theme from "../Theme";
import { LiaQrcodeSolid } from "react-icons/lia";
import { useTranslation } from 'react-i18next';
import LaunguageSwitcher from '../components/LanguageSwitcher';

function Home() {
    const { t } = useTranslation('home');

    const { progress, isComplete } = useProgress(5);

    return (
        <div style={pageStyle}>
            <Flex direction="column" align="start" gap="20px">

                <Typography color={theme.yellow} size="lg" variant="semiTitle" style={{ marginBottom: '30px' }}>
                    :)
                </Typography>

                <Typography color={theme.yellow} size="sm" variant="semiTitle" style={{ lineHeight: '1.4' }}>
                    {t('paragraph1')} <br />
                    {t('paragraph2')}
                </Typography>

                <Typography color={theme.yellow} variant="semiTitle" size="lg" weight="light" style={{ marginTop: '20px' }}>
                    {progress}% {t('complete')}
                </Typography>

                {isComplete && (
                    <div style={{ marginTop: '40px', animation: 'fadeIn 1s ease' }}>
                        <Typography size="sm" color={theme.lightGray} variant="semiTitle" style={{ fontStyle: 'italic' }}>
                            {t('paragraph3')}
                        </Typography>

                        <a href="/profile" style={{
                            marginTop: '20px',
                            display: 'inline-block',
                            color: '#FFFFFF',
                            fontFamily: "'Inconsolata', sans-serif",
                            textDecoration: 'none',
                            fontSize: '20px',
                        }}>
                            {t('viewProfile')} →
                        </a>
                    </div>
                )}

                <Flex direction="row" gap="50px" style={{ marginTop: '50px' }}>
                    <LiaQrcodeSolid size={100} color={theme.white} />
                    <Flex direction="column" align="start" gap="8px">
                        <Typography size="xs" variant="body" color={theme.lightGray} style={{ marginBottom: '10px' }}>
                            {t('paragraph4')}:
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

                <LaunguageSwitcher ns={'home'}>
                </LaunguageSwitcher>

            </Flex>
        </div>
    );
}

export function useProgress(speed = 5) {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => setProgress(p => p + 1), speed);
            return () => clearTimeout(timer);
        } else {
            setIsComplete(true);
        }
    }, [progress, speed]);

    return { progress, isComplete };
}

const pageStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.indigoBlue,
    padding: '10%',
    overflow: 'hidden',
    cursor: 'default',
};

export default Home;