import React from 'react';
import './styles.css';


const YoutubeEmbed = (embedId) => {
    return (
        <>
            <div class="embed-responsive-embed-responsive-16by9">
            <iframe 
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/zpOULjyy-n8?rel=0${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube" 
            />
            </div>
        </>
    );
}


export default YoutubeEmbed;
