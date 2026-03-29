import theme from "../Theme";
import Typography from "./Typography";
import React from "react";

function BulletList({
    children,
    gap = '12px',
}) {
    const array = React.Children.toArray(children);
    return (
        <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', padding: 0, margin: 0, gap: gap }} >
            {
                array.map((child, index) => (
                    <li key={index} style={{ display: 'flex', gap: '10px' }}>
                        <span style={{ color: theme.white }}>•</span>
                        <Typography size="xs" variant="body" color="lightGray">
                            {child}
                        </Typography>
                    </li>
                ))
            }
        </ul>
    )
}

export default BulletList;