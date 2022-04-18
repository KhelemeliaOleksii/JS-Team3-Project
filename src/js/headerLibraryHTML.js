export const headerLibraryHTMLContent  = `
<div class="container header__site-nav"
    <div class="header__site-nav">
        <a class="logo link-no-tdn" href="" id="header__link--home">
            <img class="logo__svg" src="https://svgshare.com/i/gEU.svg" alt="logo">
            <span class="logo__text">Filmoteka</span>
        </a>
        <ul class="header__nav_links list-no-ls">
            <li class="header__nav_list_item ">
                <button type="button" class="header__home_link site-nav__link " id="header__btn--home">home</button>
            </li>

            <li class="header__nav_list_item">
                <button type="button" class="header__lib_link site-nav__link current" id="header__btn--library">my
                    library</button>
            </li>
        </ul>
    </div>
    <div class="header__library_btm">
        <button class="header__library_btm_item transparent-btn watched-btn-js" id="header__btn--watched">Watched</button>
        <button class="header__library_btm_item queue-btn-js " id="header__btn--queue">Queue</button>
    </div>
</div>
`;
