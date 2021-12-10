import React from 'react';

import s from "./Header.module.scss"

function Header({children}) {
    return (
        <header className={s.header}>
            <h2 className={s.header_caption}>OpenWeather</h2>
            {children}
        </header>
    );
}

export default Header;