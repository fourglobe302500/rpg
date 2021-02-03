import React from "react";
import { IoIosLock, IoIosUnlock, IoMdTrash } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { deletePlane, togglePlaneLockState } from "../store/planeSlice";
import styles from "../styles/styles.module.css";
import { selectScenesId } from "../utils/selectors";
import { ScenePiece } from "./ScenePiece";

interface PlanePieceProps {
  planeId: number;
}

export const PlanePiece: React.FC<PlanePieceProps> = ({ planeId }) => {
  const plane = useSelector((state: AppState) =>
    state.planes.find((plane) => plane.id === planeId),
  );
  const dispatch = useDispatch();
  const scenesIds = useSelector(selectScenesId(planeId));
  return !plane ? null : (
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
        {plane.locked ? (
          <IoIosLock onClick={() => dispatch(togglePlaneLockState(planeId))} />
        ) : (
          <IoIosUnlock
            onClick={() => dispatch(togglePlaneLockState(planeId))}
          />
        )}
        {!plane.locked ? (
          <IoMdTrash
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
        ) : null}
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
        <div className={styles.flex}>
          {scenesIds.map((sceneId) => (
            <ScenePiece planeId={planeId} sceneId={sceneId} />
          ))}
        </div>
      </div>
    </div>
  );
};
