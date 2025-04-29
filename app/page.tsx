import Header from "@/components/header"
import Footer from "@/components/footer"
import MetricCard from "@/components/metric-card"
import CampaignsTable from "@/components/campaigns-table"
import LeadsChart from "@/components/leads-chart"
import CplChart from "@/components/cpl-chart"
import { metrics, campaigns } from "@/lib/mock-data"

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Métricas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard title="Total de Leads" value={metrics.totalLeads} format="number" icon="users" color="blue" />
          <MetricCard
            title="Taxa de Conversão"
            value={metrics.conversionRate}
            format="percent"
            icon="percent"
            color="green"
          />
          <MetricCard
            title="Custo por Lead (CPL)"
            value={metrics.cpl}
            format="currency"
            icon="dollar-sign"
            color="purple"
          />
        </div>

        {/* Gráficos de Desempenho */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Leads por Mês</h2>
            <div className="h-80">
              <LeadsChart />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">CPL ao Longo do Tempo</h2>
            <div className="h-80">
              <CplChart />
            </div>
          </div>
        </div>

        {/* Tabela de Campanhas */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold mb-4">Campanhas Ativas</h2>
          <CampaignsTable campaigns={campaigns} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
