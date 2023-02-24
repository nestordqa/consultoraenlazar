import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import styles from "./Benefits.module.css";

const BenefitCard = ({ benefit }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <Image
            alt={benefit.title + " image"}
            src={urlFor(benefit.mainImage).url()}
            width={90}
            height={90}
            className="rounded-[50%] flex self-center translate-y-2 translate-x-2 shadow-2xl"
          />
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.textBody}>{benefit.description}</p>
        </div>
      </div>
    </>
  );
};

export default BenefitCard;
