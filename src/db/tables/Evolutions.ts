export interface Evolutions {
  id: number
  applyAt: Date
  applyScript: string
  revertScript: string
  state: 'applied' | 'rejected'
  lastProblem: string
}
