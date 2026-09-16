export type FurnitureCategoryId =
  | 'all'
  | 'kitchen'
  | 'wardrobe'
  | 'living'
  | 'bedroom'
  | 'office'
  | 'dining';

export type PriceUnit = 'pogon_metr' | 'dona' | 'to‘plam' | 'kvadrat_metr';

export interface FurnitureItem {
  id: string;
  title: string;
  category: string;
  categoryId: FurnitureCategoryId;
  price: number; // UZS
  priceUnit: PriceUnit;
  oldPrice?: number;
  installmentMonths?: number;
  installmentPrice?: number; // per month UZS
  badge?: string;
  badgeType?: 'hot' | 'sale' | 'new' | 'rec';
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  description: string;
  materials: string[];
  dimensions?: string;
  productionTime: string;
  warranty: string;
  features: string[];
}

export interface CalculatorState {
  category: 'kitchen' | 'wardrobe' | 'living' | 'tv_zone';
  meters: number;
  materialTier: 'standard' | 'premium' | 'luxury';
}
