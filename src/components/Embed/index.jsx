import React from 'react';
import './styles.css';


const Embed = (props) => {

    const retornaURLDoEmbed = (url) => {
        return url.replace("watch?v=", "embed/");
    }

    return (
        <section className="short-video">
            <div className="short-embed">
                <iframe className="embed-iframe"
                    src={props.src ? retornaURLDoEmbed(props.src) : ''}
                    title={props.title ? props.title : 'Não definido'} 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen/>
            </div>
        </section>
    );
}

export default Embed;