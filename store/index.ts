import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
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
  const store = initializeStore(initialState);
  return store;
};

let __store = useStore();
export type AppState = ReturnType<typeof __store.getState>;
export type AppDIspatch = ReturnType<typeof __store.dispatch>;
