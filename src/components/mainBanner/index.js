import React from 'react';

const mainBanner = () => {
    return (
        <>
            <section>
                <div className="container">
                    
                    <div className="slides">
                        <img src="/img/img1.jpg" alt="" />
                        <div className="content">
                            <h2>Filme Title 01</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta aspernatur quis quam. Cum consectetur eveniet voluptas eius corporis? Praesentium fugit officiis libero cum nemo magnam dicta, suscipit et eligendi.</p>
                            <a href="#"><i className="fa fa-play" aria-hidden="true"></i>Assista aqui</a>
                        </div>
                    </div>

                    <div className="slides">
                        <img src="/img/img2.jpg" alt="" />
                        <div className="content">
                            <h2>Filme Title 02</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta aspernatur quis quam. Cum consectetur eveniet voluptas eius corporis? Praesentium fugit officiis libero cum nemo magnam dicta, suscipit et eligendi.</p>
                            <a href="#"><i className="fa fa-play" aria-hidden="true"></i>Assista aqui</a>
                        </div>
                    </div>

                    <div className="slides">
                        <img src="/img/img3.jpg" alt="" />
                        <div className="content">
                            <h2>Filme Title 03</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta aspernatur quis quam. Cum consectetur eveniet voluptas eius corporis? Praesentium fugit officiis libero cum nemo magnam dicta, suscipit et eligendi.</p>
                            <a href="#"><i className="fa fa-play" aria-hidden="true"></i>Assista aqui</a>
                        </div>
                    </div>

                    <div className="slides">
                        <img src="/img/img4.jpg" alt="" />
                        <div className="content">
                            <h2>Filme Title 04</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta aspernatur quis quam. Cum consectetur eveniet voluptas eius corporis? Praesentium fugit officiis libero cum nemo magnam dicta, suscipit et eligendi.</p>
                            <a href="#"><i className="fa fa-play" aria-hidden="true"></i>Assista aqui</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="prev"> <i className="fa fa-chevron-left" aria-hidden="true"></i> </div>
                        <div className="next"> <i className="fa fa-chevron-right" aria-hidden="true"></i> </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default mainBanner;