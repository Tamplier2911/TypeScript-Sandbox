export type Callback = () => void;

export interface HasId {
  id?: number;
}

export interface EventObject {
  [key: string]: Callback[];
}

export interface DataObject {
  name?: string;
  age?: number;
  photo?: string;
  id?: number;
}
