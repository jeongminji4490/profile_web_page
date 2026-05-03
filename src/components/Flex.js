export default function Flex({
    children,
    direction = 'column',
    align = 'center',
    justify = 'start',
    gap = '10px',
    style
}) {
    const flexStyle = {
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap: gap,
        ...style
    };

    return <div style={flexStyle}>{children}</div>;
}