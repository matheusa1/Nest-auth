export type IErrorResponse = {
  statusCode: number;
  message: {
    property: string;
    message: string;
  }[];
  error: string;
};
