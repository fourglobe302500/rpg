import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

export const selectPlanesIds = createSelector(
  (state: AppState) => state.planes,
  (planes) => planes.map((plane) => plane.id),
);
