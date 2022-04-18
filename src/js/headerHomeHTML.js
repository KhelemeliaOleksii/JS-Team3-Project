export const headerHomeHTMLContent = `
    <div class="container">
        <nav class="header__site-nav">
            <a class="logo link-no-tdn" href="" id="header__link--home">
                <img class="logo__svg" src="https://svgshare.com/i/gEU.svg" alt="logo">
                <span class="logo__text">Filmoteka</span>
            </a>
            <ul class="header__nav_links list-no-ls">
                <li class="header__nav_list_item ">
                    <button type="button" class="header__home_link site-nav__link current"
                        id="header__btn--home">home</button>
                </li>

                <li class="header__nav_list_item">
                    <button type="button" class="header__lib_link site-nav__link" id="header__btn--library">my
                        library</button>
                </li>
            </ul>
        </nav>
        <form class="header__input_box" id="header__search-form">
            <input type="text" name="input" class="header__input" placeholder="Search movies" autocomplete="off" />
            <button class="header__search_btn">
                <img class="header__search-btn-icon" src="https://svgshare.com/i/gEa.svg" alt="search">
            </button>
        </form>
        <div class="header__input_msg_error" id="header__container-msg"></div>
    </div>
`;
