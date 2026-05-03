import theme from "../Theme";

export default function Divider() {
    return (
        <div style={{
            width: '100%',
            borderTop: `2px dashed ${theme.gray}`,
            margin: '10px 0'
        }} />
    );
}