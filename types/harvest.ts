export interface Harvest {
  id: string;
  lotId: string;
  cropName: string;
  quantity: number;
  unit: string;
  harvestDate: string;
  quality: 'excellent' | 'good' | 'fair';
}
