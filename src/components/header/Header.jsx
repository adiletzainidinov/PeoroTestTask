import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isKatalogOpen, setIsKatalogOpen] = useState(false);
  const [isKatalogBurgerOpen, setisKatalogBurgerOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleKatalog = () => {
    setIsKatalogOpen(!isKatalogOpen);
  };

  const toggleKatalogBurger = () => {
    setisKatalogBurgerOpen(!isKatalogBurgerOpen);
  };

  const headerNavData = [
    {
      id: 1,
      text: 'Каталог и цены 2024',
      className: 'katalog',
      onClick: toggleKatalog,
      onClickBurger: toggleKatalogBurger,
      classNameBurger: 'katalogBurger',
    },
    {
      id: 2,
      text: 'Доставка и оплата',
      link: 'https://peoro.ru/dostavka-i-oplata',
    },
    { id: 3, text: 'Как заказать', link: 'https://peoro.ru/kak-zakazat' },
    { id: 4, text: 'О фабрике', link: 'https://peoro.ru/o-fabrike' },
    { id: 5, text: 'Контакты', link: 'https://peoro.ru/kontakti' },
    {
      id: 6,
      text: 'Подробный прайс с PDF',
      link: 'https://disk.yandex.ru/d/JAFWMIx51lcUyA',
    },
    { id: 7, text: 'Кейсы', link: 'https://peoro.ru/cases' },
  ];

  return (
    <>
      <div className="container">
        <div className="mainBox">
          <div className="contentBox">
            <div className="logoParents">
              <h2 className="logo">PeOro</h2>
              <p className="logoText">Производство одежды</p>
            </div>

            <div className="headerNav">
              {headerNavData.map((item) => (
                <a href={item.link} key={item.id} onClick={item.onClick}>
                  <button
                    className={`button ${item.id === 1 ? item.className : ''}`}
                    onClick={item.onClick}
                  >
                    {item.text}
                  </button>
                </a>
              ))}
            </div>

            {isKatalogOpen && (
              <div className="katalogInfo">
                {headerNavData.map((item) => (
                  <p key={item.id}>{item.text}</p>
                ))}
              </div>
            )}

            <div className="soshialMedia">
              <a
                style={{ textDecoration: 'none' }}
                href="https://api.whatsapp.com/send/?phone=9967279696&text&type=phone_number&app_absent=0"
              >
                <button className="whatsap">
                  <p>
                    <IonIcon name="logo-whatsapp" />
                  </p>
                  Написать в WhatsApp
                </button>
              </a>
            </div>

            {!isSidebarOpen && (
              <div className="burgerMeny" onClick={toggleSidebar}>
                <IonIcon icon={menuOutline} />
              </div>
            )}

            <div className={`sideBar ${isSidebarOpen ? 'open' : ''}`}>
              <div className="closeButton" onClick={toggleSidebar}>
                <IonIcon style={{ fontSize: '34px' }} icon={closeOutline} />
              </div>
              <div className="sideBarContent">
                {headerNavData.map((item) => (
                  <a style={{ width: '100%' }} key={item.id} href={item.link}>
                    <button
                      className={`buttonSideBar ${
                        item.id === 1 ? item.classNameBurger : ''
                      }`}
                      onClick={item.onClickBurger}
                    >
                      {item.text}
                    </button>
                  </a>
                ))}
              </div>
            </div>

            {isKatalogBurgerOpen && (
              <div className="katalogInfoBurger">
                {headerNavData.map((item) => (
                  <p key={item.id}>{item.text}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
