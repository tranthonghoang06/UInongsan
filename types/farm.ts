export interface Farm {
  id: string;
  image: string;
  name: string;
  owner: string;
  region: string;
  area: number;
  crops: string[];
  totalProducts: number;
}

export interface FarmTree {
  id: string;
  farmId: string;
  name: string;
  variety: string;
  quantity: number;
  plantedDate: string;
  health: 'good' | 'warning' | 'critical';
}
