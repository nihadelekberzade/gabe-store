import React from "react";

const Footer = () => {
  const links = [
    {
      title: "ЛИДЕРЫ",
      link: "/",
    },
    {
      title: "ПОДБОРКИ",
      link: "/",
    },
    {
      title: "ПОДДЕРЖКА",
      link: "/",
    },
    {
      title: "О КОМПАНИИ",
      link: "/",
    },
    {
      title: "НОВИНКИ",
      link: "/",
    },
    {
      title: "СКИДКИ",
      link: "/",
    },
    {
      title: "БЛОГ",
      link: "/",
    },
    {
      title: "КОНТАКТЫ",
      link: "/",
    },
    {
      title: "ПРЕДЗАКАЗЫ",
      link: "/",
    },
    {
      title: "ПОДАРОЧНЫЕ КАРТЫ",
      link: "/",
    },
    {
      title: "",
      link: "/",
    },
    {
      title: "ВАКАНСИИ",
      link: "/",
    },
  ];
  const getLogo = () => (
    <div className="footer__logo">
      <svg width="132" height="53" viewBox="0 0 132 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M66.1259 13.995C66.1259 8.87506 69.2859 5.69189 73.351 5.69189C76.8495 5.69189 79.3288 8.19241 79.3288 9.67277C79.3327 10.0606 79.2125 10.4393 78.986 10.7527C78.7595 11.0661 78.4388 11.2974 78.0716 11.4124C77.7044 11.5274 77.3101 11.5199 76.9475 11.3909C76.5848 11.262 76.2731 11.0186 76.0585 10.6968C75.3816 9.78783 74.7048 9.10517 73.351 9.10517C71.4496 9.10517 69.7422 10.8118 69.7422 13.995C69.7422 17.1782 71.4344 18.8886 73.351 18.8886C74.014 18.8659 74.6533 18.6344 75.1792 18.2265C75.705 17.8186 76.091 17.2548 76.2829 16.6144H73.9138C73.682 16.6301 73.4495 16.5976 73.2307 16.5189C73.0119 16.4402 72.8115 16.3171 72.6418 16.1571C72.4722 15.997 72.3369 15.8036 72.2445 15.5887C72.152 15.3738 72.1043 15.142 72.1043 14.9077C72.1043 14.6735 72.152 14.4417 72.2445 14.2268C72.3369 14.0119 72.4722 13.8185 72.6418 13.6584C72.8115 13.4984 73.0119 13.3753 73.2307 13.2966C73.4495 13.2179 73.682 13.1854 73.9138 13.2011H78.2032C78.666 13.1887 79.115 13.361 79.4525 13.6805C79.79 14.0001 79.9888 14.4411 80.0057 14.9077V15.019C80.0057 19.4562 77.1879 22.3057 73.351 22.3057C69.2859 22.3019 66.1259 19.1149 66.1259 13.995Z"
          fill="white"
        ></path>
        <path
          d="M89.8014 19.115H85.0632L84.6145 20.4804C84.4959 20.9086 84.2289 21.2796 83.8619 21.526C83.4949 21.7724 83.0525 21.8778 82.615 21.823C82.1775 21.7682 81.7741 21.5569 81.4781 21.2274C81.182 20.8979 81.0131 20.4723 81.002 20.0278C81.0411 19.5573 81.1553 19.0962 81.3404 18.6625L85.4017 7.39867C85.542 6.96718 85.8139 6.59141 86.1786 6.325C86.5433 6.0586 86.982 5.91516 87.4323 5.91516C87.8826 5.91516 88.3214 6.0586 88.686 6.325C89.0507 6.59141 89.3226 6.96718 89.463 7.39867L93.5243 18.6625C93.7093 19.0962 93.8236 19.5573 93.8627 20.0278C93.8547 20.4737 93.6875 20.9017 93.3918 21.2332C93.0961 21.5647 92.6917 21.7775 92.2529 21.8326C91.8141 21.8876 91.3704 21.7811 91.0032 21.5327C90.636 21.2843 90.3699 20.9107 90.2539 20.4804L89.8014 19.115ZM87.5464 12.0622H87.322L86.0786 15.9319H88.7861L87.5464 12.0622Z"
          fill="white"
        ></path>
        <path
          d="M100.89 6.14067C104.499 6.14067 106.374 8.05824 106.374 10.3593C106.374 12.7486 104.681 13.3162 104.681 13.3162V13.5463C104.681 13.5463 107.724 13.9989 107.724 17.3009C107.724 19.602 105.579 21.8494 101.97 21.8494H97.5704C97.1079 21.8609 96.6595 21.6882 96.3222 21.3689C95.9849 21.0495 95.7858 20.609 95.7679 20.1428V7.82813C95.7897 7.36492 95.9906 6.92876 96.3276 6.61327C96.6646 6.29778 97.1108 6.1281 97.5704 6.14067H100.89ZM101.183 12.0583C101.356 12.075 101.531 12.0551 101.696 11.9998C101.861 11.9445 102.012 11.855 102.141 11.7371C102.27 11.6192 102.372 11.4755 102.443 11.3152C102.513 11.1548 102.549 10.9814 102.549 10.8061C102.549 10.6308 102.513 10.4574 102.443 10.2971C102.372 10.1367 102.27 9.99302 102.141 9.87512C102.012 9.75721 101.861 9.66773 101.696 9.61243C101.531 9.55712 101.356 9.5372 101.183 9.55395H99.3767V12.0583H101.183ZM102.084 15.4716H99.3767V18.4285H102.084C103.225 18.4285 103.891 17.7458 103.891 16.9519C103.891 16.1581 103.214 15.4754 102.084 15.4754V15.4716Z"
          fill="white"
        ></path>
        <path
          d="M118.767 18.4323C119.23 18.4198 119.679 18.592 120.017 18.9115C120.355 19.231 120.555 19.672 120.573 20.1389C120.541 20.6024 120.337 21.0368 120.003 21.3563C119.668 21.6758 119.227 21.8572 118.767 21.8647H111.773C111.31 21.8772 110.861 21.705 110.523 21.3855C110.185 21.0661 109.985 20.625 109.967 20.1581V7.88564C109.971 7.65112 110.021 7.41972 110.114 7.20479C110.207 6.98986 110.342 6.79567 110.51 6.63342C110.678 6.47117 110.876 6.34409 111.093 6.25951C111.31 6.17493 111.541 6.13453 111.773 6.14065H118.645C119.108 6.12819 119.557 6.30037 119.896 6.61984C120.234 6.93932 120.433 7.38035 120.451 7.84729C120.434 8.3149 120.235 8.7569 119.897 9.0772C119.559 9.3975 119.109 9.5702 118.645 9.55776H113.576V12.2769H117.188C117.42 12.2612 117.653 12.2937 117.872 12.3724C118.09 12.451 118.291 12.5742 118.46 12.7342C118.63 12.8942 118.765 13.0877 118.858 13.3026C118.95 13.5175 118.998 13.7493 118.998 13.9835C118.998 14.2178 118.95 14.4496 118.858 14.6645C118.765 14.8794 118.63 15.0728 118.46 15.2328C118.291 15.3928 118.09 15.516 117.872 15.5947C117.653 15.6733 117.42 15.7058 117.188 15.6902H113.576V18.4208L118.767 18.4323Z"
          fill="white"
        ></path>
        <path
          d="M66.126 33.8802C66.126 31.3796 68.3848 29.1016 71.4497 29.1016C74.7201 29.1016 76.8648 31.2646 76.8648 32.6299C76.8469 33.0968 76.6473 33.5379 76.3092 33.8573C75.971 34.1768 75.5217 34.349 75.0585 34.3365C74.8008 34.3514 74.543 34.3066 74.3051 34.2056C74.0672 34.1045 73.8553 33.9499 73.6857 33.7536C73.1229 33.1822 72.4461 32.4995 71.541 32.4995C70.5257 32.4995 69.8488 33.1822 69.8488 33.9799C69.8488 36.3692 77.0739 35.4602 77.0739 40.9215C77.0739 43.4028 74.8189 45.7001 71.4764 45.7001C68.0539 45.7001 65.9054 43.537 65.9054 42.1717C65.9232 41.7048 66.1229 41.2638 66.461 40.9443C66.7991 40.6248 67.2485 40.4526 67.7117 40.4651C67.965 40.4521 68.218 40.4963 68.4522 40.5945C68.6864 40.6927 68.8959 40.8424 69.0654 41.0327C69.6282 41.6041 70.3051 42.2868 71.4345 42.2868C72.6742 42.2868 73.3359 41.6041 73.3359 40.8064C73.3473 38.4325 66.126 39.3414 66.126 33.8802Z"
          fill="white"
        ></path>
        <path
          d="M82.2227 32.9866H79.9639C79.7322 33.0023 79.4997 32.9698 79.2809 32.8911C79.0621 32.8124 78.8617 32.6893 78.692 32.5292C78.5223 32.3692 78.3871 32.1758 78.2946 31.9609C78.2021 31.746 78.1544 31.5142 78.1544 31.2799C78.1544 31.0457 78.2021 30.8139 78.2946 30.599C78.3871 30.3841 78.5223 30.1906 78.692 30.0306C78.8617 29.8706 79.0621 29.7475 79.2809 29.6688C79.4997 29.5901 79.7322 29.5576 79.9639 29.5733H88.0865C88.3183 29.5576 88.5508 29.5901 88.7696 29.6688C88.9884 29.7475 89.1888 29.8706 89.3585 30.0306C89.5281 30.1906 89.6634 30.3841 89.7558 30.599C89.8483 30.8139 89.896 31.0457 89.896 31.2799C89.896 31.5142 89.8483 31.746 89.7558 31.9609C89.6634 32.1758 89.5281 32.3692 89.3585 32.5292C89.1888 32.6893 88.9884 32.8124 88.7696 32.8911C88.5508 32.9698 88.3183 33.0023 88.0865 32.9866H85.8315V43.5677C85.8102 44.0359 85.6108 44.4778 85.2747 44.8015C84.9387 45.1252 84.4918 45.3059 84.0271 45.3059C83.5624 45.3059 83.1156 45.1252 82.7795 44.8015C82.4435 44.4778 82.2441 44.0359 82.2227 43.5677V32.9866Z"
          fill="white"
        ></path>
        <path
          d="M97.6654 45.7154C93.7182 45.7154 90.4403 42.4134 90.4403 37.4085C90.4403 32.4036 93.7106 29.1016 97.6654 29.1016C101.62 29.1016 104.891 32.4036 104.891 37.4085C104.891 42.4134 101.616 45.7154 97.6654 45.7154ZM97.6654 32.5148C95.7641 32.5148 94.0567 34.2215 94.0567 37.4085C94.0567 40.5955 95.7489 42.3021 97.6654 42.3021C99.582 42.3021 101.278 40.5955 101.278 37.4085C101.278 34.2215 99.5858 32.5148 97.6654 32.5148Z"
          fill="white"
        ></path>
        <path
          d="M110.99 43.5524C110.969 44.0206 110.769 44.4624 110.433 44.7862C110.097 45.1099 109.65 45.2905 109.186 45.2905C108.721 45.2905 108.274 45.1099 107.938 44.7862C107.602 44.4624 107.403 44.0206 107.381 43.5524V31.2799C107.399 30.813 107.599 30.3719 107.937 30.0525C108.275 29.733 108.724 29.5608 109.188 29.5733H112.796C116.744 29.5733 118.664 31.4908 118.664 34.559C118.664 37.5197 116.633 38.5437 116.633 38.5437L118.535 42.0682C118.811 42.5131 118.968 43.0236 118.987 43.5485C118.969 44.0155 118.77 44.4565 118.432 44.776C118.093 45.0955 117.644 45.2676 117.181 45.2552C116.861 45.2598 116.546 45.178 116.269 45.0181C115.991 44.8582 115.761 44.6262 115.603 44.3462L113.12 39.5677H110.975L110.99 43.5524ZM112.796 36.1582C114.15 36.1582 114.827 35.4756 114.827 34.5628C114.827 33.65 114.15 32.9865 112.796 32.9865H110.99V36.1735L112.796 36.1582Z"
          fill="white"
        ></path>
        <path
          d="M130.194 41.8458C130.657 41.8334 131.106 42.0056 131.445 42.325C131.783 42.6445 131.982 43.0855 132 43.5525C131.963 44.0125 131.758 44.4422 131.424 44.7577C131.09 45.0733 130.651 45.252 130.194 45.2591H123.208C122.745 45.2716 122.296 45.0994 121.958 44.7799C121.619 44.4604 121.42 44.0194 121.402 43.5525V31.28C121.416 30.8104 121.614 30.3654 121.952 30.0427C122.291 29.7199 122.743 29.5456 123.208 29.558H130.087C130.319 29.5424 130.552 29.5749 130.77 29.6535C130.989 29.7322 131.19 29.8554 131.359 30.0154C131.529 30.1754 131.664 30.3688 131.757 30.5837C131.849 30.7986 131.897 31.0304 131.897 31.2647C131.897 31.4989 131.849 31.7307 131.757 31.9456C131.664 32.1605 131.529 32.354 131.359 32.514C131.19 32.674 130.989 32.7972 130.77 32.8758C130.552 32.9545 130.319 32.987 130.087 32.9713H125.003V35.7019H128.616C128.847 35.6863 129.08 35.7188 129.299 35.7974C129.518 35.8761 129.718 35.9993 129.888 36.1593C130.057 36.3193 130.193 36.5127 130.285 36.7276C130.378 36.9425 130.425 37.1743 130.425 37.4086C130.425 37.6428 130.378 37.8746 130.285 38.0895C130.193 38.3044 130.057 38.4979 129.888 38.6579C129.718 38.8179 129.518 38.9411 129.299 39.0197C129.08 39.0984 128.847 39.1309 128.616 39.1152H125.003V41.8458H130.194Z"
          fill="white"
        ></path>
        <path
          d="M32.3692 37.0135C31.0093 35.6421 30.0831 33.8948 29.7079 31.9925C29.3326 30.0902 29.5252 28.1184 30.2611 26.3265C30.997 24.5345 32.2433 23.0029 33.8423 21.9253C35.4414 20.8477 37.3213 20.2726 39.2445 20.2726C41.1677 20.2726 43.0476 20.8477 44.6467 21.9253C46.2457 23.0029 47.492 24.5345 48.2279 26.3265C48.9639 28.1184 49.1564 30.0902 48.7811 31.9925C48.4059 33.8948 47.4797 35.6421 46.1198 37.0135H32.3692Z"
          fill="white"
        ></path>
        <path
          d="M12.9299 37.0135C11.57 35.6421 10.6438 33.8948 10.2686 31.9925C9.89331 30.0902 10.0858 28.1184 10.8218 26.3265C11.5577 24.5345 12.804 23.0029 14.403 21.9253C16.002 20.8477 17.882 20.2726 19.8052 20.2726C21.7283 20.2726 23.6083 20.8477 25.2073 21.9253C26.8064 23.0029 28.0527 24.5345 28.7886 26.3265C29.5245 28.1184 29.717 30.0902 29.3418 31.9925C28.9665 33.8948 28.0404 35.6421 26.6805 37.0135H12.9299Z"
          fill="white"
        ></path>
        <path
          d="M55.1091 15.025C52.6632 10.4457 49.0134 6.63467 44.5605 4.01047C39.9814 1.31581 34.761 -0.0697132 29.4599 0.00273948C24.1576 -0.0702181 18.9358 1.31532 14.3556 4.01047C9.90123 6.63411 6.25004 10.4452 3.80311 15.025C1.26797 19.6962 0.000405794 24.9542 0.000405794 30.799C-0.0185109 34.8028 0.624068 38.7819 1.90176 42.5729C3.07548 46.13 4.9323 49.4192 7.36624 52.2528L29.4599 50.9795V42.1011H23.8928V46.4885L9.92926 47.2824C6.95174 43.1098 5.46108 37.0579 5.46108 31.0674C5.39434 26.6087 6.47806 22.2091 8.60592 18.3002C10.6223 14.589 13.5956 11.4962 17.2114 9.34899C20.9244 7.16028 25.1596 6.03576 29.4599 6.09679C33.7718 6.03981 38.0181 7.16381 41.7465 9.34899C45.3796 11.4824 48.3577 14.5868 50.352 18.3194C52.4513 22.2543 53.5194 26.6647 53.455 31.1326C53.455 38.2506 51.1936 44.1197 46.671 48.7398L50.5611 52.5749C53.3494 49.9701 55.4899 46.7392 56.809 43.1443C58.248 39.2174 58.962 35.058 58.9156 30.8718C58.9156 24.9836 57.6468 19.7013 55.1091 15.025Z"
          fill="white"
        ></path>
        <path
          d="M21.4442 30.6318C22.5321 30.6318 23.414 29.7424 23.414 28.6452C23.414 27.548 22.5321 26.6586 21.4442 26.6586C20.3563 26.6586 19.4744 27.548 19.4744 28.6452C19.4744 29.7424 20.3563 30.6318 21.4442 30.6318Z"
          fill="black"
        ></path>
        <path
          d="M41.2143 30.6318C42.3022 30.6318 43.1841 29.7424 43.1841 28.6452C43.1841 27.548 42.3022 26.6586 41.2143 26.6586C40.1264 26.6586 39.2445 27.548 39.2445 28.6452C39.2445 29.7424 40.1264 30.6318 41.2143 30.6318Z"
          fill="black"
        ></path>
      </svg>
    </div>
  );
  const getMenu = () => (
    <div className="footer__menu">
      <nav>
        <ul className="footer__list">
          {links.map((link, index) => (
            <li className="footer__list-item" key={index}>
              <a className="footer__link" href={link.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
  const getSocials = () => (
    <div className="footer__social">
      <a className="footer__social-item footer__social-item--vk" href="https://vk.com/gabestore">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26.8185 18.4444C27.8126 19.4739 28.8643 20.4427 29.7567 21.5786C30.152 22.0811 30.5247 22.6007 30.8083 23.185C31.2133 24.0183 30.8476 24.9321 30.1442 24.9816L25.7747 24.9807C24.6463 25.0797 23.7482 24.5971 22.9911 23.7791C22.3867 23.1272 21.826 22.4309 21.2439 21.7567C21.006 21.4801 20.7556 21.2196 20.4571 21.0146C19.8614 20.6037 19.3439 20.7296 19.0026 21.3894C18.6549 22.0607 18.5754 22.8047 18.5423 23.5519C18.4947 24.6443 18.184 24.9298 17.1502 24.9812C14.9413 25.0908 12.8454 24.7355 10.8974 23.5547C9.179 22.5132 7.84893 21.0433 6.68992 19.379C4.43299 16.1347 2.70451 12.5739 1.15146 8.91087C0.801921 8.08591 1.05764 7.64451 1.91598 7.6274C3.34206 7.59825 4.76813 7.60195 6.1942 7.62601C6.77457 7.63572 7.15858 7.98782 7.38157 8.56849C8.15221 10.5788 9.09696 12.4916 10.2808 14.2655C10.5963 14.7379 10.9184 15.2089 11.377 15.5425C11.8832 15.9108 12.269 15.7891 12.5077 15.1899C12.6604 14.8091 12.7263 14.402 12.7594 13.9939C12.8729 12.5961 12.8864 11.1988 12.6901 9.80662C12.5679 8.93539 12.1058 8.37277 11.2867 8.20806C10.8695 8.12431 10.9306 7.96053 11.1335 7.7079C11.4857 7.27113 11.8156 7.00093 12.4749 7.00093L17.4116 7C18.1897 7.16194 18.3642 7.53208 18.4698 8.36306L18.4742 14.1799C18.465 14.5014 18.6265 15.4546 19.1711 15.6651C19.6075 15.8178 19.8955 15.4467 20.1564 15.1538C21.3403 13.8218 22.1838 12.2496 22.9392 10.6223C23.2726 9.90471 23.5601 9.16211 23.8394 8.41812C24.0471 7.86799 24.3701 7.59732 24.9557 7.60657L29.7095 7.61259C29.8496 7.61259 29.9919 7.61398 30.1306 7.63942C30.9318 7.78471 31.1513 8.15022 30.9034 8.97889C30.5133 10.2809 29.7553 11.3654 29.0144 12.4527C28.2202 13.6168 27.3732 14.7402 26.5868 15.9094C25.8642 16.9782 25.9214 17.5163 26.8185 18.4444Z"
            fill="white"
          ></path>
        </svg>
      </a>
      <a className="footer__social-item footer__social-item--tg" href="http://t.me/gabestore">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M29.9202 6.18489L25.6948 26.5513C25.3761 27.9887 24.5447 28.3464 23.3634 27.6692L16.9253 22.8204L13.8188 25.8741C13.475 26.2254 13.1875 26.5193 12.5249 26.5193L12.9875 19.8178L24.9198 8.79776C25.4386 8.32502 24.8073 8.06309 24.1134 8.53583L9.36214 18.0291L3.01157 15.9975C1.6302 15.5567 1.60519 14.5857 3.29909 13.9085L28.1388 4.12781C29.2889 3.687 30.2952 4.38973 29.9202 6.18489Z"
            fill="white"
          ></path>
        </svg>
      </a>
      <a className="footer__social-item footer__social-item--yt" href="https://www.youtube.com/c/GabeStoreYT">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.99"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.3308 7.00004C17.9489 7.00698 25.0191 7.06671 26.9555 7.58035C28.1549 7.89332 29.1006 8.80988 29.4235 9.97234C29.9433 11.8129 29.9954 15.3829 30 16.3022L29.9997 16.6478C29.9945 17.3803 29.9426 21.1387 29.4235 23.05C29.1006 24.2125 28.1549 25.129 26.9555 25.442C25.0191 25.9359 17.9489 25.9933 16.3308 26L15.6688 26C14.0547 25.993 7.0001 25.9333 5.04328 25.4196C3.84388 25.1067 2.89819 24.1901 2.57527 23.0277C2.07552 21.2065 2.00888 17.639 2 16.7201V16.281C2.00888 15.3662 2.07552 11.8129 2.57527 9.97234C2.89819 8.80988 3.86694 7.87097 5.04328 7.558C6.97972 7.06411 14.0499 7.00668 15.668 7L16.3308 7.00004ZM13.2085 12.4314V20.5686L20.4972 16.5L13.2085 12.4314Z"
            fill="white"
          ></path>
        </svg>
      </a>
      <a className="footer__social-item footer__social-item--ds" href="https://discord.com/invite/gabestore">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.7266 14.4858C13.0101 14.4858 12.4443 15.1108 12.4443 15.8734C12.4443 16.6359 13.0226 17.2609 13.7266 17.2609C14.4432 17.2609 15.0089 16.6359 15.0089 15.8734C15.0215 15.1108 14.4432 14.4858 13.7266 14.4858ZM18.3152 14.4858C17.5986 14.4858 17.0329 15.1108 17.0329 15.8734C17.0329 16.6359 17.6112 17.2609 18.3152 17.2609C19.0318 17.2609 19.5975 16.6359 19.5975 15.8734C19.5975 15.1108 19.0318 14.4858 18.3152 14.4858Z"
            fill="white"
          ></path>
          <path
            d="M24.4229 4H7.57714C6.15657 4 5 5.15 5 6.575V23.475C5 24.9 6.15657 26.05 7.57714 26.05H21.8331L21.1669 23.7375L22.776 25.225L24.2971 26.625L27 29V6.575C27 5.15 25.8434 4 24.4229 4ZM19.5703 20.325C19.5703 20.325 19.1177 19.7875 18.7406 19.3125C20.3874 18.85 21.016 17.825 21.016 17.825C20.5006 18.1625 20.0103 18.4 19.5703 18.5625C18.9417 18.825 18.3383 19 17.7474 19.1C16.5406 19.325 15.4343 19.2625 14.4914 19.0875C13.7749 18.95 13.1589 18.75 12.6434 18.55C12.3543 18.4375 12.04 18.3 11.7257 18.125C11.688 18.1 11.6503 18.0875 11.6126 18.0625C11.5874 18.05 11.5749 18.0375 11.5623 18.025C11.336 17.9 11.2103 17.8125 11.2103 17.8125C11.2103 17.8125 11.8137 18.8125 13.4103 19.2875C13.0331 19.7625 12.568 20.325 12.568 20.325C9.78971 20.2375 8.73371 18.425 8.73371 18.425C8.73371 14.4 10.544 11.1375 10.544 11.1375C12.3543 9.7875 14.0766 9.825 14.0766 9.825L14.2023 9.975C11.9394 10.625 10.896 11.6125 10.896 11.6125C10.896 11.6125 11.1726 11.4625 11.6377 11.25C12.9829 10.6625 14.0514 10.5 14.4914 10.4625C14.5669 10.45 14.6297 10.4375 14.7051 10.4375C15.472 10.3375 16.3394 10.3125 17.2446 10.4125C18.4389 10.55 19.7211 10.9 21.0286 11.6125C21.0286 11.6125 20.0354 10.675 17.8983 10.025L18.0743 9.825C18.0743 9.825 19.7966 9.7875 21.6069 11.1375C21.6069 11.1375 23.4171 14.4 23.4171 18.425C23.4171 18.425 22.3486 20.2375 19.5703 20.325Z"
            fill="white"
          ></path>
        </svg>
      </a>
    </div>
  );
  const getNotification = () => (
    <div className="footer__notification">
      <div className="footer__notification-wrapper">
        Все продаваемые ключи закупаются у официальных дистрибьюторов
        <br />и издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza.
      </div>
    </div>
  );
  const getOptions = () => <div className="footer__options">dollar</div>;
  const getCopyright = () => (
    <div className="footer__copyright">
      <div className="footer__copyright-policy">
        <span>© 2014-2020 GabeStore</span>
        <a href="/">Правовая информация</a>
      </div>
      <div className="footer__copyright-payment">
        <div className="footer__copyright-payment__item">
          <svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path
                d="M25.3462 9.11443C25.3167 11.3433 27.3141 12.5871 28.8096 13.3234C30.3544 14.0796 30.8661 14.5672 30.8661 15.2438C30.8562 16.2786 29.6361 16.7363 28.4948 16.7562C26.5072 16.7861 25.3462 16.209 24.4311 15.7811L23.7129 19.1741C24.6378 19.602 26.34 19.9801 28.111 20C32.2731 20 34.9888 17.9204 35.0084 14.7065C35.0281 10.6269 29.4197 10.398 29.459 8.56716C29.4689 8.00995 29.9904 7.42289 31.1416 7.27363C31.7122 7.19403 33.2767 7.14428 35.0478 7.97015L35.7464 4.68657C34.7821 4.33831 33.5522 4 32.0271 4C28.1209 4 25.3659 6.0995 25.3462 9.11443ZM42.4273 4.27861C41.6697 4.27861 41.0301 4.72637 40.7448 5.41294L34.8018 19.7512H38.954L39.7805 17.4428H44.8576L45.3398 19.7512H49L45.8022 4.27861H42.4273ZM43.0078 8.46766L44.2082 14.2786H40.9219L43.0078 8.46766ZM20.3084 4.27861L17.0319 19.7612H20.9873L24.2639 4.27861H20.3084ZM14.4442 4.27861L10.3215 14.8159L8.65863 5.8607C8.46185 4.86567 7.69438 4.27861 6.82851 4.27861H0.0983936L0 4.73632C1.38735 5.04478 2.95181 5.53234 3.90622 6.04975C4.48675 6.36816 4.65402 6.64677 4.8508 7.41294L8.00924 19.7612H12.191L18.6062 4.27861H14.4442Z"
                fill="#C4C4C4"
              ></path>
            </g>
          </svg>
        </div>
        <div className="footer__copyright-payment__item">
          <svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.5002 5.00003H34.2002C34.7002 8.10003 37.7002 11 41.0002 11H48.4002C48.5002 10.7 48.5002 10.3 48.5002 10C48.5002 7.20003 46.3002 5.00003 43.5002 5.00003Z"
              fill="#787878"
            ></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M35 11.5V19H39.5V15H43.5C45.7 15 47.6 13.5 48.2 11.5H35Z" fill="#787878"></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 5.00003V19H23C23 19 24 19 24.5 18C27.2 12.6 28 11 28 11H28.5V19H33V5.00003H29C29 5.00003 28 5.10003 27.5 6.00003C25.2 10.6 24 13 24 13H23.5V5.00003H19Z"
              fill="#787878"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 19V5.00003H4.5C4.5 5.00003 5.8 5.00003 6.5 7.00003C8.3 12.3 8.5 13 8.5 13C8.5 13 8.9 11.7 10.5 7.00003C11.2 5.00003 12.5 5.00003 12.5 5.00003H17V19H12.5V11.5H12L9.5 19H7.5L5 11.5H4.5V19H0Z"
              fill="#787878"
            ></path>
          </svg>
        </div>
        <div className="footer__copyright-payment__item">
          <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path
                d="M5.6396 23.8676V22.2784C5.6489 22.1448 5.62949 22.0107 5.58264 21.8851C5.5358 21.7595 5.4626 21.6452 5.36793 21.55C5.27326 21.4548 5.15929 21.3807 5.0336 21.3327C4.90792 21.2848 4.77342 21.264 4.63905 21.2719C4.46317 21.2604 4.28741 21.2961 4.13014 21.3754C3.97287 21.4546 3.83984 21.5743 3.74494 21.7222C3.65844 21.5788 3.53467 21.4612 3.38667 21.382C3.23868 21.3028 3.07195 21.2647 2.90405 21.2719C2.7577 21.2645 2.61196 21.2954 2.48126 21.3613C2.35057 21.4273 2.23947 21.5261 2.15896 21.648V21.3355H1.60547V23.8676H2.16429V22.4744C2.1524 22.3878 2.15988 22.2997 2.18619 22.2163C2.2125 22.1329 2.25699 22.0564 2.31648 21.9921C2.37597 21.9278 2.44899 21.8774 2.53032 21.8445C2.61166 21.8116 2.69929 21.7969 2.78697 21.8016C3.15419 21.8016 3.34046 22.04 3.34046 22.4691V23.8782H3.89928V22.4744C3.88788 22.3879 3.8957 22.3 3.92219 22.2168C3.94868 22.1336 3.99319 22.0573 4.05258 21.9931C4.11197 21.9289 4.18479 21.8785 4.26589 21.8454C4.347 21.8124 4.43441 21.7974 4.52196 21.8016C4.89983 21.8016 5.08078 22.04 5.08078 22.4691V23.8782L5.6396 23.8676ZM13.9074 21.3355H12.9974V20.5673H12.4385V21.3355H11.9329V21.8387H12.4492V23.0042C12.4492 23.5922 12.678 23.9418 13.3326 23.9418C13.5772 23.9426 13.817 23.8747 14.0245 23.7458L13.8649 23.2743C13.7164 23.3625 13.548 23.4117 13.3752 23.4174C13.1091 23.4174 13.008 23.2478 13.008 22.9936V21.8387H13.9127L13.9074 21.3355ZM18.6281 21.2719C18.4932 21.2679 18.3596 21.3003 18.2416 21.3656C18.1236 21.4308 18.0254 21.5266 17.9575 21.6427V21.3355H17.4093V23.8676H17.9628V22.4479C17.9628 22.0294 18.1438 21.7963 18.495 21.7963C18.6134 21.7947 18.731 21.8163 18.841 21.8599L19.0113 21.3302C18.8849 21.2852 18.7517 21.2619 18.6175 21.2613L18.6281 21.2719ZM11.4912 21.5368C11.1779 21.3514 10.8177 21.2594 10.4534 21.2719C9.80944 21.2719 9.38899 21.5791 9.38899 22.0824C9.38899 22.4956 9.69767 22.7499 10.2671 22.8293L10.5332 22.8664C10.8366 22.9088 10.9803 22.9883 10.9803 23.1313C10.9803 23.3273 10.7781 23.4385 10.4002 23.4385C10.0962 23.4473 9.79818 23.354 9.55398 23.1737L9.28787 23.6028C9.61029 23.8268 9.99646 23.942 10.3895 23.9312C11.124 23.9312 11.5498 23.5869 11.5498 23.1048C11.5498 22.6227 11.2145 22.4267 10.661 22.3473L10.3949 22.3102C10.1554 22.2784 9.96377 22.2307 9.96377 22.0612C9.96377 21.8917 10.1447 21.7646 10.4481 21.7646C10.7285 21.7678 11.0033 21.8426 11.2464 21.9818L11.4912 21.5368ZM26.3158 21.2719C26.1809 21.2679 26.0474 21.3003 25.9293 21.3656C25.8113 21.4308 25.7132 21.5266 25.6452 21.6427V21.3355H25.0971V23.8676H25.6506V22.4479C25.6506 22.0294 25.8315 21.7963 26.1828 21.7963C26.3012 21.7947 26.4187 21.8163 26.5287 21.8599L26.699 21.3302C26.5726 21.2852 26.4394 21.2619 26.3052 21.2613L26.3158 21.2719ZM19.1843 22.5963C19.1777 22.7742 19.2085 22.9516 19.2747 23.117C19.3409 23.2824 19.4411 23.4322 19.5689 23.5569C19.6966 23.6815 19.8491 23.7783 20.0166 23.8409C20.184 23.9035 20.3628 23.9307 20.5414 23.9206C20.8737 23.9374 21.2003 23.8297 21.4568 23.6187L21.1907 23.1737C20.9993 23.3189 20.766 23.3988 20.5254 23.4015C20.3208 23.385 20.13 23.2925 19.9908 23.1423C19.8516 22.9921 19.7744 22.7953 19.7744 22.591C19.7744 22.3866 19.8516 22.1898 19.9908 22.0396C20.13 21.8895 20.3208 21.7969 20.5254 21.7804C20.766 21.7831 20.9993 21.863 21.1907 22.0082L21.4568 21.5633C21.2003 21.3522 20.8737 21.2445 20.5414 21.2613C20.3628 21.2512 20.184 21.2784 20.0166 21.341C19.8491 21.4036 19.6966 21.5004 19.5689 21.625C19.4411 21.7497 19.3409 21.8995 19.2747 22.0649C19.2085 22.2304 19.1777 22.4077 19.1843 22.5857V22.5963ZM24.368 22.5963V21.3355H23.8145V21.6427C23.7205 21.5223 23.599 21.4259 23.4602 21.3614C23.3214 21.297 23.1692 21.2663 23.0161 21.2719C22.6633 21.2719 22.3248 21.4114 22.0753 21.6598C21.8258 21.9082 21.6856 22.245 21.6856 22.5963C21.6856 22.9475 21.8258 23.2844 22.0753 23.5327C22.3248 23.7811 22.6633 23.9206 23.0161 23.9206C23.1692 23.9262 23.3214 23.8955 23.4602 23.8311C23.599 23.7666 23.7205 23.6702 23.8145 23.5498V23.857H24.368V22.5963ZM22.3083 22.5963C22.3171 22.4472 22.3696 22.304 22.4591 22.1842C22.5487 22.0644 22.6715 21.9734 22.8124 21.9222C22.9533 21.871 23.1062 21.862 23.2522 21.8962C23.3982 21.9304 23.531 22.0064 23.6342 22.1147C23.7374 22.2231 23.8065 22.3592 23.833 22.5061C23.8595 22.6531 23.8422 22.8045 23.7833 22.9419C23.7244 23.0792 23.6264 23.1964 23.5015 23.279C23.3765 23.3616 23.23 23.406 23.08 23.4068C22.9746 23.4081 22.8701 23.3877 22.7731 23.3469C22.676 23.3061 22.5885 23.2457 22.516 23.1696C22.4435 23.0934 22.3877 23.0032 22.3519 22.9045C22.3162 22.8059 22.3013 22.7009 22.3083 22.5963V22.5963ZM15.6291 21.2719C15.2762 21.2768 14.9398 21.4211 14.6938 21.6729C14.4477 21.9247 14.3123 22.2636 14.3172 22.6148C14.3222 22.966 14.4671 23.3009 14.7201 23.5458C14.9731 23.7907 15.3135 23.9255 15.6664 23.9206C16.0492 23.9402 16.4257 23.8175 16.7228 23.5763L16.4567 23.1684C16.2466 23.3361 15.9863 23.4293 15.7169 23.4332C15.534 23.4489 15.3521 23.3929 15.21 23.2772C15.0678 23.1614 14.9767 22.9951 14.9559 22.8134H16.8452C16.8452 22.7446 16.8452 22.6757 16.8452 22.6016C16.8452 21.8069 16.3503 21.2772 15.6371 21.2772L15.6291 21.2719ZM15.6291 21.7646C15.7119 21.7628 15.7943 21.7773 15.8715 21.8072C15.9487 21.8372 16.0192 21.8819 16.079 21.939C16.1388 21.9961 16.1867 22.0643 16.22 22.1398C16.2533 22.2153 16.2714 22.2966 16.2731 22.3791H14.9426C14.9522 22.209 15.0283 22.0495 15.1547 21.9347C15.281 21.8198 15.4475 21.7587 15.6185 21.7646H15.6291ZM29.4958 22.6016V20.3184H28.9636V21.6427C28.8696 21.5223 28.7481 21.4259 28.6093 21.3614C28.4705 21.297 28.3183 21.2663 28.1652 21.2719C27.8124 21.2719 27.4739 21.4114 27.2244 21.6598C26.9749 21.9082 26.8347 22.245 26.8347 22.5963C26.8347 22.9475 26.9749 23.2844 27.2244 23.5327C27.4739 23.7811 27.8124 23.9206 28.1652 23.9206C28.3183 23.9262 28.4705 23.8955 28.6093 23.8311C28.7481 23.7666 28.8696 23.6702 28.9636 23.5498V23.857H29.4958V22.6016ZM30.4191 23.4995C30.4537 23.499 30.4881 23.5053 30.5203 23.518C30.5508 23.5304 30.5788 23.5484 30.6028 23.571C30.6261 23.5938 30.6451 23.6208 30.6586 23.6504C30.6721 23.6814 30.6791 23.7147 30.6791 23.7484C30.6791 23.7822 30.6721 23.8155 30.6586 23.8464C30.6451 23.8761 30.6261 23.9031 30.6028 23.9259C30.5788 23.9485 30.5508 23.9665 30.5203 23.9789C30.4884 23.9929 30.454 24.0001 30.4191 24.0001C30.3687 23.9997 30.3194 23.9851 30.277 23.9579C30.2346 23.9307 30.2008 23.892 30.1796 23.8464C30.1663 23.8155 30.1595 23.7821 30.1595 23.7484C30.1595 23.7148 30.1663 23.6814 30.1796 23.6504C30.1932 23.6208 30.2121 23.5938 30.2355 23.571C30.2595 23.5484 30.2875 23.5304 30.318 23.518C30.3527 23.5043 30.3899 23.498 30.4271 23.4995H30.4191ZM30.4191 23.9471C30.4457 23.9473 30.472 23.9418 30.4963 23.9312C30.5192 23.921 30.54 23.9067 30.5575 23.8888C30.5908 23.8527 30.6093 23.8054 30.6093 23.7564C30.6093 23.7074 30.5908 23.6601 30.5575 23.624C30.54 23.6061 30.5192 23.5917 30.4963 23.5816C30.472 23.571 30.4457 23.5656 30.4191 23.5657C30.3926 23.5658 30.3664 23.5712 30.342 23.5816C30.3181 23.5913 30.2964 23.6057 30.2781 23.624C30.2448 23.6601 30.2264 23.7074 30.2264 23.7564C30.2264 23.8054 30.2448 23.8527 30.2781 23.8888C30.2964 23.907 30.3181 23.9214 30.342 23.9312C30.3688 23.9427 30.3979 23.9482 30.4271 23.9471H30.4191ZM30.4351 23.6319C30.4599 23.6307 30.4844 23.6382 30.5043 23.6531C30.5124 23.6598 30.5189 23.6683 30.523 23.678C30.5272 23.6877 30.529 23.6982 30.5282 23.7087C30.5286 23.7175 30.5272 23.7263 30.524 23.7345C30.5208 23.7427 30.5159 23.7502 30.5096 23.7564C30.4942 23.7703 30.4745 23.7787 30.4537 23.7802L30.5309 23.8676H30.4697L30.3979 23.7802H30.3739V23.8676H30.3233V23.6346L30.4351 23.6319ZM30.3766 23.6769V23.7405H30.4351C30.4455 23.7436 30.4566 23.7436 30.467 23.7405C30.4689 23.7368 30.4699 23.7327 30.4699 23.7286C30.4699 23.7244 30.4689 23.7204 30.467 23.7167C30.4689 23.713 30.4699 23.7089 30.4699 23.7047C30.4699 23.7006 30.4689 23.6965 30.467 23.6928C30.4566 23.6897 30.4455 23.6897 30.4351 23.6928L30.3766 23.6769ZM27.4494 22.6016C27.4583 22.4525 27.5107 22.3093 27.6002 22.1895C27.6898 22.0697 27.8126 21.9787 27.9535 21.9275C28.0945 21.8763 28.2473 21.8673 28.3934 21.9015C28.5394 21.9357 28.6721 22.0117 28.7753 22.12C28.8785 22.2284 28.9476 22.3645 28.9741 22.5114C29.0006 22.6584 28.9833 22.8098 28.9244 22.9472C28.8655 23.0845 28.7675 23.2017 28.6426 23.2843C28.5176 23.3669 28.3711 23.4113 28.2211 23.4121C28.1158 23.4134 28.0113 23.393 27.9142 23.3522C27.8171 23.3113 27.7296 23.251 27.6571 23.1748C27.5847 23.0987 27.5288 23.0085 27.493 22.9098C27.4573 22.8112 27.4424 22.7062 27.4494 22.6016V22.6016ZM8.76099 22.6016V21.3355H8.20749V21.6427C8.1135 21.5223 7.99209 21.4259 7.85328 21.3614C7.71447 21.297 7.56225 21.2663 7.40918 21.2719C7.05631 21.2719 6.71789 21.4114 6.46837 21.6598C6.21885 21.9082 6.07867 22.245 6.07867 22.5963C6.07867 22.9475 6.21885 23.2844 6.46837 23.5327C6.71789 23.7811 7.05631 23.9206 7.40918 23.9206C7.56225 23.9262 7.71447 23.8955 7.85328 23.8311C7.99209 23.7666 8.1135 23.6702 8.20749 23.5498V23.857H8.76099V22.6016ZM6.70135 22.6016C6.71017 22.4525 6.7626 22.3093 6.85217 22.1895C6.94174 22.0697 7.06455 21.9787 7.20547 21.9275C7.34638 21.8763 7.49926 21.8673 7.64527 21.9015C7.79129 21.9357 7.92406 22.0117 8.02724 22.12C8.13043 22.2284 8.19952 22.3645 8.22601 22.5114C8.2525 22.6584 8.23523 22.8098 8.17633 22.9472C8.11743 23.0845 8.01946 23.2017 7.89451 23.2843C7.76955 23.3669 7.62305 23.4113 7.47305 23.4121C7.36724 23.4141 7.26216 23.3943 7.16446 23.3538C7.06677 23.3133 6.9786 23.253 6.90554 23.1768C6.83248 23.1006 6.77613 23.0101 6.74006 22.9111C6.704 22.8121 6.689 22.7067 6.69603 22.6016H6.70135Z"
                fill="#1F1F1F"
              ></path>
              <path d="M19.6904 2.03906H11.3081V17.0334H19.6904V2.03906Z" fill="#8B8B8B"></path>
              <path
                d="M11.8402 9.53744C11.8386 8.09317 12.1673 6.66748 12.8012 5.36833C13.4351 4.06918 14.3577 2.93064 15.4991 2.03892C14.0859 0.933408 12.3887 0.245953 10.6015 0.0551292C8.81428 -0.135695 7.0092 0.177811 5.39254 0.959816C3.77588 1.74182 2.41287 2.96078 1.45928 4.47736C0.505693 5.99395 0 7.74699 0 9.53611C0 11.3252 0.505693 13.0783 1.45928 14.5949C2.41287 16.1114 3.77588 17.3304 5.39254 18.1124C7.0092 18.8944 8.81428 19.2079 10.6015 19.0171C12.3887 18.8263 14.0859 18.1388 15.4991 17.0333C14.3581 16.1419 13.4357 15.0037 12.8018 13.7051C12.1679 12.4064 11.839 10.9813 11.8402 9.53744V9.53744Z"
                fill="#434343"
              ></path>
              <path
                d="M31 9.53781C31 11.3271 30.4942 13.0802 29.5404 14.5969C28.5867 16.1135 27.2234 17.3324 25.6066 18.1143C23.9897 18.8962 22.1845 19.2095 20.3972 19.0184C18.6099 18.8273 16.9127 18.1395 15.4995 17.0337C16.6401 16.1414 17.5622 15.003 18.1963 13.7043C18.8304 12.4056 19.1598 10.9804 19.1598 9.53648C19.1598 8.09252 18.8304 6.66741 18.1963 5.36869C17.5622 4.06996 16.6401 2.93153 15.4995 2.03929C16.9127 0.933432 18.6099 0.245643 20.3972 0.0545454C22.1845 -0.136552 23.9897 0.176752 25.6066 0.958646C27.2234 1.74054 28.5867 2.95947 29.5404 4.47611C30.4942 5.99275 31 7.7459 31 9.53516V9.53781Z"
                fill="#C4C4C4"
              ></path>
              <path
                d="M30.0837 15.4441V15.1368H30.2088V15.0732H29.8921V15.1368H30.0278V15.4441H30.0837ZM30.6984 15.4441V15.0732H30.6026L30.4908 15.3381L30.3791 15.0732H30.2939V15.4441H30.3631V15.1659L30.4669 15.407H30.5387L30.6425 15.1659V15.4467L30.6984 15.4441Z"
                fill="#F79E1B"
              ></path>
            </g>
          </svg>
        </div>
        <div className="footer__copyright-payment__item">
          <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path
                d="M0 11.9094C0 10.5631 0.110586 9.70874 2.86673 7.62028C5.138 5.89428 12.4452 0 12.4452 0V9.83819H18V24H1.73535C0.782609 24 0 23.206 0 22.2395V11.9094Z"
                fill="#C4C4C4"
              ></path>
              <path d="M12.4457 9.83813V15.5426L2.23779 22.5933L15.1423 18.3387V9.83813H12.4457Z" fill="#141111" fillOpacity="0.37"></path>
              <path
                d="M7.77524 9.54469C8.3707 8.81977 9.24688 8.5695 9.72325 8.97511C10.1996 9.38072 10.1061 10.2955 9.51059 11.0204C8.91512 11.7453 8.03894 11.9956 7.56257 11.59C7.0862 11.1844 7.17977 10.2696 7.77524 9.54469Z"
                fill="#393939"
              ></path>
            </g>
          </svg>
        </div>
        <div className="footer__copyright-payment__item">
          <svg width="65" height="24" viewBox="0 0 65 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.5"
              d="M43.1941 5.06335V16.2782C43.1941 16.4559 43.0622 16.5891 42.8864 16.5891H40.6223C40.4464 16.5891 40.3145 16.4559 40.3145 16.2782V5.06335C40.3145 4.88569 40.4464 4.75244 40.6223 4.75244H42.8864C43.0622 4.75244 43.1941 4.88569 43.1941 5.06335ZM60.8674 4.75244H58.3395C58.2076 4.75244 58.0977 4.84127 58.0538 4.97452L56.0534 11.6146L53.8553 4.97452C53.8113 4.84127 53.7014 4.77465 53.5695 4.77465H51.789C51.6571 4.77465 51.5472 4.86348 51.5032 4.97452L49.305 11.6146L47.2607 4.97452C47.2168 4.84127 47.1069 4.75244 46.975 4.75244H44.4471C44.3591 4.75244 44.2492 4.79686 44.2053 4.88569C44.1393 4.97452 44.1393 5.06335 44.1613 5.15218L47.8982 16.3893C47.9422 16.5225 48.0521 16.5891 48.184 16.5891H50.2063C50.3382 16.5891 50.4481 16.5003 50.492 16.3893L52.6682 9.838L54.8444 16.3893C54.8884 16.5225 54.9983 16.5891 55.1302 16.5891H57.1525C57.2844 16.5891 57.3943 16.5003 57.4383 16.3893L61.1752 5.15218C61.1972 5.06335 61.1972 4.95231 61.1312 4.88569C61.0653 4.79686 60.9773 4.75244 60.8674 4.75244ZM64.6922 4.75244H62.4281C62.2523 4.75244 62.1204 4.88569 62.1204 5.06335V16.2782C62.1204 16.4559 62.2523 16.5891 62.4281 16.5891H64.6922C64.8681 16.5891 65 16.4559 65 16.2782V5.06335C65 4.88569 64.8461 4.75244 64.6922 4.75244ZM39.0176 16.2116C39.1495 16.3671 39.0396 16.5891 38.8417 16.5891H36.05C35.9401 16.5891 35.8302 16.5447 35.7643 16.4559L35.3027 15.8785C34.3355 16.5003 33.1924 16.8778 31.9834 16.8778C28.5982 16.8778 25.8505 14.1019 25.8505 10.6819C25.8505 7.26191 28.5982 4.48595 31.9834 4.48595C35.3686 4.48595 38.1163 7.26191 38.1163 10.6819C38.1163 11.9033 37.7646 13.0581 37.1491 14.0353L39.0176 16.2116ZM33.5002 13.7021L32.2912 12.2142C32.1593 12.0588 32.2692 11.8145 32.467 11.8145H35.0169C35.1488 11.4592 35.2147 11.0594 35.2147 10.6597C35.2147 8.81645 33.8519 7.21749 31.9834 7.21749C30.115 7.21749 28.7521 8.81645 28.7521 10.6597C28.7521 12.5029 30.115 14.0797 31.9834 14.0797C32.533 14.1019 33.0385 13.9464 33.5002 13.7021ZM18.8603 16.145C18.9263 16.6113 18.7724 16.8112 18.6405 16.8112C18.4866 16.8112 18.2888 16.6113 18.047 16.256C17.8052 15.8785 17.7173 15.4565 17.8492 15.2567C17.9151 15.1234 18.091 15.0568 18.2888 15.1234C18.6625 15.2567 18.8164 15.8563 18.8603 16.145ZM16.6841 17.1665C17.1458 17.5663 17.2996 18.0548 17.0578 18.388C16.9259 18.5656 16.7061 18.6767 16.4204 18.6767C16.1566 18.6767 15.8928 18.5878 15.695 18.4102C15.2773 18.0326 15.1454 17.4108 15.4312 17.0777C15.5411 16.9445 15.7169 16.8778 15.9368 16.8778C16.1786 16.8556 16.4423 16.9667 16.6841 17.1665ZM15.8928 21.0307C17.9151 21.0307 20.1133 21.7413 22.5533 23.9177C22.7951 24.1397 23.1248 23.8732 22.905 23.5845C20.509 20.5421 18.3108 19.9647 16.1126 19.4761C13.4089 18.8765 12.024 17.3442 11.0568 15.6564C10.859 15.3233 10.7711 15.3899 10.7711 15.8119C10.7491 16.3448 10.793 17.0333 10.9029 17.7217C10.793 17.7217 10.6831 17.7217 10.5732 17.7217C6.72641 17.7217 3.58302 14.5682 3.58302 10.6597C3.58302 6.75113 6.70443 3.59764 10.5732 3.59764C14.42 3.59764 17.5634 6.75113 17.5634 10.6597C17.5634 10.9262 17.5414 11.2149 17.5194 11.4814C17.0139 11.3925 16.0027 11.3703 15.2993 11.437C15.0355 11.4592 15.0795 11.5924 15.2773 11.6146C17.5854 12.0366 19.1681 13.4801 19.5418 16.1006C19.5418 16.1672 19.6297 16.1894 19.6517 16.1228C20.5969 14.5238 21.1464 12.6584 21.1464 10.6375C21.1244 4.77465 16.3984 0 10.5732 0C4.72607 0 0 4.77465 0 10.6819C0 16.5891 4.72607 21.3638 10.5732 21.3638C12.1119 21.3416 13.6507 21.0307 15.8928 21.0307Z"
              fill="#C4C4C4"
            ></path>
          </svg>
        </div>
      </div>
      <div className="footer__copyright-by">
        Дизайн сайта:
        <a href="https://adn.agency/" target="blank">
          ADN Digital Studio
        </a>
      </div>
    </div>
  );
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {getLogo()}
          {getMenu()}
          {getSocials()}
          {getNotification()}
          {/* {getOptions()} */}
          {getCopyright()}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
