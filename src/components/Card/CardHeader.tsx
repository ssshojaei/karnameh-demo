import { CommentsIcon, SadIcon, SmileIcon } from "components/icons";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import moment from "jalali-moment";
import { ICardTypes } from "./cardTypes";

export interface ICardHeader {
  title: string;
  avatar: string;
  date: string;
  type: ICardTypes;
  props?: {
    commentsCount?: number;
    like?: number;
    dislike?: number;
  };
}

const renderInfo = ({
  type,
  props,
}: {
  type: ICardTypes;
  props?: { commentsCount?: number; like?: number; dislike?: number };
}) => {
  if (type === "question") {
    return (
      <div className={styles.cardHeaderInfoComments}>
        <CommentsIcon />
        <span>{props?.commentsCount}</span>
      </div>
    );
  } else if (type === "answer") {
    return (
      <div className={styles.cardHeaderInfoComments}>
        <div className={styles.cardHeaderInfoRate}>
          <div className="text-green">
            <SmileIcon />
          </div>
          <span>{props?.like}</span>
        </div>
        <div className={styles.cardHeaderInfoRate}>
          <div className="text-gray-light">
            <SadIcon />
          </div>
          <span>{props?.dislike}</span>
        </div>
      </div>
    );
  }
};

const CardHeader = ({ type, title, avatar, date, props }: ICardHeader) => {
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
        {renderInfo({ type, props })}
      </div>
    </div>
  );
};

export default CardHeader;
