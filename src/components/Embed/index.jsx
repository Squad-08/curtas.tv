import React from 'react';
import './styles.css';


const Embed = (props) => {

    const retornaURLDoEmbed = (url) => {
        return url.replace("watch?v=", "embed/");
    }

    return (
        <div className="short-embed">
            <iframe className="embed-iframe"
                src={props.src ? retornaURLDoEmbed(props.src) : ''}
                title={props.title ? props.title : 'Não definido'} />
        </div>
    );
}

export default Embed;