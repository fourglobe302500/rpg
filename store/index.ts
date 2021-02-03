import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { Plane } from "../interfaces";
import PlaneSlice from "./planeSlice";

let store: EnhancedStore<{ planes: Plane[] }> | undefined;

const initializeStore = (preloadedState?: { planes: Plane[] }) => {
  let _store =
    store ??
    configureStore({
      reducer: {
        planes: PlaneSlice,
      },
    });
  if (preloadedState && store) {
    _store = configureStore({
      preloadedState: { ..._store.getState(), ...preloadedState },
      reducer: {
        planes: PlaneSlice,
      },
    });
    store = undefined;
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;
  return _store;
};

export const useStore = (initialState?: { planes: Plane[] }) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};

export * from "./planeSlice";
