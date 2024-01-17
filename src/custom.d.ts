declare module "*.mp4" {
  const videoSrc: string;
  export default videoSrc;
}

declare module "*.png" {
  const imgSrc: string;
  export default imgSrc;
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
  banner?: ImageBitmapSource;
}
