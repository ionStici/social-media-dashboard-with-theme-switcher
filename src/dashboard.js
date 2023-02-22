import React from 'react';
import styles from './styles/dashboard.module.scss';
import { icons } from './icons';

export const DashboardCard = (props) => {
    return (
        <div className={styles.card}>
            {/*  */}
            <div
                role="none"
                className={styles.tab}
                style={{ background: `${props.tabColor}` }}
            ></div>
            {/*  */}
            <div className={styles.header}>
                <img src={props.icon} className={styles.icon} alt="" />
                <a
                    rel="noreferrer"
                    target="_blank"
                    href={props.link}
                    className={styles.link}
                >
                    {props.username}
                </a>
            </div>
            {/*  */}
            <p className={styles.number}>{props.followers}</p>
            <p className={styles.followers}>Followers</p>
            {/*  */}
            <div className={styles.footer}>
                <img
                    className={styles.arrow_icon}
                    src={props.arrowIcon}
                    alt=""
                />
                <div className={`${props.status === 'red' ? styles.red : ''}`}>
                    <span className={styles.today_num}>{props.today}</span>
                    <span className={styles.today}>Today</span>
                </div>
            </div>
            {/*  */}
        </div>
    );
};

export class Dashboard extends React.Component {
    render() {
        return (
            <main className={styles.main}>
                <DashboardCard
                    link="https://www.facebook.com/"
                    icon={icons.facebook_icon}
                    username="@nathanf"
                    followers="1987"
                    arrowIcon={icons.up_icon}
                    today="12"
                    tabColor="hsl(208, 92%, 53%)"
                />

                <DashboardCard
                    link="https://twitter.com/"
                    icon={icons.twitter_icon}
                    username="@nathanf"
                    followers="1044"
                    arrowIcon={icons.up_icon}
                    today="99"
                    tabColor="hsl(203, 89%, 53%)"
                />

                <DashboardCard
                    link="https://www.instagram.com/"
                    icon={icons.instagram_icon}
                    username="@realnathanf"
                    followers="11k"
                    arrowIcon={icons.up_icon}
                    today="1099"
                    tabColor="linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))"
                />

                <DashboardCard
                    link="https://www.youtube.com/"
                    icon={icons.youtube_icon}
                    username="Nathan F."
                    followers="8239"
                    arrowIcon={icons.down_icon}
                    today="144"
                    tabColor="hsl(348, 97%, 39%)"
                    status="red"
                />
            </main>
        );
    }
}
