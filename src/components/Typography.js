const SIZES = {
    xs: { fontSize: 'clamp(14px, 1.5vw, 18px)' },
    sm: { fontSize: 'clamp(16px, 2vw, 22px)' },
    md: { fontSize: 'clamp(20px, 3vw, 30px)' },
    lg: { fontSize: 'clamp(28px, 4vw, 40px)' },
    xl: { fontSize: 'clamp(40px, 6vw, 60px)' }
}

const FONTS = {
    title: {
        fontFamily: "'BJCree', serif",
        fontWeight: '600'
    },
    semiTitle: {
        fontFamily: "'BJCree', serif",
        fontWeight: '600'
    },
    body: {
        fontFamily: "'BJCree', serif",
    },
}

export default function Typography({
    tag: Tag = 'p',
    variant = 'body',
    size = 'md',
    color = 'black',
    children,
    style = {}
}) {
    const combinedStyle = {
        margin: 0,
        marginTop: '2px',
        marginBottom: '2px',
        color: color,
        ...FONTS[variant],
        ...SIZES[size],
        ...style
    }

    return <Tag style={combinedStyle}>{children}</Tag>;
}