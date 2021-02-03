import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { PlanePiece } from "../../components/PlanePiece";
import { addPlane } from "../../store/planeSlice";
import styles from "../../styles/styles.module.css";
import { selectPlanesIds } from "../../utils/selectors";

interface GameManagerProps {}

const GameManager: React.FC<GameManagerProps> = ({}) => {
  const [text, setText] = useState("");
  const planesIds = useSelector(selectPlanesIds());
  const dispatch = useDispatch();
  return (
    <>
      <Header
        mainText="game manager"
        links={[{ href: "/", label: "Main Page" }]}
      />
      <div
        style={{
          position: "absolute",
          top: "4rem",
          width: "100%",
          height: "4rem",
          display: "flex",
          padding: "1rem",
          boxSizing: "border-box",
          fontSize: "1.5rem",
        }}
      >
        <label
          htmlFor="enterPlaneName"
          className={styles.noselect}
          style={{
            marginLeft: ".5rem",
          }}
        >
          New Plane:
        </label>
        <input
          type="text"
          name="enterPlaneName"
          placeholder="Plane Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            const trimmed = text.trim();
            if (trimmed && e.key === "Enter") {
              dispatch(addPlane(trimmed));
              setText("");
            }
          }}
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            border: "0px",
            marginLeft: ".5rem",
            fontSize: "1.4rem",
            color: "black",
            outline: "none",
            overflow: "visible",
          }}
        />
        <IoIosAddCircleOutline
          style={{
            backgroundColor: "green",
            border: "0px",
            borderRadius: ".4rem",
            width: "2rem",
            height: "2rem",
            textAlign: "center",
            fontSize: "1.6rem",
            fontWeight: "normal",
            outline: "none",
            marginLeft: "auto",
            marginRight: ".5rem",
          }}
          onClick={() => {
            const trimmed = text.trim();
            if (trimmed) {
              dispatch(addPlane(trimmed));
              setText("");
            }
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8rem",
          width: "100%",
        }}
      >
        {planesIds.map((planeId) => (
          <PlanePiece planeId={planeId} key={planeId} />
        ))}
      </div>
    </>
  );
};

export default GameManager;
