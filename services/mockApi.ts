export function findById<T extends { id: string }>(items: T[], id: string) {
  return items.find((item) => item.id === id);
}

export function filterByOrderId<T extends { orderId: string }>(items: T[], orderId: string) {
  return items.filter((item) => item.orderId === orderId);
}
