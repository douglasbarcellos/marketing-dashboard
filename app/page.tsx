import type { Metadata } from "next"
import DashboardHeader from "@/components/dashboard-header"
import MetricCards from "@/components/metric-cards"
import LeadsChart from "@/components/leads-chart"
import CplChart from "@/components/cpl-chart"
import CampaignsTable from "@/components/campaigns-table"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Dashboard de Marketing | Métricas e Campanhas",
  description: "Painel de controle para acompanhamento de métricas de marketing digital",
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 flex-grow">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard de Marketing</h1>

        {/* Métricas principais */}
        <MetricCards />

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <LeadsChart />
          <CplChart />
        </div>

        {/* Tabela de campanhas */}
        <CampaignsTable />
      </main>
      <Footer />
    </div>
  )
}
