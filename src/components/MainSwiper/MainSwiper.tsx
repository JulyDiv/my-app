import Link from "next/link";
import { FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { LinkItem } from "../Header/Header.styled";
import { SlideInfo, SlideText, SlideTitle } from "./MainSwiper.styled";

const MainSwiper: FC = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <SlideInfo>
          <SlideTitle>Всем привет, я Юля!</SlideTitle>
          <SlideText>🌟 I’m FrontEnd Developer</SlideText>
          <SlideText>
            🌟 Разработкой занимаюсь не так давно (6 месяцев), но уже делаю
            большие успехи
          </SlideText>
          <SlideText>
            🌟 Окончила офф-лайн курсы WEB и JS, остальные знания подтягивала
            самостоятельно (React, Redux, Next, TS итд)
          </SlideText>
        </SlideInfo>
      </SwiperSlide>
      <SwiperSlide>
        <SlideInfo>
          <SlideTitle>
            Мой стек технологий и пройденный путь на данный момент:
          </SlideTitle>
          <SlideText></SlideText>
          <SlideText>
            🌟 HTML5 - верстка (адаптивная и кроссбраузерная) - уверенный
            верстальщик PixelPerfect
          </SlideText>
          <SlideText>
            🌟 CSS3 - стилизация элементов+анимация - работаю по методологии
            БЭМ, использую CSS Grid и Flexbox
          </SlideText>
          <SlideText>
            🌟 SASS - использую этот препроцессор для более удобной работы с CSS
          </SlideText>
          <SlideText>🌟 JS ES6 - практикую ежедневно </SlideText>
        </SlideInfo>
      </SwiperSlide>
      <SwiperSlide>
        <SlideInfo>
          <SlideTitle>React:</SlideTitle>
          <SlideText>🌟 FC - работаю в функциональными компонентами</SlideText>

          <SlideText>🌟 TS - работать стараюсь только с ним </SlideText>
          <SlideText>
            🌟 Styled-component - стилизация компонентов (но также могу работать
            с обычным CSS и ClassName 😁)
          </SlideText>
          <SlideText>
            🌟 Hooks - пока что на практике приходилось использовать useState,
            useEffect, useCallback, useMemo, useRouter
          </SlideText>
          <SlideText>🌟 React-hook-form - валидация форм </SlideText>
          <SlideText>
            🌟 Axios+async/await - для получения ответов от сервера, их
            трансформация и автоматическая конвертация в JSON
          </SlideText>
        </SlideInfo>
      </SwiperSlide>
      <SwiperSlide>
        <SlideInfo>
          <SlideTitle>Ежедневно:</SlideTitle>
          <SlideText>🔥 Изучаю материалы для разработки</SlideText>
          <SlideText>🔥 Пишу код</SlideText>
          <SlideText>🔥 Читаю тематические книги</SlideText>
          <SlideText>🔥 Смотрю видео на YouTube</SlideText>
          <SlideText>
            🔥 В проектах люблю порядок и стараюсь писать "легко читаемый" код
          </SlideText>
        </SlideInfo>
      </SwiperSlide>
      <SwiperSlide>
        <SlideInfo>
          <SlideTitle>Связаться со мной:</SlideTitle>
          <LinkItem
            href="https://github.com/JulyDiv"
            style={{ fontSize: "46px" }}
          >
            GitHub
          </LinkItem>
            <LinkItem
              href="https://t.me/julia_gerber"
              style={{ fontSize: "46px" }}
            >
              Telegram
            </LinkItem>
            <LinkItem
              href="https://vk.com/id526712821"
              style={{ fontSize: "46px" }}
            >
              VK
            </LinkItem>
        </SlideInfo>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSwiper;
