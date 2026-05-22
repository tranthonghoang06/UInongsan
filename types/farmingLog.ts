export interface FarmingLog {
  id: string;
  date: string;
  activity: string;
  cropLot: string;
  description: string;
  images: string[];
}

export interface QRCodeRecord {
  qrCode: string;
  productId: string;
  productName: string;
  farmId: string;
  farmName: string;
  cropLotId: string;
  harvestId: string;
  harvestDate: string;
  status: string;
}
