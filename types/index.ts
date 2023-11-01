import { ReadStream } from "fs";

export type File = {
  filename: string;
  mimetype: string;
  encoding: string;
  stream?: ReadStream;
};

export type UploadedFileResponse = {
  filename: string;
  mimetype: string;
  encoding: string;
  url: string;
};

export interface IUploader {
  singleFileUploadResolver: (
    parent,
    { file }: { file: Promise<File> }
  ) => Promise<UploadedFileResponse>;
}
export type AdminExtendedQuery = {
  name: string;
};
export type CostumerExtendedQuery = {
  restaurant: string;
  category: string[] | string;
};
export type ExtendedQuery = CostumerExtendedQuery & AdminExtendedQuery;
