import theme from "../Theme";
import { useTranslation } from "react-i18next";

function LaunguageSwitcher({ ns }) {
    const { i18n } = useTranslation(ns);

    const currentLang = i18n.language;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div style={languageBoxStyle}>
            <button
                style={langButtonStyle(currentLang === 'en')}
                onClick={() => changeLanguage('en')}
            >
                [ EN ]
            </button>
            <button
                style={langButtonStyle(currentLang === 'ko')}
                onClick={() => changeLanguage('ko')}
            >
                [ KO ]
            </button>
        </div>
    );
}

const languageBoxStyle = {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    display: 'flex',
    gap: '15px',
};

const langButtonStyle = (isActive) => ({
    background: 'none',
    border: 'none',
    color: isActive ? theme.yellow : theme.white,
    fontFamily: "'Inconsolata', monospace",
    fontSize: '16px',
    cursor: 'pointer',
    padding: '5px',
    textDecoration: isActive ? 'underline' : 'none',
});

export default LaunguageSwitcher;