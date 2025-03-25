export type Tamu = {
  id: number;
  name: string;
  no_hp: string;
  emaiL: string;
  status_hadir: boolean;
  createdAt: Date;
  updatedAt: Date;
  total: number;
};

export type CreateTamuDto = {
  name: string;
  no_hp: string;
  status_hadir?: boolean;
};

export type UpdateTamuDto = {
  id: number;
  name?: string;
  no_hp?: string;
  status_hadir?: boolean;
};

export interface TamuFilters {
  search?: string;
  startDate?: Date;
  endDate?: Date;
}
