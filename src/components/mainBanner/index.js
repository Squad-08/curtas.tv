import React from 'react';

const mainBanner = () => {
    return (
        <>
            <div id="items-wrapper">
                <div id="items">
                    <div class="item banner">
                        <img src="/day10_Carousel/img1.jpg" alt="" class="bg">
                        <div class="content">
                            <h2 class="movieTitle">Nome do Curta</h2>
                            <h4>
                                <span>2020</span>
                                <span><i>12+</i></span>
                                <span>1h55</span>
                                <span>Actions</span>
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa labore quod est praesentium vitae fuga ea maiores, architecto cumque iste impedit cupiditate consectetur amet. Pariatur officia corrupti possimus tempore incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa labore quod est praesentium vitae fuga ea maiores, architecto cumque iste impedit cupiditate consectetur amet. </p>
                            <div class="buttons">
                                <a href="#"> > PLay</a>
                            </div>
                        </div>
                    </div>

                    <div class="item banner">
                        <img src="/day10_Carousel/img2.jpg" alt="" class="bg">
                        <div class="content">
                            <h2 class="movieTitle">Nome do Curta</h2>
                            <h4>
                                <span>2020</span>
                                <span><i>12+</i></span>
                                <span>1h55</span>
                                <span>Actions</span>
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa labore quod est praesentium vitae fuga ea maiores, architecto cumque iste impedit cupiditate consectetur amet. Pariatur officia corrupti possimus tempore incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa labore quod est praesentium vitae fuga ea maiores, architecto cumque iste impedit cupiditate consectetur amet. </p>
                            <div class="buttons">
                                <a href="#"> > PLay</a>
                            </div>
                        </div>
                    </div>

                    <div class="item banner">
                        <img src="/day10_Carousel/img3.jpg" alt="" class="bg">
                        <div class="content">
                            <h2 class="movieTitle">Nome do Curta</h2>
                            <h4>
                                <span>2020</span>
                                <span><i>12+</i></span>
                                <span>1h55</span>
                                <span>Actions</span>
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa labore quod est praesentium vitae fuga ea maiores, architecto cumque iste impedit cupiditate consectetur amet. Pariatur officia corrupti possimus tempore incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa labore quod est praesentium vitae fuga ea maiores, architecto cumque iste impedit cupiditate consectetur amet. </p>
                            <div class="buttons">
                                <a href="#"> > PLay</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <script>
                document.querySelector("#items").addEventListener("wheel", event => {
                        if(event.deltaY > 0){
                            event.target.scrollBy(300, 0);
                        } else {
                            event.target.scrollBy(-300, 0);
                        }
                    });
            </script>
        </>
    );
}

export default mainBanner;