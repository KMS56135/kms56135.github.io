import "./vizit.css";
import vizit from "./img/vizit.jpg";
import vizit01 from "./img/vizit01.jpg";
export const Vizit = () => {
  return (


    <div className="vizit">
      <div className="vizit__wrapper">
        <img 
          className="vizit__img" 
          src={vizit01} 
          srcSet={`${vizit01} 1x, ${vizit} 2x`}
          alt="Winter Essentials collection"
          loading="lazy"
        />
        <div className="vizit__text-block">
          <p className="vizit__text-name">IN EVIDENZA</p>
          <h2 className="vizit__text-title">2025 must-have</h2>
          <p className="vizit__text-inf">
            От готовой одежды до обуви и культовых сумок Encre — в подборке представлены самые актуальные предметы сезона.
          </p>
          <button className="vizit__button">СМОТРЕТЬ КОЛЛЕКЦИЮ</button>
        </div>
      </div>
    </div>
  );
};
