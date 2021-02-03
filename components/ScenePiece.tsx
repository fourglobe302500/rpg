import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store";

interface ScenePieceProps {
  planeId: number;
  sceneId: number;
}

export const ScenePiece: React.FC<ScenePieceProps> = ({ sceneId, planeId }) => {
  const scene = useSelector((state: AppState) =>
    state.planes
      .find((plane) => plane.id === planeId)
      ?.scenes.find((scene) => scene.id === sceneId),
  );
  return !scene ? null : (
    <p>{`Name: ${
      scene.name
    }, PlaneId: ${planeId}, SceneId: ${sceneId}, Locked: ${
      scene.locked
    }, Position: {x: ${scene.position.x}, y:${
      scene.position.y
    }}, Layers: ${scene.layers.toString()}, Size: {x:${scene.size.x}, y:${
      scene.size.y
    }}`}</p>
  );
};
