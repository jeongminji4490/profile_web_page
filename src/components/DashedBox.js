export default function DashedBox({ children }) {
    return (
        <div style={{
            border: '2px dashed #9F9F9F',
            padding: '20px',
            marginTop: '10px',
            marginBottom: '10px',
        }}>{children}</div>
    );
}