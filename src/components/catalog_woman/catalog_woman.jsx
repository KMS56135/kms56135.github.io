

import React, { useState } from "react";
import "./catalog_woman.css";
import bag1 from "../catalog_men/img/catalog_men-bag1.jpg";
import bag2 from "../catalog_woman/img/bag_woman2.jpg";
import bag3 from "../catalog_woman/img/bag_woman3.jpg";
import bag4 from "../catalog_men/img/catalog_men-bag4.jpg";
import bag5 from "../catalog_woman/img/bag_woman4.jpg";
import glases1 from "../catalog_men/img/catalog_men-glases1.jpg";
import glases2 from "../catalog_men/img/catalog_men-glases2.jpg";
import glases3 from "../catalog_men/img/catalog_men-glases3.jpg";
import glases4 from "../catalog_men/img/catalog_men-glases4.jpg";
import glases5 from "../catalog_men/img/catalog_men-glases5.jpg";
import glases6 from "../catalog_men/img/catalog_men-glases6.jpg";











// Компонент всплывающего уведомления
const Notification = ({ message, onClose }) => (
  <div style={{
    position: 'fixed',
    top: '30px',
    right: '30px',
    background: '#fff',
    border: '1px solid #222',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    padding: '20px 30px',
    zIndex: 9999,
    fontSize: '18px'
  }}>
    {message}
    <button
      style={{
        marginLeft: '20px',
        background: 'none',
        border: 'none',
        color: '#222',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '18px'
      }}
      onClick={onClose}
      aria-label="Закрыть"
    >
      ×
    </button>
  </div>
);

export const Catalog_woman = () => {




const [notification, setNotification] = useState("");

  // Функция для показа уведомления
  const handleAdd = () => {
    setNotification("Товар добавлен в корзину!");
    setTimeout(() => setNotification(""), 2000);
  };

  return (
    <div className="catalog_men-container">
      {/* Всплывающее уведомление */}
      {notification && (
        <Notification message={notification} onClose={() => setNotification("")} />
      )}

      <div className="catalog_men_name__wrapper">
        <p className="catalog_men-name"> Женщинам</p>
        <p className="fraction">/</p>
        <p className="catalog_men-name"> Сумки</p>
      </div>
      <div className="catalog_men-wrapper">
        <div className="catalog_men-cards">
          <img
            className="catalog_men-image"
            width="200"
            height="300"
            srcSet={bag1}
            alt=""
          />
          <p className="product-price">3500 ₽</p>
          <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
        </div>
        <div className="catalog_men-cards">
          <img
            className="catalog_men-image"
            width="200"
            height="300"
            srcSet={bag2}
            alt=""
          />
          <p className="product-price">4200 ₽</p>
          <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
        </div>
        <div className="catalog_men-cards">
          <img
            className="catalog_men-image"
            width="200"
            height="300"
            srcSet={bag3}
            alt=""
          />
          <p className="product-price">3900 ₽</p>
          <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
        </div>
        <div className="catalog_men-cards">
          <img
            className="catalog_men-image"
            width="200"
            height="300"
            srcSet={bag4}
            alt=""
          />
          <p className="product-price">4500 ₽</p>
          <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
        </div>
        <div className="catalog_men-cards">
          <img
            className="catalog_men-image"
            width="200"
            height="300"
            srcSet={bag5}
            alt=""
          />
          <p className="product-price">3800 ₽</p>
          <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
        </div>
        <div className="catalog_men-cards">
          <img
            className="catalog_men-image"
            width="200"
            height="300"
            srcSet={bag1}
            alt=""
          />
          <p className="product-price">4100 ₽</p>
          <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
        </div>
      </div>
      
      <div className="catalog_men_name__wrapper">
        <p className="catalog_men-name"> Женщинам</p>
        <p className="fraction">/</p>
        <p className="catalog_men-name"> Очки</p>
      </div>
      <div className="catalog_men-wrapper">
        <div className="catalog_men-cards">
          <img
            className="catalog_men-image"
            width="200"
            height="300"
            srcSet={glases1}
            alt=""
          />
          <p className="product-price">2500 ₽</p>
          <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
        </div>
        <div className="catalog_men-cards">
          <img
            className="catalog_men-image"
            width="200"
            height="300"
            srcSet={glases2}
            alt=""
          />
          <p className="product-price">2800 ₽</p>
          <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
        </div>
        <div className="catalog_men-cards">
          <img
            className="catalog_men-image"
            width="200"
            height="300"
            srcSet={glases3}
            alt=""
          />
          <p className="product-price">3200 ₽</p>
          <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
        </div>
        <div className="catalog_men-cards">
          <img
            className="catalog_men-image"
            width="200"
            height="300"
            srcSet={glases4}
            alt=""
          />
          <p className="product-price">2900 ₽</p>
          <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
        </div>
        <div className="catalog_men-cards">
          <img
            className="catalog_men-image"
            width="200"
            height="300"
            srcSet={glases5}
            alt=""
          />
          <p className="product-price">2700 ₽</p>
          <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
        </div>
        <div className="catalog_men-cards">
          <img
            className="catalog_men-image"
            width="200"
            height="300"
            srcSet={glases6}
            alt=""
          />
          <p className="product-price">3100 ₽</p>
          <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
        </div>
      </div>
      <div className="collection-number">[COLLECTION 0.3]</div>
    </div>










  // const [notification, setNotification] = useState("");

  // // Функция для показа уведомления
  // const handleAdd = () => {
  //   setNotification("Товар добавлен в корзину!");
  //   setTimeout(() => setNotification(""), 2000);
  // };

  // return (
  //   <div className="catalog_men-container">
  //     {/* Всплывающее уведомление */}
  //     {notification && (
  //       <Notification message={notification} onClose={() => setNotification("")} />
  //     )}

  //     <div className="catalog_men_name__wrapper">
  //       <p className="catalog_men-name"> Женщинам</p>
  //       <p className="fraction">/</p>
  //       <p className="catalog_men-name"> Сумки</p>
  //     </div>
  //     <div className="catalog_men-wrapper">
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={bag1}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={bag2}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={bag3}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={bag4}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={bag5}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={bag1}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //     </div>
      
  //     <div className="catalog_men_name__wrapper">
  //       <p className="catalog_men-name"> Женщим</p>
  //       <p className="fraction">/</p>
  //       <p className="catalog_men-name"> Очки</p>
  //     </div>
  //     <div className="catalog_men-wrapper">
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={glases1}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={glases2}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={glases3}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={glases4}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={glases5}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //       <div className="catalog_men-cards">
  //         <img
  //           className="catalog_men-image"
  //           width="200"
  //           height="300"
  //           srcSet={glases6}
  //           alt=""
  //         />
  //         <button className="catalog_men-button" onClick={handleAdd}>Добавить</button>
  //       </div>
  //     </div>
  //     <div class="collection-number">[COLLECTION 0.3]</div>
  //   </div>


  );
};
