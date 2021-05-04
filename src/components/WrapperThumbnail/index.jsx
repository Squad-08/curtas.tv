import React from 'react';
import './styles.css';
import ShortThumbnailCarroussel from '../ShortThumbnailCarroussel';
import ShortTitleCarroussel from '../ShortTitleCarroussel';

const WrapperThumbnail = () => {
    return (
        <div className="wrapper-thumbnail">
            <ShortThumbnailCarroussel />
            <ShortTitleCarroussel />
        </div>
    )
}

export default WrapperThumbnail