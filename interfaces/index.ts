export interface Plane {
  scenes: Scene[];
  name: string;
  id: number;
  size: Vector2;
}

export interface Scene {
  layers: Layer[];
  name: string;
  id: number;
  size: Vector2;
  position: Vector2;
}

export interface Layer {
  tileset: string;
  zIndex: number;
  id: number;
  tiles: Tile[][];
  size: Vector2;
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
