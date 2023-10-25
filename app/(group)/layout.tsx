import React from 'react'

const GropuLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full bg-sky-600 text-white">{children}</div>
    );
}

export default GropuLayout;