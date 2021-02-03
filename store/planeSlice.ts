import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plane } from "../interfaces";

const initialState: Plane[] = [];

export type PlanesState = Plane[];

const nextIdArray = <T extends { id: number }>(arr: T[]) =>
  arr.reduce((maxid, item) => Math.max(maxid, item.id), -1) + 1;

const planeSlice = createSlice({
  name: "planes",
  initialState,
  reducers: {
    addPlane: (state, action: PayloadAction<string>) => [
      ...state,
      {
        name: action.payload,
        id: nextIdArray(state),
        scenes: [],
        locked: false,
      },
    ],
    deletePlane: (state, action: PayloadAction<number>) =>
      state.filter((plane) => plane.locked || plane.id !== action.payload),
    togglePlaneLockState: (state, action: PayloadAction<number>) =>
      state.map((plane) =>
        plane.id !== action.payload
          ? plane
          : { ...plane, locked: !plane.locked },
      ),
  },
});

export const {
  addPlane,
  deletePlane,
  togglePlaneLockState,
} = planeSlice.actions;
export default planeSlice.reducer;
