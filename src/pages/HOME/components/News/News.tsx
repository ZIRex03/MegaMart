import React, { useEffect, useRef, useState } from "react";

import newsItem1 from "../../../../images/news-item1.png";
import newsItem2 from "../../../../images/news-item2.png";
import newsItem3 from "../../../../images/news-item3.png";

import s from "./News.module.scss";


type Props = {};

const News = (props: Props) => {

    const sliderRef = useRef<HTMLDivElement | null>(null);
    const paginationCircle = useRef<HTMLDivElement[] | any>([]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        showSlide(currentSlideIndex);
    },[currentSlideIndex])

    const sliderWidth:any = sliderRef.current?.clientWidth;

    useEffect(() => {
      let startTouchX = 0;
      let endTouchX = 0;
      let startTouchY = 0;
      let endTouchY = 0;

      const sliderPosition:any = sliderRef.current?.getBoundingClientRect();
      const leftSliderPosition = sliderPosition?.left; 
      const rightSliderPosition = sliderPosition?.right; 

      document.addEventListener('touchstart', (event) => {
        startTouchX = event.changedTouches[0].pageX;
        startTouchY = event.changedTouches[0].pageY;
      });

      document.addEventListener('touchend', (event) => {
        endTouchX = event.changedTouches[0].pageX;
        endTouchY = event.changedTouches[0].pageY;

        if((startTouchX >= leftSliderPosition && startTouchX <= rightSliderPosition) && endTouchX > startTouchX && Math.abs(endTouchY-startTouchY)<40)
        previousSlide();

        if((startTouchX >= leftSliderPosition && startTouchX <= rightSliderPosition) && endTouchX < startTouchX && Math.abs(endTouchY-startTouchY)<40)
          nextSlide();

      });

    },[])

    
    

    const styleSLider = {
        transform: `translateX(-${currentSlideIndex * sliderWidth}px)`
    }

    const showSlide = (index:number) => {

        paginationCircle.current.forEach((circle:any, i:any) => {
          circle.classList.toggle(s['active'], i === index);
        });
    
    }
    
    const handlePaginationClick = (index:number) => {
        setCurrentSlideIndex(index);
    };
    
    const nextSlide = () => {
        setCurrentSlideIndex(prev => (prev + 1) % paginationCircle.current.length);
    }
    
    const previousSlide = () => {
        setCurrentSlideIndex(prev => (prev - 1 + paginationCircle.current.length) % paginationCircle.current.length);
    }

  return (
    <div className={s["news"]}>
      <p className={s["news-title"]}>Модные новости</p>

      <div className={s["news__items"]}>
        <div className={s["news__items-box"]}>
          <img src={newsItem1} alt="men and woomen in black" />
          <p className={s["news__items-box-title"]}>Совершайте покупки,</p>
          <p className={s["news__items-box-subtitle"]}>
            Которые сделают мир лучше.
          </p>
        </div>

        <div className={s["news__items-box"]}>
          <img src={newsItem2} alt="men in jeans" />
          <p className={s["news__items-box-title"]}>Совершайте покупки,</p>
          <p className={s["news__items-box-subtitle"]}>
            Которые сделают мир лучше.
          </p>
        </div>

        <div className={s["news__items-box"]}>
          <img src={newsItem3} alt="men in glasses and gray" />
          <p className={s["news__items-box-title"]}>Совершайте покупки,</p>
          <p className={s["news__items-box-subtitle"]}>
            Которые сделают мир лучше.
          </p>
        </div>
      </div>

      <div className={s['container']}>

        <div className={s['container__top']}>

            <div className={s['frame']}>
                    
                <div className={s['slider']} style={styleSLider}>

                    <div className={s['item']} ref={sliderRef}>
                        <img
                            src={newsItem1}
                            alt=''
                        />
                        <p className={s["slide-title"]}>Совершайте покупки,</p>
                        <p className={s["slide-subtitle"]}>Которые сделают мир лучше.</p>
                    </div>

                        
                        
                    <div className={s['item']}>
                        <img
                            src={newsItem2}
                            alt=''
                        />
                        <p className={s["slide-title"]}>Совершайте покупки,</p>
                        <p className={s["slide-subtitle"]}>Которые сделают мир лучше.</p>
                    </div>
                      

                    
                    <div className={s['item']}>
                        <img
                            src={newsItem3}
                            alt=''
                        />
                        <p className={s["slide-title"]}>Совершайте покупки,</p>
                        <p className={s["slide-subtitle"]}>Которые сделают мир лучше.</p>
                    </div>
                    

                </div>

            </div>

        </div>

        <div className={s['container__bottom']}>

            <div
                ref={(el) => (paginationCircle.current[0]=el)}
                className={s['pagination-circle']}
                onClick={()=>handlePaginationClick(0)}>  
            </div>

            <div
                ref={(el) => (paginationCircle.current[1]=el)}
                className={s['pagination-circle']}
                onClick={()=>handlePaginationClick(1)}>
            </div>

            <div
                ref={(el) => (paginationCircle.current[2]=el)}
                className={s['pagination-circle']}
                onClick={()=>handlePaginationClick(2)}>  
            </div>

        </div>
        
      </div>
    </div>
  );
};

export default News;
