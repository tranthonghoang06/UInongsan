export function findById<T extends { id: string }>(items: T[], id: string) {
  return items.find((item) => item.id === id);
}

export function filterByOrderId<T extends { orderId: string }>(items: T[], orderId: string) {
  return items.filter((item) => item.orderId === orderId);
}

export function createMockCrudService<T extends { id: string }>(items: T[]) {
  return {
    getAll: () => items,
    list: () => items,
    getById: (id: string) => items.find((item) => item.id === id),
    create: (payload: Omit<T, 'id'> & Partial<Pick<T, 'id'>>) => {
      const item = { ...payload, id: payload.id ?? `MOCK-${Date.now()}` } as T;
      items.push(item);
      return item;
    },
    update: (id: string, payload: Partial<T>) => {
      const index = items.findIndex((item) => item.id === id);
      if (index === -1) {
        return undefined;
      }
      items[index] = { ...items[index], ...payload };
      return items[index];
    },
    remove: (id: string) => {
      const index = items.findIndex((item) => item.id === id);
      if (index === -1) {
        return false;
      }
      items.splice(index, 1);
      return true;
    },
  };
}
