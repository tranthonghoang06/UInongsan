export type CropHealth = 'good' | 'warning' | 'critical';
export type CropLotStatus = 'growing' | 'ready-harvest' | 'harvested';

export interface CropLot {
  id: string;
  cropName: string;
  area: number;
  plantedDate: string;
  estimatedHarvestDate: string;
  status: CropLotStatus;
  health: CropHealth;
}
