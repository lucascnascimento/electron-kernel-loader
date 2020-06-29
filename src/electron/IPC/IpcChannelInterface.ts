import { IpcMainEvent } from "electron";

export interface IpcChannelInterface {
  getName(): string;

  handle(event: IpcMainEvent, request: any): void;
}
