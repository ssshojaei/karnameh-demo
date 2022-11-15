import { CommentsIcon } from "components/icons";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import moment from "jalali-moment";

export interface ICardHeader {
  title: string;
  avatar: string;
  date: string;
  commentsCount: number;
}

const CardHeader = ({ title, avatar, date, commentsCount }: ICardHeader) => {
  return (
    <div className={styles.cardHeader}>
      <div className="flex flex-1 items-center">
        <Image src={avatar} width={32} height={32} alt="profile" className="rounded-lg" />
        <h4 className={styles.cardHeaderTitle}>{title}</h4>
      </div>
      <div className={styles.cardHeaderInfo}>
        <div className={styles.cardHeaderInfoDate}>
          <span>ساعت : </span>
          <time dateTime={date}>
            {moment(date, "YYYY-MM-DD HH:mm:ss").locale("fa").format("HH:mm")}
          </time>
        </div>
        <div className={styles.cardHeaderInfoDate}>
          <span>تاریخ : </span>
          <time dateTime={date} dir="ltr">
            {moment(date, "YYYY-MM-DD HH:mm:ss").locale("fa").format("YYYY/MM/DD")}
          </time>
        </div>
        <div className={styles.cardHeaderInfoComments}>
          <CommentsIcon />
          <span>{commentsCount}</span>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
