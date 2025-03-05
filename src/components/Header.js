import React from "react";

const Header = ({ cartCount }) => {
  return (
    <header style={styles.header}>
          <h1>My React App</h1>
          <div style={styles.cart}>
            <span style={styles.count}>{cartCount}</span>              
          </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#333",
    color: "white",
    padding: "15px",    
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    },
    cart: {
        fontSize: "20px",
        cursor: "pointer",
    },
    count: {
        background: "red",
        color: "white",
        borderRadius: "60%",
        padding: "5px 10px",
        marginLeft: "5px",
    }
};

export default Header;
