import React from 'react';

const mainBanner = () => {
    return (
        <>
            <section>
                <div class="container">
                    
                    <div class="slides">
                        <img src="/img/img1.jpg" alt="">
                        <div class="content">
                            <h2>Filme Title 01</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta aspernatur quis quam. Cum consectetur eveniet voluptas eius corporis? Praesentium fugit officiis libero cum nemo magnam dicta, suscipit et eligendi.</p>
                            <a href="#"><i class="fa fa-play" aria-hidden="true"></i>Assista aqui</a>
                        </div>
                    </div>

                    <div class="slides">
                        <img src="/img/img2.jpg" alt="">
                        <div class="content">
                            <h2>Filme Title 02</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta aspernatur quis quam. Cum consectetur eveniet voluptas eius corporis? Praesentium fugit officiis libero cum nemo magnam dicta, suscipit et eligendi.</p>
                            <a href="#"><i class="fa fa-play" aria-hidden="true"></i>Assista aqui</a>
                        </div>
                    </div>

                    <div class="slides">
                        <img src="/img/img3.jpg" alt="">
                        <div class="content">
                            <h2>Filme Title 03</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta aspernatur quis quam. Cum consectetur eveniet voluptas eius corporis? Praesentium fugit officiis libero cum nemo magnam dicta, suscipit et eligendi.</p>
                            <a href="#"><i class="fa fa-play" aria-hidden="true"></i>Assista aqui</a>
                        </div>
                    </div>

                    <div class="slides">
                        <img src="/img/img4.jpg" alt="">
                        <div class="content">
                            <h2>Filme Title 04</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta aspernatur quis quam. Cum consectetur eveniet voluptas eius corporis? Praesentium fugit officiis libero cum nemo magnam dicta, suscipit et eligendi.</p>
                            <a href="#"><i class="fa fa-play" aria-hidden="true"></i>Assista aqui</a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="prev"><</div>
                        <div class="next">></div>
                    </div>
                </div>
            </section>

            <script>
                const slides = document.querySelectorAll('.slides');
                let slideIndex = 0;
                showSlide();

                function showSlide(n){
                    if(slideIndex > slides.length - 1){
                        slideIndex = 0;
                    }
                    if(slideIndex < 0){
                        slideIndex = slides.length - 1;
                    }
                    for (let i = 0; i < slides.length; i++){
                        slides[i].style.display = "none";
                    }
                    slides[slideIndex].style.display = "block";
                }
                slides.forEach((item, index) => {
                    item.addEventListener('click', () => {
                        showSlide(slideIndex = index);
                    })
                });
                
                const prev = document.querySelector('.prev');
                const next = document.querySelector('.next');

                prev.addEventListener('click', () => {
                    slides.scrollLeft -= slides[0].offsetWidth;
                    showSlide(slideIndex -= 1);
                    if(slideIndex === slides.length - 1){
                        slides.scrollLeft = slides.scrollWidth;
                    }
                });

                next.addEventListener('click', () => {
                    slides.scrollLeft += slides[0].offsetWidth;
                    showSlide(slideIndex += 1);
                    if(slideIndex === 0){
                        slides.scrollLeft = 0;
                    }
                });
            </script>
        </>
    );
}

export default mainBanner;