export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type SmallProfile = Omit<DetailedProfile, 'height'>;

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, 'HEIGHT'>>;
type MySmallProfile = MyOmit<DetailedProfile, 'height'>;
