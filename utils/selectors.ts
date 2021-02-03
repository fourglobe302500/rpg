import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

export const selectPlanesIds = () =>
  createSelector(
    (state: AppState) => state.planes,
    (planes) => planes.map((plane) => plane.id),
  );
export const selectScenesId = (id: number) =>
  createSelector(
    (state: AppState) =>
      state.planes.filter((plane) => plane.id === id)[0].scenes,
    (scenes) => scenes.map((scene) => scene.id),
  );
