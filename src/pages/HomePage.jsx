import React from "react";
import BlogCard from "../components/BlogCard";
import OurChoice from "../layout/OurChoice";
import Promo from "../layout/Promo";
import Catalog1 from "../layout/Catalog";

const Advantages = () => {
  const advantages = [
    {
      imageUrl: "https://gabestore.ru/images/Gabestore_icons_discounts.png",
      text1: "Скидки",
      text2: "круглый год",
    },
    {
      imageUrl: "https://gabestore.ru/images/Gabestore_icons_support_24.png",
      text1: "Круглосуточная",
      text2: "поддержка",
    },
    {
      imageUrl: "https://gabestore.ru/images/Gabestore_icons_achievement_system.png",
      text1: "Система",
      text2: "достижений",
    },
    {
      imageUrl: "https://gabestore.ru/images/Gabestore_icons_active_community.png",
      text1: "Активное",
      text2: "коммьюнити",
    },
    {
      imageUrl: "https://gabestore.ru/images/Gabestore_icons_charity_events.png",
      text1: "Любовь",
      text2: "к играм",
    },
  ];
  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__inner">
          {advantages.map((a, i) => (
            <div className="advantage__item" key={i}>
              <img className="advantage__item-img" src={a.imageUrl} alt="advantage item img" />
              <div className="advantage__item-txt">
                {a.text1} <br /> {a.text2}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const Blogs = () => {
  const articles = [
    {
      imageUrl: "https://static.gabestore.ru/blog_content/465x275_JZ6Q3aPpg8-V9lw0Ee_Ecpvw34Y1JPbp.jpg",
      blogLink: "https://gabestore.ru/blog/da-kto-takoj-etot-vash-tobii-gaming",
      blogType: "ТЕХНОЛОГИИ",
      blogDate: "31.12.2020",
      blogTitle: "Да кто такой этот ваш Tobii Gaming?!",
      blogSubtitle: "Они точно знают, куда вы смотрите!",
      blogView: 922,
      blogCommentCount: 11,
    },
    {
      imageUrl: "https://static.gabestore.ru/blog_content/465x275_NSsbN5p8LsrwflLujvyd3pT_6DblIg_k.jpg",
      blogLink: "https://gabestore.ru/blog/rekomendovannye-igry-pro-ameriku",
      blogType: "ПОДБОРКИ",
      blogDate: "29.12.2020",
      blogTitle: "Рекомендованные игры про Америку",
      blogSubtitle: "Самый дешёвый вариант путешествия в Штаты",
      blogView: 1917,
      blogCommentCount: 18,
    },
    {
      imageUrl: "https://static.gabestore.ru/blog_content/465x275_jvV5JxHNP4rdRDeu1vNhOrdc7KEkw2dX.jpg",
      blogLink: "https://gabestore.ru/blog/da-kto-takoj-etot-vash-tobii-gaming",
      blogType: "НЕ ОБЗОРЫ",
      blogDate: "27.12.2020",
      blogTitle: "Чего сложного в Devil May Cry?",
      blogSubtitle: "Как Данте и компания уничтожают геймпады",
      blogView: 1515,
      blogCommentCount: 16,
    },
  ];
  return (
    <section className="blogs">
      <div className="wrapper">
        <h2 className="section-title">СВЕЖЕЕ В БЛОГЕ</h2>
        <div className="blogs__inner">
          <div className="blog-list">
            {articles.map((a, i) => (
              <BlogCard
                imageUrl={a.imageUrl}
                blogLink={a.blogLink}
                blogType={a.blogType}
                blogDate={a.blogDate}
                blogTitle={a.blogTitle}
                blogSubtitle={a.blogSubtitle}
                blogViewCount={a.blogView}
                blogCommentCount={a.blogCommentCount}
                key={i}
              />
            ))}
          </div>
          <div className="txt-center">
            <a className="btn btn--primary blogs__btn" href="/">
              Все публикации
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <main className="homepage">
    <Promo />
    <Advantages />
    <Catalog1 />
    <OurChoice />
    <Blogs />
  </main>
);

export default HomePage;
