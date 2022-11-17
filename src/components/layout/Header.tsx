import Modal from "components/Modal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PlusIcon, TriangleIcon } from "../icons";
import styles from "./styles.module.scss";

type IHeader = {
  title: string;
  isOpen: boolean;
  handleToggle: () => void;
};

const Header = ({ title, isOpen, handleToggle }: IHeader) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={handleToggle} />
      <header className={styles.header}>
        <div className="container flex items-center">
          <div className={styles.right}>
            <Link href="/">
              <h1 className={styles.title}>{title}</h1>
            </Link>
          </div>
          <div className={styles.left}>
            <button onClick={handleToggle} className="btn btnGreen">
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
    </>
  );
};

export default Header;
