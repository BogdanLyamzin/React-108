import "./Section.css";

const styles = {
  title: {fontSize: "24px", marginBottom: "15px"}
}

const Section = ({ children, title }) => {
  return (
    <section className="section">
      {title && <h2 style={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
