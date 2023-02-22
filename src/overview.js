import React from 'react';
import { icons } from './icons';
import styles from './styles/overview.module.scss';

const OverviewBox = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.heading}>
                <p className={styles.title}>{props.title}</p>
                <img className={styles.icon} src={props.icon} alt="" />
            </div>

            <div className={styles.footer}>
                <p className={styles.num}>{props.score}</p>
                <div className={styles.footerWrapper}>
                    <img
                        className={styles.arrowIcon}
                        src={props.arrowIcon}
                        alt=""
                    />
                    <p
                        style={{ color: `${props.color}` }}
                        className={styles.perc}
                    >
                        {props.perc}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export class Overview extends React.Component {
    render() {
        return (
            <main className={styles.main}>
                <h2 className={styles.h2}>Overview - Today</h2>
                <div className={styles.wrapper}>
                    <OverviewBox
                        title="Page Views"
                        icon={icons.facebook_icon}
                        score="87"
                        arrowIcon={icons.up_icon}
                        perc="3"
                        color="hsl(163, 72%, 41%)"
                    />

                    <OverviewBox
                        title="Likes"
                        icon={icons.facebook_icon}
                        score="52"
                        arrowIcon={icons.down_icon}
                        perc="2"
                        color="hsl(356, 69%, 56%)"
                    />

                    <OverviewBox
                        title="Likes"
                        icon={icons.instagram_icon}
                        score="5462"
                        arrowIcon={icons.up_icon}
                        perc="2257"
                        color="hsl(163, 72%, 41%)"
                    />

                    <OverviewBox
                        title="Profile Views"
                        icon={icons.instagram_icon}
                        score="52k"
                        arrowIcon={icons.up_icon}
                        perc="1375"
                        color="hsl(163, 72%, 41%)"
                    />

                    <OverviewBox
                        title="Retweets"
                        icon={icons.twitter_icon}
                        score="117"
                        arrowIcon={icons.up_icon}
                        perc="303"
                        color="hsl(163, 72%, 41%)"
                    />

                    <OverviewBox
                        title="Likes"
                        icon={icons.twitter_icon}
                        score="507"
                        arrowIcon={icons.up_icon}
                        perc="553"
                        color="hsl(163, 72%, 41%)"
                    />

                    <OverviewBox
                        title="Likes"
                        icon={icons.youtube_icon}
                        score="107"
                        arrowIcon={icons.down_icon}
                        perc="19"
                        color="hsl(356, 69%, 56%)"
                    />

                    <OverviewBox
                        title="Total Views"
                        icon={icons.youtube_icon}
                        score="1407"
                        arrowIcon={icons.down_icon}
                        perc="12"
                        color="hsl(356, 69%, 56%)"
                    />
                </div>
            </main>
        );
    }
}
