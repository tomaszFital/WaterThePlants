export interface Plant {
  id?: string,
  name: string,
  type: "outside" | "inside",
  description: string,
  lastWatered: string,
  waterDays: number,
  user: string,
}
