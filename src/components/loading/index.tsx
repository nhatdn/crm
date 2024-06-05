import React from 'react';
import './style.scss';
const Loading: React.FC = () => {
    return (
        <div className="loading-container">
            <img className="loading-img" src="./public/loading.webp" alt="image loading" />
        </div>
    );
};

export default Loading;