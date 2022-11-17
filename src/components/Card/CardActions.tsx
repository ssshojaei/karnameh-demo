import React from "react";
import { ICardTypes } from "./cardTypes";
import { SadIcon, SmileIcon } from "components/icons";
import Link from "next/link";
import styles from "./styles.module.scss";

type ICardActions = { type?: ICardTypes; props: any };

const CardActions = ({ type, props }: ICardActions) => {
  if (type === "question") {
    return (
      <div className={styles.cardActions}>
        <Link className="btn btnBordered btnBorderedGreen" href={`/asks/${props.id}`}>
          مشاهده‌ی جزئیات
        </Link>
      </div>
    );
  } else if (type === "answer") {
    return (
      <div className={`flex gap-2 ${styles.cardActions}`}>
        <button
          onClick={props.likeHandler}
          className="btn btnBordered border-gray-300 py-2 px-3 text-sm text-green hover:bg-green hover:text-white"
        >
          <SmileIcon />
          <span>پاسخ خوب بود</span>
        </button>
        <button
          onClick={props.dislikeHandler}
          className="btn btnBordered border-gray-300 py-2 px-3 text-sm text-red-500 hover:bg-red-500 hover:text-white"
        >
          <SadIcon />
          <span>پاسخ خوب نبود</span>
        </button>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CardActions;
