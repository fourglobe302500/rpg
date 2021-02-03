export interface Plane {
  scenes: Scene[];
  name: string;
  id: number;
  locked: boolean;
}

export interface Scene {
  layers: Layer[];
  name: string;
  id: number;
  size: Vector2;
  position: Vector2;
  locked: boolean;
}

export interface Layer {
  tileset: string;
  zIndex: number;
  id: number;
  tiles: Tile[][];
  size: Vector2;
  locked: boolean;
}

export interface Tile {
  position: Vector2;
  colides: boolean;
}

export interface Vector2<T = number> {
  x: T;
  y: T;
}
export interface Vector3<T = number> {
  x: T;
  y: T;
  z: T;
}
export interface Vector4<T = number> {
  x: T;
  y: T;
  z: T;
  w: T;
}

export interface LinkProp {
  href: string;
  label: string;
}
