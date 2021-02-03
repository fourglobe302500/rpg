import React from "react";
import { IoMdTrash } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";
import { AppState } from "../store";
import { deletePlane } from "../store/planeSlice";
import styles from "../styles/styles.module.css";

interface PlanePieceProps {
  planeId: number;
}
export const PlanePiece: React.FC<PlanePieceProps> = ({ planeId }) => {
  const plane = useSelector(
    (state: AppState) =>
      state.planes.filter((plane) => plane.id === planeId)[0],
  );
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "90%",
        margin: ".25rem auto",
        border: "2px solid black",
        marginBottom: "1rem",
        padding: ".75rem",
        borderRadius: ".5rem",
      }}
    >
      <div style={{ display: "flex" }}>
        <h2 className={styles.noselect}>
          Name: {plane.name} Id: {plane.id}
        </h2>
        <IoMdTrash
          data-tip="React-tooltip"
          style={{
            backgroundColor: "red",
            border: "0px",
            borderRadius: ".4rem",
            width: "1.6rem",
            height: "1.6rem",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: ".5rem",
          }}
          onClick={() => dispatch(deletePlane(planeId))}
        />
        <ReactTooltip
          backgroundColor="rgba(0,0,0,0)"
          border={false}
          place="top"
          type="warning"
          effect="float"
          className={styles.nopadding}
          offset={{ bottom: 10 }}
        >
          <div
            style={{
              backgroundColor: "darkgray",
              borderRadius: ".5rem",
              padding: ".5rem",
              color: "red",
              fontSize: "1.25rem",
              fontWeight: "bold",
              border: "1px solid black",
            }}
          >
            Delete
          </div>
        </ReactTooltip>
      </div>
      <div
        style={{
          border: "1px solid black",
          margin: ".25rem 2rem",
          padding: ".75rem",
        }}
      >
        <div>
          <h4 className={styles.noselect}>Scenes:</h4>
        </div>
        <div className={styles.flex}></div>
      </div>
    </div>
  );
};
