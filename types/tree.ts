export interface Tree {
  id: string;
  farmId: string;
  name: string;
  variety: string;
  quantity: number;
  plantedDate: string;
  health: 'good' | 'warning' | 'critical';
}
