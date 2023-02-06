export class product {
  id:                 number;
  brand:              null | string;
  name:               string;
  price:              string;
  price_sign:         PriceSign | null;
  currency:           Currency | null;
  image_link:         string;
  product_link:       string;
  website_link:       string;
  description:        null | string;
  rating:             number | null;
  category:           Category | null;
  product_type:       ProductType;
  tag_list:           string[];
  created_at:         Date;
  updated_at:         Date;
  product_api_url:    string;
  api_featured_image: string;
  product_colors:     ProductColor[];
}

export enum Category {
  BbCc = "bb_cc",
  Concealer = "concealer",
  Contour = "contour",
  Cream = "cream",
  Empty = "",
  Gel = "gel",
  Highlighter = "highlighter",
  LipGloss = "lip_gloss",
  LipStain = "lip_stain",
  Lipstick = "lipstick",
  Liquid = "liquid",
  Mineral = "mineral",
  Palette = "palette",
  Pencil = "pencil",
  Powder = "powder",
}

export enum Currency {
  CAD = "CAD",
  Gbp = "GBP",
  Usd = "USD",
}

export enum PriceSign {
  Empty = "$",
  PriceSign = "£",
}

export interface ProductColor {
  hex_value:   string;
  colour_name: null | string;
}

export enum ProductType {
  Blush = "blush",
  Bronzer = "bronzer",
  Eyebrow = "eyebrow",
  Eyeliner = "eyeliner",
  Eyeshadow = "eyeshadow",
  Foundation = "foundation",
  LipLiner = "lip_liner",
  Lipstick = "lipstick",
  Mascara = "mascara",
  NailPolish = "nail_polish",
}
