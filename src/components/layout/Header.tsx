import Image from "next/image";
import React from "react";
import { PlusIcon, TriangleIcon } from "../icons";
import styles from "./styles.module.scss";

type IHeader = {
  handleCreateAsk: () => void;
};

const Header = ({ handleCreateAsk }: IHeader) => {
  return (
    <header className={styles.header}>
      <div className="container flex items-center">
        <div className={styles.right}>
          <h1 className={styles.title}>لیست سوالات</h1>
        </div>
        <div className={styles.left}>
          <button onClick={handleCreateAsk} className="btn btnGreen">
            <PlusIcon />
            <span>سوال جدید</span>
          </button>
          <div className={styles.profile}>
            <Image src="/images/profile.jpg" alt="profile" height={44} width={44} />
            <span>زن زندگی آزادی</span>
            <div className="text-[#9CAEBB]">
              <TriangleIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
