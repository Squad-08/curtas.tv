import React from 'react';
import './styles.css';


const Embed = (embedId) => {
    return (
        <div className="embed">
            <iframe className="embed-iframe"
                src={`https://www.youtube.com/embed/zpOULjyy-n8?rel=0${embedId}`}
                title="Embedded youtube"
            />
        </div>
    );
}

export default Embed;

