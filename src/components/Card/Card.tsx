import React from "react";
import CardActions from "./CardActions";
import CardHeader, { ICardHeader } from "./CardHeader";
import { ICardTypes } from "./cardTypes";
import styles from "./styles.module.scss";

interface ICard extends ICardHeader {
  body: string;
  id: number;
  type: ICardTypes;
}

const Card = ({ type = "question", id, body, title, date, avatar, props }: ICard) => {
  const { commentsCount = 0, like = 0, dislike = 0 } = props || {};

  return (
    <article className={styles.card}>
      <CardHeader
        title={title}
        avatar={avatar}
        date={date}
        type={type}
        props={{
          commentsCount,
          like,
          dislike,
        }}
      />
      <div className={styles.cardBody} dangerouslySetInnerHTML={{ __html: body }} />
      <CardActions type={type} props={id} />
    </article>
  );
};

export default Card;
