import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plane } from "../interfaces";

const initialState: Plane[] = [];

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
        size: { x: 0, y: 0 },
      },
    ],
  },
});

export const { addPlane } = planeSlice.actions;
export default planeSlice.reducer;
