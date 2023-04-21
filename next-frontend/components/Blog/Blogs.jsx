import React from "react";
import Image from "next/image";
import styles from "./Blog.module.css";

export const Blogs = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex justify-center items-center w-full h-auto pb-6 md:pb-12 ">
        <h2 className="pt-16 px-4 md:px-8 text-2xl md:text-3xl font-bold text-center text-ellipsis ">
          Nuestro blog{" "}
          <small className="mt-2 text-lg leading-8">
            {" "}
            Conocé más sobre nuestros últimos artículos del área
          </small>
        </h2>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.containerImage}>
            <Image
              className="shadow-2xl outline-offset-8 m-2 w-auto h-auto "
              src="/images/trabaja-con-nosotros.webp"
              width={500}
              height={350}
              alt="payhous"
            />
          </div>
          <div className={styles.containerInfo}>
            <h2 className={styles.containerTitles}>Nuestro primer blog</h2>
            <p className={styles.containerParagraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              iusto nostrum, quo quae ducimus molestiae similique esse ipsum
              fugit tempora eveniet temporibus! Esse illo error, eveniet
              veritatis unde a accusantium.
            </p>

            <div className={styles.containerButton}>
              <button className="rounded-full bg-yellow p-1 px-6 font-semibold text-base md:text-lg">
                Quieres saber mas
              </button>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.containerImage}>
            <Image
              className="shadow-2xl outline-offset-8 m-2 w-auto h-auto "
              src="/images/trabaja-con-nosotros.webp"
              width={500}
              height={350}
              alt="payhous"
            />
          </div>
          <div className={styles.containerInfo}>
            <h2 className={styles.containerTitles}>Nuestro primer blog</h2>
            <p className={styles.containerParagraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              iusto nostrum, quo quae ducimus molestiae similique esse ipsum
              fugit tempora eveniet temporibus! Esse illo error, eveniet
              veritatis unde a accusantium.
            </p>

            <div className={styles.containerButton}>
              <button className="rounded-full bg-yellow p-1 px-6 font-semibold text-base md:text-lg">
                Quieres saber mas
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.containerImage}>
            <Image
              className="shadow-2xl outline-offset-8 m-2 w-auto h-auto "
              src="/images/trabaja-con-nosotros.webp"
              width={500}
              height={350}
              alt="payhous"
            />
          </div>
          <div className={styles.containerInfo}>
            <h2 className={styles.containerTitles}>Nuestro primer blog</h2>
            <p className={styles.containerParagraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              iusto nostrum, quo quae ducimus molestiae similique esse ipsum
              fugit tempora eveniet temporibus! Esse illo error, eveniet
              veritatis unde a accusantium.
            </p>

            <div className={styles.containerButton}>
              <button className="rounded-full bg-yellow p-1 px-6 font-semibold text-base md:text-lg">
                Quieres saber mas
              </button>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.containerImage}>
            <Image
              className="shadow-2xl outline-offset-8 m-2 w-auto h-auto "
              src="/images/trabaja-con-nosotros.webp"
              width={500}
              height={350}
              alt="payhous"
            />
          </div>
          <div className={styles.containerInfo}>
            <h2 className={styles.containerTitles}>Nuestro primer blog</h2>
            <p className={styles.containerParagraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              iusto nostrum, quo quae ducimus molestiae similique esse ipsum
              fugit tempora eveniet temporibus! Esse illo error, eveniet
              veritatis unde a accusantium.
            </p>

            <div className={styles.containerButton}>
              <button className="rounded-full bg-yellow p-1 px-6 font-semibold text-base md:text-lg">
                Quieres saber mas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
