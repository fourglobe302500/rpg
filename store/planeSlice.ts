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
      },
    ],
    deletePlane: (state, action: PayloadAction<number>) =>
      state.filter((plane) => plane.id !== action.payload),
  },
});

export const { addPlane, deletePlane } = planeSlice.actions;
export default planeSlice.reducer;
