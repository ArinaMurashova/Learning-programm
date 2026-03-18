import CardCinema from '../components/CardCinema';
import "./Verstka.scss";

const SecondPage = () => {
    return <div className='wrp'>
        <header className='header'>
            <nav className='header-menu'>
                <ul className='header-menu-list'>
                    <li className='header-menu-list-el'>
                        Главная
                    </li>
                    <li className='header-menu-list-el'>
                        О Кино
                    </li>
                    <li className='header-menu-list-el'>
                        Кадры
                    </li>
                    <li className='header-menu-list-el'>
                        Персонажи
                    </li>
                </ul>
                <div className='header-menu-wrp'>
                    <button className='header-menu-wrp-btn'>
                        Поддержка
                    </button>
                </div>
            </nav>
            <article className='header-first'>
                <figure className='header-first-wrp'>
                    <h1 className='header-first-wrp-title'> star wasreclipse™ </h1>
                    <p className='header-first-wrp-description'> Новый приключенческий экшен с несколькими действующими персонажами и разветвленным повествованием, события которого происходят в эпоху расцвета республики – от Quantic Dream и Lucasfilm Games. Находится сейчас на ранней стадии разработки. </p>
                    <div className='header-first-wrp-btn'>
                        <button className='header-first-wrp-btn-text'>
                            Посмотреть Трейлер
                        </button>
                    </div>
                </figure>
            </article>
        </header>
        <main className='main'>
            <figure className='main-cinema'>
                <h3 className='main-cinema-title'>
                    Bce еще не можете определиться c выбором кино?
                </h3>
                <figure className='main-cinema-carucel'>
                    <button className='main-cinema-carucel-btn'>
                        <svg width="66" height="77" viewBox="0 0 66 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 38.1051L65.829 -1.52588e-05L65.829 76.2102L0 38.1051Z" fill="#6F2B14" />
                        </svg>
                    </button>
                    <figure className='main-cinema-carucel-poster'>
                        <CardCinema
                            text='Звёздные войны: Эпизод 1 – Скрытая угроза'
                            url='/jpgs/cinema-one.jpg'
                        />
                        <CardCinema
                            text='Звёздные войны: Эпизод 2 – Атака клонов'
                            url='/jpgs/cinema-two.jpg'
                        />
                        <CardCinema
                            text='Звёздные войны: Эпизод 3 – Месть ситхов'
                            url='/jpgs/cinema-three.jpg'
                        />
                        <CardCinema
                            text='Звёздные войны: Эпизод 4 – Новая надежда'
                            url='/jpgs/cinema-four.jpg'
                        />
                        <CardCinema
                            text='Звёздные войны: Эпизод 5 – Империя наносит ответный...'
                            url='/jpgs/cinema-five.jpg'
                        />
                    </figure>
                    <button className='main-cinema-carucel-btn'>
                        <svg width="66" height="77" viewBox="0 0 66 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M65.829 38.1051L-3.05176e-05 76.2102L-3.05176e-05 -1.52588e-05L65.829 38.1051Z" fill="#6F2B14" />
                        </svg>
                    </button>
                </figure>
            </figure>
            <aside>
                <h4>У каждого выбора есть</h4>
                <p>Любое принятое вами решение может иметь драматические последствия для вашего путешествия.
                    Образ жизни на Внешнем кольце находится под угрозой, и вы должны выбрать свой путь.</p>
            </aside>
            <figure>
                <figcaption>
                    <h3>Кадры из кино</h3>
                </figcaption>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button> Раскрыть Ещё </button>
            </figure>

            <figure>
                <h2> посмотреть трейлер </h2>

                <figure>
                    <video />
                    <button> </button>
                </figure>
                <figure>
                    <video />
                    <button> </button>
                </figure>
                <figure>
                    <video />
                    <button> </button>
                </figure>
            </figure>
            <article>
                <h1> Звёздные Войны </h1>
                <h2> «Делай до конца. Или не делай совем. Нет такого слова „Пытаться“» </h2>
                <h5> Мастер Йода</h5>
            </article>

            <article>
                <h2> Персонажи </h2>
                <button> </button>
                <button>
                    <img alt="hhh" />
                    <h3> Дарт Вейдер </h3>
                    <h5> Центральный персонаж первых шести эпизодов саги «Звёздные войны». Также появляется в фильме «Изгой-один». </h5>
                </button>
                <button>
                    <img alt="hhh" />
                    <h3> Оби-Ван Кеноби </h3>
                    <h5> Персонаж медиафраншизы «Звёздные войны». Один из немногих главных героев саги, появлявшихся в той или иной форме в семи фильмах франшизы.   </h5>
                </button>
                <button>
                    <img alt="hhh" />
                    <h3> Дарт Мол </h3>
                    <h5> Персонаж медиафраншизы «Звёздные войны», тёмный владыка ситхов, бывший ученик Дарта Сидиуса. </h5>
                </button>
                <button>
                    <img alt="hhh" />
                    <h3> Асока Тано </h3>
                    <h5> Бывший падаван Ордена джедаев. Придуман американским мультипликатором и сценаристом Дэйвом Филони. </h5>
                </button>
                <button>
                    <img alt="hhh" />
                    <h3> Йода </h3>
                    <h5> Вымышленный персонаж вселенной «Звёздные войны», гранд-мастер ордена джедаев. </h5>
                </button>
                <button> </button>
            </article>

            <article>
                <h2> Если остались вопросы по "Звездным войнам" мы на них ответим </h2>
                <h5> «Да пребудет с тобой Сила» </h5>
                <button> Ваш Вопрос </button>
                <button> Отправить </button>
            </article>
        </main>

        <footer>
            <figure>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <button>
                    <img alt="hhh" />
                </button>
                <h3> STAR WOSR ECLIPSE <span> TM </span></h3>
                <h4> STAR WARS © & ™ Lucasfilm Ltd. All Rights Reserved. © 2023 Quantic Dream.
                    Quantic Dream and the Quantic Dream logo are trademarks of Quantic Dream. All Rights Reserved. All other marks belong to their respective owners. </h4>
            </figure>
        </footer>
    </div>
}

export default SecondPage;