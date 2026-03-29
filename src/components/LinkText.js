function LinkText({ text, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{
            color: '#58a6ff',
            marginLeft: '10px',
            textDecoration: 'none'
        }}>
            [{text}] ↗
        </a>
    )
}

export default LinkText;