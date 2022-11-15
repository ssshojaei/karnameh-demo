import Link from "next/link";
import React from "react";
import CardHeader, { ICardHeader } from "./CardHeader";
import styles from "./styles.module.scss";

interface IAsk extends ICardHeader {
  body: string;
  id: number;
}

const Ask = ({ id, body, title, date, avatar, commentsCount }: IAsk) => {
  return (
    <article className={styles.card}>
      <CardHeader title={title} avatar={avatar} date={date} commentsCount={commentsCount} />
      <div className={styles.cardBody} dangerouslySetInnerHTML={{ __html: body }} />
      <div className={styles.cardActions}>
        <Link className="btn btnBordered btnBorderedGreen" href={`/asks/${id}`}>
          مشاهده‌ی جزئیات
        </Link>
      </div>
    </article>
  );
};

export default Ask;
