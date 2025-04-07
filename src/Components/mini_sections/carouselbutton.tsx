import React from "react";
import leftarrow from "../../../public/assets/icons/left_arrow_blc.png";
import rightarrow from "../../../public/assets/icons/right_arrow_blc.png";

interface ButtonGroupProps {
  next?: () => void;
  previous?: () => void;
}

const CustomButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => {
  return (
    <div style={styles.container}>
      <button onClick={() => previous?.()} style={{ ...styles.button, left: 0 }}>
        <img src={leftarrow} alt="left arrow" style={styles.image} />
      </button>
      <button onClick={() => next?.()} style={{ ...styles.button, right: 0 }}>
        <img src={rightarrow} alt="right arrow" style={styles.image} />
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "absolute",
    top: "45%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    transform: "translateY(-40%)",
    pointerEvents: "none",
  },
  button: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "50%",
    width: "30px",
    margin: "0 10px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    pointerEvents: "all",
    position: "absolute",
    padding:"0"
  },
  image: {
    width: "25px",
    height: "25px",
  },
};

export default CustomButtonGroup;
