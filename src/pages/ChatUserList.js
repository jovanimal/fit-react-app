import React from "react";
import styles from "./ChatUserList.module.css";
import defaultAvatar from "../assets/images/default-profile.png";

function ChatUserList({ myinfo }) {
  return (
    <div className={styles.UserList}>
      <div className={styles.UserList__titlebar}>
        <img
          src={defaultAvatar}
          className={styles.UserList__titlebar__avatar}
          alt="avatar"
        />
        <span className="UserList__titlebar__logged-in-as">
          {myinfo.username}
        </span>
      </div>
      <div className={styles.UserList__container}>
        <ul className={styles.UserList__container__list}>
          <li className={styles.UserList__container__list__item}>
            <div>
              <img
                src={defaultAvatar}
                className={styles.UserList__container__list__item__avatar}
                alt="avatar"
              />
            </div>
            <div className={styles.UserList__container__list__item__content}>
              <p className={styles.UserList__container__list__item__content__name}>
                Kumar Subramaniam
              </p>
              <p className={styles.UserList__container__list__item__content__text}>
                You: See you later at 5pm!
              </p>
            </div>
            <div className={styles.UserList__container__list__item__time}>
              10:01 AM
            </div>
          </li>
          <li className={`${styles.UserList__container__list__item} ${styles.UserList__container__list__item--selected}`}>
            <div>
              <img
                src={defaultAvatar}
                className={styles.UserList__container__list__item__avatar}
                alt="avatar"
              />
            </div>
            <div className={styles.UserList__container__list__item__content}>
              <p className={styles.UserList__container__list__item__content__name}>
                Matthew Cross
              </p>
              <p className={styles.UserList__container__list__item__content__text}>
                Matthew: Not bad, how was yours?
              </p>
            </div>
            <div className={styles.UserList__container__list__item__time}>9:38 AM</div>
          </li>
          <li className={styles.UserList__container__list__item}>
            <div>
              <img
                src={defaultAvatar}
                className={styles.UserList__container__list__item__avatar}
                alt="avatar"
              />
            </div>
            <div className={styles.UserList__container__list__item__content}>
              <p className={styles.UserList__container__list__item__content__name}>
                Jordan Ng
              </p>
              <p className={styles.UserList__container__list__item__content__text}>
                Jordan: Did you get the files I sent yesterday?
              </p>
            </div>
            <div className={styles.UserList__container__list__item__time}>
              Yesterday
            </div>
          </li>
          <li className={`${styles.UserList__container__list__item} ${styles.UserList__container__list__item--selected}`}>
            <div>
              <img
                src={defaultAvatar}
                className={styles.UserList__container__list__item__avatar}
                alt="avatar"
              />
            </div>
            <div className={styles.UserList__container__list__item__content}>
              <p className={styles.UserList__container__list__item__content__name}>
                Jovan Goh
              </p>
              <p className={styles.UserList__container__list__item__content__text}>
                Jovan: HAHA April Fool!
              </p>
            </div>
            <div className={styles.UserList__container__list__item__time}>1/4/20</div>
          </li>
          <li className={`${styles.UserList__container__list__item} ${styles.UserList__container__list__item--selected}`}>
            <div>
              <img
                src={defaultAvatar}
                className={styles.UserList__container__list__item__avatar}
                alt="avatar"
              />
            </div>
            <div className={styles.UserList__container__list__item__content}>
              <p className={styles.UserList__container__list__item__content__name}>
                Fat Amy
              </p>
              <p className={styles.UserList__container__list__item__content__text}>
                Me: Just finished my home workout!
              </p>
            </div>
            <div className={styles.UserList__container__list__item__time}>30/3/20</div>
          </li>
          <li className={`${styles.UserList__container__list__item} ${styles.UserList__container__list__item--selected}`}>
            <div>
              <img
                src={defaultAvatar}
                className={styles.UserList__container__list__item__avatar}
                alt="avatar"
              />
            </div>
            <div className={styles.UserList__container__list__item__content}>
              <p className={styles.UserList__container__list__item__content__name}>
                Melissa Teh
              </p>
              <p className={styles.UserList__container__list__item__content__text}>
                Melissa: Covid-19 LOCKDOWN!
              </p>
            </div>
            <div className={styles.UserList__container__list__item__time}>18/3/20</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ChatUserList;
