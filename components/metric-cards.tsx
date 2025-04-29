import { TrendingUp, TrendingDown, Users, DollarSign, BarChart } from "lucide-react"

// Dados simulados para as métricas
const metrics = {
  totalLeads: 1234,
  conversionRate: 8.5,
  cpl: 7.25,
  roi: 320,
}

export default function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {/* Card de Total de Leads */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-gray-500">Total de Leads</h2>
          <div className="p-2 bg-green-100 rounded-full">
            <Users className="h-5 w-5 text-green-600" />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold text-gray-800">{metrics.totalLeads}</p>
          <div className="flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-xs font-medium">+12.5%</span>
          </div>
        </div>
      </div>

      {/* Card de Taxa de Conversão */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-gray-500">Taxa de Conversão</h2>
          <div className="p-2 bg-purple-100 rounded-full">
            <BarChart className="h-5 w-5 text-purple-600" />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold text-gray-800">{metrics.conversionRate}%</p>
          <div className="flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-xs font-medium">+2.1%</span>
          </div>
        </div>
      </div>

      {/* Card de Custo por Lead */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-gray-500">Custo por Lead</h2>
          <div className="p-2 bg-blue-100 rounded-full">
            <DollarSign className="h-5 w-5 text-blue-600" />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold text-gray-800">R$ {metrics.cpl}</p>
          <div className="flex items-center text-red-600">
            <TrendingDown className="h-4 w-4 mr-1" />
            <span className="text-xs font-medium">-3.2%</span>
          </div>
        </div>
      </div>

      {/* Card de ROI */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-gray-500">ROI</h2>
          <div className="p-2 bg-yellow-100 rounded-full">
            <DollarSign className="h-5 w-5 text-yellow-600" />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold text-gray-800">{metrics.roi}%</p>
          <div className="flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-xs font-medium">+5.3%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
