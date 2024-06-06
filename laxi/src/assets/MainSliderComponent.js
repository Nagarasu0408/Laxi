import React, { useEffect } from 'react';
import MomentumSlider from 'momentum-slider';
import "./  MainSliderComponent.scss";// Assuming you have a way to import MomentumSlider

const Header = () => (
    <header className="header">
        <a className="header__logo">mir<span>r</span>or</a>
        <nav className="header__menu">
            <ul className="header__menu__list">
                <li className="header__menu__item"><a className="header__menu__link">works</a></li>
                <li className="header__menu__item"><a className="header__menu__link">culture</a></li>
                <li className="header__menu__item"><a className="header__menu__link">news</a></li>
                <li className="header__menu__item"><a className="header__menu__link">careers</a></li>
                <li className="header__menu__item"><a className="header__menu__link">contact</a></li>
            </ul>
        </nav>
    </header>
);

const Footer = () => (
    <footer className="footer">
        <nav className="footer__menu">
            <ul className="footer__menu__list">
                <li className="footer__menu__item"><a className="footer__menu__link">facebook</a></li>
                <li className="footer__menu__item"><a className="footer__menu__link">dribbble</a></li>
                <li className="footer__menu__item"><a className="footer__menu__link">instagram</a></li>
            </ul>
        </nav>
    </footer>
);

const SlidersContainer = () => {
    useEffect(() => {
        const slidersContainer = document.querySelector('.sliders-container');

        const msNumbers = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--numbers',
            range: [1, 4],
            rangeContent: i => '0' + i,
            style: {
                transform: [{ scale: [0.4, 1] }],
                opacity: [0, 1]
            },
            interactive: false
        });

        const titles = [
            'King of the Ring Fight',
            'Sound of Streets',
            'Urban Fashion',
            'Windy Sunset'
        ];

        const msTitles = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--titles',
            range: [0, 3],
            rangeContent: i => '<h3>' + titles[i] + '</h3>',
            vertical: true,
            reverse: true,
            style: { opacity: [0, 1] },
            interactive: false
        });

        const msLinks = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--links',
            range: [0, 3],
            rangeContent: () => '<a class="ms-slide__link">View Case</a>',
            vertical: true,
            interactive: false
        });

        const pagination = document.querySelector('.pagination');
        const paginationItems = Array.from(pagination.children);

        const msImages = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--images',
            range: [0, 3],
            rangeContent: () => '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>',
            sync: [msNumbers, msTitles, msLinks],
            style: {
                '.ms-slide__image': {
                    transform: [{ scale: [1.5, 1] }]
                }
            },
            change: (newIndex, oldIndex) => {
                if (typeof oldIndex !== 'undefined') {
                    paginationItems[oldIndex].classList.remove('pagination__item--active');
                }
                paginationItems[newIndex].classList.add('pagination__item--active');
            }
        });

        pagination.addEventListener('click', e => {
            if (e.target.matches('.pagination__button')) {
                const index = paginationItems.indexOf(e.target.parentNode);
                msImages.select(index);
            }
        });

    }, []);

    return (
        <main className="sliders-container">
            <ul className="pagination">
                <li className="pagination__item"><a className="pagination__button"></a></li>
                <li className="pagination__item"><a className="pagination__button"></a></li>
                <li className="pagination__item"><a className="pagination__button"></a></li>
                <li className="pagination__item"><a className="pagination__button"></a></li>
            </ul>
        </main>
    );
};

const MainSliderComponent = () => (
    <div className="container">
        <Header />
        <SlidersContainer />
        <Footer />
    </div>
);

export default MainSliderComponent;
