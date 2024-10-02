import React from "react";

import newsItem1 from "../../../../images/news-item1.png";
import newsItem2 from "../../../../images/news-item2.png";
import newsItem3 from "../../../../images/news-item3.png";

import s from "./News.module.scss";
import classNames from "classnames";

type Props = {};

const News = (props: Props) => {
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

      <div className={s["slider"]}>
        <div className={s["slides"]}>
          <input type="radio" name="r" id={s.r1} />
          <input type="radio" name="r" id={s.r2} />
          <input type="radio" name="r" id={s.r3} />

          <div className={classNames(s["slide"], s["s1"])}>
            <img src={newsItem1} alt="" />
            <p className={s["slide-title"]}>Совершайте покупки,</p>
            <p className={s["slide-subtitle"]}>Которые сделают мир лучше.</p>
          </div>
          <div className={s["slide"]}>
            <img src={newsItem2} alt="" />
            <p className={s["slide-title"]}>Совершайте покупки,</p>
            <p className={s["slide-subtitle"]}>Которые сделают мир лучше.</p>
          </div>
          <div className={s["slide"]}>
            <img src={newsItem3} alt="" />
            <p className={s["slide-title"]}>Совершайте покупки,</p>
            <p className={s["slide-subtitle"]}>Которые сделают мир лучше.</p>
          </div>
        </div>

        <div className={s["navigation"]}>
          <label className={s["bar"]} htmlFor={s.r1}></label>
          <label className={s["bar"]} htmlFor={s.r2}></label>
          <label className={s["bar"]} htmlFor={s.r3}></label>
        </div>
      </div>
    </div>
  );
};

export default News;
