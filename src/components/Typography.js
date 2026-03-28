const SIZES = {
    xs: { fontSize: '18px' },
    sm: { fontSize: '22px' },
    md: { fontSize: '30px' },
    lg: { fontSize: '40px' },
    xl: { fontSize: '60px' }
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