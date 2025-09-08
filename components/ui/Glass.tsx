import React from 'react';

interface GlassProps {
    className?: string;
    style?: React.CSSProperties;
}

const Glass: React.FC<GlassProps> = ({ className = '' }) => {
    return (
        <div>
            <div className={`liquidGlass-effect ${className}`} />
            <div className={`liquidGlass-tint ${className}`} />
            <div className={`liquidGlass-shine ${className}`} />
        </div>
    );
};

export default Glass;


