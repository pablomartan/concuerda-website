declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

export interface IService {
    name: string;
    url: string;
    pic: string;
}

export interface ICustomization {
    title: string;
    subtitle: string;
    url: string;
}
