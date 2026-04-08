const SIZES = {
    xs: { fontSize: 'clamp(14px, 1.5vw, 18px)' },
    sm: { fontSize: 'clamp(16px, 2vw, 22px)' },
    md: { fontSize: 'clamp(20px, 3vw, 30px)' },
    lg: { fontSize: 'clamp(28px, 4vw, 40px)' },
    xl: { fontSize: 'clamp(40px, 6vw, 60px)' }
}

const FONTS = {
    title: {
        fontFamily: "'Anton SC', sans-serif",
    },
    semiTitle: {
        fontFamily: "'Inconsolata', sans-serif",
        fontWeight: '700'
    },
    body: {
        fontFamily: "'Inconsolata', sans-serif",
    }
}

function Typography({
    tag: Tag = 'p',
    variant = 'title',
    size = 'md',
    color = 'white',
    children,
    style
}) {
    const combinedStyle = {
        margin: 0,
        color: color,
        ...FONTS[variant],
        ...SIZES[size],
        ...style
    }

    return <Tag style={combinedStyle}>{children}</Tag>;
}

export default Typography;