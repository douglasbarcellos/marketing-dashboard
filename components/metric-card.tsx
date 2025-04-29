import { Users, Percent, DollarSign, TrendingUp, Activity } from "lucide-react"

interface MetricCardProps {
  title: string
  value: number
  format: "number" | "percent" | "currency"
  icon: string
  color: string
}

export default function MetricCard({ title, value, format, icon, color }: MetricCardProps) {
  const formatValue = () => {
    switch (format) {
      case "number":
        return value.toLocaleString("pt-BR")
      case "percent":
        return `${value}%`
      case "currency":
        return `R$ ${value.toFixed(2)}`
      default:
        return value
    }
  }

  const getIcon = () => {
    switch (icon) {
      case "users":
        return <Users className="h-6 w-6" />
      case "percent":
        return <Percent className="h-6 w-6" />
      case "dollar-sign":
        return <DollarSign className="h-6 w-6" />
      case "trending-up":
        return <TrendingUp className="h-6 w-6" />
      default:
        return <Activity className="h-6 w-6" />
    }
  }

  const getColorClass = () => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-600"
      case "green":
        return "bg-green-100 text-green-600"
      case "purple":
        return "bg-purple-100 text-purple-600"
      case "orange":
        return "bg-orange-100 text-orange-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold mt-2">{formatValue()}</p>
        </div>
        <div className={`p-3 rounded-full ${getColorClass()}`}>{getIcon()}</div>
      </div>
      <div className="mt-4 flex items-center text-sm">
        <div className="flex items-center text-green-500">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span>4.5%</span>
        </div>
        <span className="text-gray-500 ml-2">vs mês anterior</span>
      </div>
    </div>
  )
}
