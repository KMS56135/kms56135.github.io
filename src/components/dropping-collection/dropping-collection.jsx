import "../dropping-collection/dropping-collection.css";
import men1 from "../../components/dropping-collection/img/men1.jpg";
import men2 from "../../components/dropping-collection/img/men2.jpg";
import men3 from "../../components/dropping-collection/img/men3.jpg";
import men4 from "../../components/dropping-collection/img/men4.jpg";

export const DropColl = () => {
  return (
    <>
      <div class="collection__title">
        <p>ARTISANAL</p>
        <p>Коллекция 2025</p>
      </div>
      <div class="collection__video">
        <iframe
          width="60%"
          height="500"
          src="https://www.youtube.com/embed/85I0MZsRRSQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="collection__description">
        <div class="collection__description-text">
          Для совместной коллекции Весна-Лето 2024 Maison Margiela разыгрывает
          поиск индивидуальной истины. Помещая размышление в межпоколенческую
          перспективу, бренд делает центральной темой унаследованный гардероб.
        </div>
        <div class="collection__description-text">
          Оживляя память эпохи через радикальный взгляд следующего поколения,
          одежда словно передаётся из рук в руки — её генетический код
          изменяется и эволюционирует.
        </div>
      </div>
      <div class="fashion__card_wrapper">
        <div class="fashion__card">
          <img
            class="fashion__image"
            width="470"
            height="600"
            srcSet={men1}
            alt=""
          />
        </div>
        <div class="fashion__card">
          <img
            class="fashion__image"
            width="470"
            height="600"
            srcSet={men1}
            alt=""
          />
        </div>
        <div class="fashion__card">
          <img
            class="fashion__image"
            width="470"
            height="600"
            srcSet={men1}
            alt=""
          />
        </div>
        <div class="fashion__card">
          <img
            class="fashion__image"
            width="470"
            height="600"
            srcSet={men1}
            alt=""
          />
        </div>
        <div class="fashion__card">
          <img
            class="fashion__image"
            width="470"
            height="600"
            srcSet={men1}
            alt=""
          />
        </div>
        <div class="fashion__card">
          <img
            class="fashion__image"
            width="470"
            height="600"
            srcSet={men1}
            alt=""
          />
        </div>
        <div class="fashion__card">
          <img
            class="fashion__image"
            width="470"
            height="600"
            srcSet={men1}
            alt=""
          />
        </div>
        <div class="fashion__card">
          <img
            class="fashion__image"
            width="470"
            height="600"
            srcSet={men1}
            alt=""
          />
        </div>
        <div class="fashion__card">
          <img
            class="fashion__image"
            width="470"
            height="600"
            srcSet={men1}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
