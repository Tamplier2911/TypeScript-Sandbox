import axios, { AxiosResponse, AxiosPromise } from "axios";
import { DataObject, HasId } from "./typesAndInterfaces";

export class Fetch<T extends HasId> {
  private rootUrl: string;

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl;
  }

  async fetch(id: number): Promise<AxiosResponse> {
    try {
      const res: AxiosResponse = await axios({
        method: "GET",
        url: `${this.rootUrl}/${id}`
      });
      console.log(res.data, "GET");
      //   this.set(res.data);
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }

  async save(dataObject: T): Promise<AxiosResponse> {
    const { id } = dataObject;
    try {
      const res: AxiosResponse = await axios({
        method: "GET",
        url: `${this.rootUrl}`
      });
      const dataArr: T[] = res.data;
      console.log(dataArr, "GET");
      if (dataArr.find(obj => obj.id === id)) {
        const res: AxiosResponse = await axios({
          method: "PATCH",
          url: `${this.rootUrl}/${id}`,
          data: dataObject
        });
        console.log(res.data, "PATCH");
        return res.data;
      } else {
        const res: AxiosResponse = await axios({
          method: "POST",
          url: `${this.rootUrl}`,
          data: dataObject
        });
        console.log(res.data, "POST");
        return res.data;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

// Option #1 pass properties with data objec and id that requrired for fetch to work
// fetch: new Fetch(this.data, this.data.id)

// Option #2 expect argumenents that satisfy interfaces Serialize and Deserialize
// fetch: new Fetch(id: number, serialize: Serializable):void;
// interface Serializable{} - convert data from object into some json format
// interface Deserializable{} - convert data from json to an object

// Option #3 fetch is a generic class to customize the type of data coming into save
// fetch: new Fetch<T>() => fetch.save(id: number, data: T): AxiosResponse<T>
