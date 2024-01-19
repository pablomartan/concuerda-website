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
