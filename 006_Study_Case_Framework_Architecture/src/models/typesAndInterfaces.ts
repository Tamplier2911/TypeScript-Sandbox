import { AxiosResponse } from "axios";

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

export interface Attributes<T> {
  // data: T;
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(dataObject: T): void;
}

export interface Fetch<T> {
  // export interface Fetch<T extends HasId> {
  rootUrl: string;
  fetch(id: number): Promise<AxiosResponse>;
  save(dataObject: T): Promise<AxiosResponse>;
}

export interface Events {
  on(eventName: string, cb: Callback): void;
  trigger(eventName: string): void;
}
