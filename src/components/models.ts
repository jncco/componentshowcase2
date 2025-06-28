export interface Link {
    type: 'reference' | 'custom';
    newTab?: boolean;
    title: string;
    reference?: {
      relationTo: 'pages';
      value: {
        id: number;
        title: string;
        slug: string;
      };
    };
    externalReference?: {
      relationTo: 'externalUrl';
      value: {
        id: number;
        target: string;
      };
    };
  }
  export interface FieldLink {
    id: string;
    link: Link;
  }
  
  export interface processedLink {
    target: string;
    ref: string;
    type: 'custom' | 'reference';
    title: string;
  }

  
export interface ImageModel {
    id: number;
    alt: string;
    updatedAt: string;
    createdAt: string;
    url: string;
    thumbnailURL: string | null;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
  }
  
  export interface FieldImageModel {
    id: string;
    Imagen: ImageModel;
  }
  
  export interface processedImage {
    id: number;
    alt: string;
    url: string;
    thumbnailURL: string | null;
    width: number;
    height: number;
  }
  
  export interface processedIcon {
    id: number;
    url: string;
    width: number;
    height: number;
  }
  
  export interface CMSImageModel extends FieldImageModel {
    blockType: 'imageBlock';
    blockName: string;
  }
  

export interface M003_CTA_DS01v001Props extends BaseModelProps {
  textList: MaxItems<string, 4>;
  linkList: MaxItems<processedLink, 1>;
  imageList: MaxItems<processedImage, 2>;
  iconList: MaxItems<processedIcon, 1>;
  cssList: MaxItems<string, 1>;
}

export type MaxItems<T, N extends number> = [T, ...T[]] & { length: N };

export interface BaseModelProps {
  textList?: string[];
  imageList?: processedImage[];
  cssList?: string[];
  linkList?: processedLink[];
  iconList?: processedIcon[];
}

export interface CMSBaseModelProps {
  blockType: string;
  blockName: string;
  id: string;
  textList?: string[];
  imageList?: FieldImageModel[];
  cssList?: string[];
  linkList?: FieldLink[];
  iconList?: FieldImageModel[];
}
