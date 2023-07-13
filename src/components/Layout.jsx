import React from "react";

const Layout = (props) => {
  const styles = {
    container: {
      backgroundColor: "#C81534",
      padding: "20px",
    },
    title: {
      fontSize: "100px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Layout Komponenta</h1>
      {props.children}
    </div>
  );
};

export default Layout;
