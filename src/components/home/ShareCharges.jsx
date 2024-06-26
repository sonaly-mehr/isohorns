import React from "react";
import styles from "@/styles/styles";
import Image from "next/image";
import { IoCheckboxSharp } from "react-icons//io5";
import gif from "../../assets/animation1.webp";

const ShareCharges = () => {
  return (
    <div
      className={`${styles.width} ${styles.padding} py-20 md:flex justify-between items-center`}
    >
      <div className="basis-1/2 mb-10 md:mb-0">
        <Image src={gif} alt="" className="" />
      </div>

      <div className="basis-1/2">
        <h4 className={styles.heading}>
          Share Charges to <br /> Discover Better Options
        </h4>
        <p className={`${styles.paragraph} md:w-4/5`}>
          We understand that managing medical bills can be a hassle. That's why
          we've created a simple and secure way for users to upload and manage
          their bills. With our Bill Upload feature, you can easily keep track
          of your medical expenses.
        </p>

        <ul className="mt-6 mb-10">
          <li className={styles.liItems}>
            <IoCheckboxSharp className="text-xl text-primary mr-2" /> Easy bill
            upload process
          </li>
          <li className={styles.liItems}>
            <IoCheckboxSharp className="text-xl text-primary mr-2" /> Secure
            storage of bills within the platform
          </li>
          <li className={styles.liItems}>
            <IoCheckboxSharp className="text-xl text-primary mr-2" /> Ability to
            view and manage bills from anywhere, anytime
          </li>
        </ul>

        <button className="text-[#252B61] text-xs md:text-sm font-semibold rounded-md border-2 border-solid border-[#3F3F3F] px-5 py-3">
          Share Your Bill
        </button>
      </div>
    </div>
  );
};

export default ShareCharges;
