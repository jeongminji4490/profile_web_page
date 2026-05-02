import theme from "../Theme";

function Divider() {
    return (
        <div style={{
            width: '100%',
            borderTop: `2px dashed ${theme.gray}`,
            margin: '10px 0'
        }} />
    );
}

export default Divider;