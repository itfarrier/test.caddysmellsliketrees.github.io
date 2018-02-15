import isMobile from "ismobilejs";
import Link from "gatsby-link";
import React from "react";

import Footer from "../components/Footer";
import styles from "./about.module.css";

const About = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className={"col-8 offset-2 " + styles.serif}>
          <div
            className={isMobile.any ? styles.padding : styles.paddingDesktop}
          >
            <section>
              <h1>Эта группа&thinsp;&mdash;&thinsp;наш деревянный сруб</h1>
              <p>
                В&nbsp;феврале 2015&#8208;го упали наши зёрна в&nbsp;неведомую
                землю, а&nbsp;к&nbsp;октябрю появились первые ростки. Плодами
                мы&nbsp;зацветаем медленно, но&nbsp;наши ветви крепнут
                и&nbsp;наливаются соком всё гуще и&nbsp;пряней!
              </p>
              <p>
                Мы&nbsp;играем душеполезные песни на&nbsp;каждый день. Они
                у&nbsp;нас срастаются в&nbsp;леса так, что их&nbsp;тяжело
                отделить друг от&nbsp;друга, а&nbsp;между ними бликуют смелыми
                оленями стихи.
              </p>
            </section>
            <section>
              <h1>Состав:</h1>
              <ul>
                <li>
                  Андрей Швецов<br />(ударные, вейв&#8208;драм, перкуссия)
                </li>
                <li>
                  Вадим Колеватов<br />(ударные)
                </li>
                <li>
                  Владислав Луцык<br />(аккордеон, духовые, вокал,
                  бэк&#8208;вокал)
                </li>
                <li>
                  Дмитрий Вавилов<br />(укулеле, перкуссия, декламация стихов)
                </li>
                <li>
                  Светлана Подабед<br />(духовые, гитара, вокал,
                  бэк&#8208;вокал, декламация стихов, перкуссия)
                </li>
                <li>
                  Сергей Нефедьев<br />(гитара, вокал, бэк&#8208;вокал,
                  перкуссия)
                </li>
                <li>
                  Сергей Цветков<br />(бас&#8208;гитара, декламация стихов)
                </li>
              </ul>
            </section>
            <section>
              <h1>
                <a href="/documents/technicalRider.pdf">
                  ТЕХНИЧЕСКИЙ РАЙДЕР{" "}
                  <img alt="PDF logo" src="/vectors/file-pdf.svg" />
                </a>
              </h1>
            </section>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
