export interface Metric {
  totalLeads: number
  conversionRate: number
  cpl: number
}

export interface MonthData {
  month: string
  leads?: number
  cpl?: number
}

export interface Campaign {
  name: string
  leads: number
  conversion: number
  cpl: number
  status: string
}

export const metrics: Metric = {
  totalLeads: 1234,
  conversionRate: 8.5,
  cpl: 7.25,
}

export const leadsByMonth: MonthData[] = [
  { month: "Jan", leads: 120 },
  { month: "Fev", leads: 150 },
  { month: "Mar", leads: 180 },
  { month: "Abr", leads: 210 },
  { month: "Mai", leads: 200 },
  { month: "Jun", leads: 190 },
]

export const cplByMonth: MonthData[] = [
  { month: "Jan", cpl: 8.2 },
  { month: "Fev", cpl: 7.9 },
  { month: "Mar", cpl: 7.5 },
  { month: "Abr", cpl: 7.0 },
  { month: "Mai", cpl: 6.8 },
  { month: "Jun", cpl: 7.2 },
]

export const campaigns: Campaign[] = [
  { name: "Facebook Ads", leads: 350, conversion: 7.5, cpl: 8.1, status: "Ativo" },
  { name: "Google Ads", leads: 550, conversion: 9.2, cpl: 6.95, status: "Ativo" },
  { name: "Instagram Ads", leads: 200, conversion: 6.1, cpl: 7.85, status: "Pausado" },
  { name: "LinkedIn Ads", leads: 134, conversion: 5.8, cpl: 9.2, status: "Ativo" },
]
