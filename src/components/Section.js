import React from "react";

const Section = ({ dispatch }) => {
  return (
    <main style={styles.section}>
      <h2>Welcome to the Section</h2>
          <p>This is the main content area.</p>
          <button style={styles.button} onClick={() => dispatch({ type: "INCREMENT" })}>Add to Cart</button>
          <button style={styles.buttonRemove} onClick={() => dispatch({ type: "DECREMENT" })}>Remove</button>
          <button style={styles.buttonReset} onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </main>
  );
};

const styles = {
  section: {
    marginLeft: "220px", // To avoid overlap with Sidebar
    padding: "20px",
    },
    button: {
        backgroundColor: "#28a745",
        color: "white",
        padding: "10px 15px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        borderRadius: "5px",
        marginRight: "10px",
    },
    buttonRemove: {
        backgroundColor: "red",
        color: "white",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        borderRadius: "5px",
        marginRight: "10px",
    },
    buttonReset: {
        backgroundColor: "gray",
        color: "white",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        borderRadius: "5px",
    }

};

export default Section;
