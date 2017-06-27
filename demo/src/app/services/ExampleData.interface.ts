export interface IMatrix {
  type: string;
  typeValue: string;
  value?: {
    key: string,
    value: {
      value: number,
      name: string
    }
  }[];
  data?: IMatrix[]
}
