export interface IErrorModel {
  title?: string;
  errorCode?: string;
  message?: string;
  innerHTML?: any;
  closeBtn?: string;
}

export interface IConfirmModel {
  title?: string;
  message?: string;
  innerHTML?: any;
  acceptBtn?: string;
  closeBtn?: string;
}
