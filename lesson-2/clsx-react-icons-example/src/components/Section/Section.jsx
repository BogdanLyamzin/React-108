import styles from "./Section.module.css";

// console.log(styles);

const Section = ({ children, title }) => {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
