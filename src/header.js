import React from 'react';
import styles from './styles/header.module.css';

export const Header = (props) => {
    const rootEl = document.documentElement;

    const toggleDarkTheme = (toggle) => {
        rootEl.style.setProperty('--color-1', 'hsl(230, 17%, 14%)');
        rootEl.style.setProperty('--color-2', 'hsl(232, 19%, 15%)');
        rootEl.style.setProperty('--color-3', 'hsl(228, 28%, 20%)');
        rootEl.style.setProperty('--color-4', 'hsl(228, 34%, 66%)');
        rootEl.style.setProperty('--color-5', 'hsl(0, 0%, 100%)');

        rootEl.style.setProperty(
            '--header-border-color',
            'hsla(228, 25%, 27%, 1)'
        );
        rootEl.style.setProperty(
            '--toggle-bg-color',
            'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
        );
        toggle.style.left = '3px';

        toggle.setAttribute('data-theme', 'dark');
    };

    const toggleWhiteTheme = (toggle) => {
        rootEl.style.setProperty('--color-1', 'hsl(0, 0%, 100%)');
        rootEl.style.setProperty('--color-2', 'hsl(225, 100%, 98%)');
        rootEl.style.setProperty('--color-3', 'hsl(227, 47%, 96%)');
        rootEl.style.setProperty('--color-4', 'hsl(228, 12%, 44%)');
        rootEl.style.setProperty('--color-5', 'hsl(230, 17%, 14%)');

        rootEl.style.setProperty(
            '--header-border-color',
            'hsla(230, 19%, 60%, 1)'
        );
        rootEl.style.setProperty('--toggle-bg-color', 'hsl(230, 22%, 74%)');
        toggle.style.left = '27px';

        toggle.setAttribute('data-theme', 'light');
    };

    const switchTheme = ({ target }) => {
        let toggle;

        if (target.firstElementChild === null) {
            toggle = target;
        } else {
            toggle = target.firstElementChild;
        }

        if (toggle.dataset.theme === 'dark') {
            toggleWhiteTheme(toggle);
        } else if (toggle.dataset.theme === 'light') toggleDarkTheme(toggle);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.content_wrapper}>
                <h1 className={styles.h1}>Social Media Dashboard</h1>
                <p className={styles.p}>
                    Total Followers: {props.totalFollowers}
                </p>
            </div>

            <div className={styles.toggle_wrapper}>
                <p className={styles.p}>Dark Mode</p>
                <div className={styles.toggle} onClick={switchTheme}>
                    <div
                        data-theme="dark"
                        className={styles.toggle_circle}
                    ></div>
                </div>
            </div>
        </nav>
    );
};
