export type PurchaseRequestStatus =
  | 'new'
  | 'pending-response'
  | 'negotiating'
  | 'accepted'
  | 'rejected'
  | 'cancelled';

export interface PurchaseRequest {
  id: string;
  productName: string;
  quantity: number;
  unit: string;
  proposedPrice: number;
  status: PurchaseRequestStatus;
  createdDate: string;
}
