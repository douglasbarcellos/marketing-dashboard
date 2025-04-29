"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Dados simulados para o gráfico de CPL
const cplByMonth = [
  { month: "Jan", cpl: 8.2, avgCpl: 7.5 },
  { month: "Fev", cpl: 7.9, avgCpl: 7.5 },
  { month: "Mar", cpl: 7.5, avgCpl: 7.5 },
  { month: "Abr", cpl: 7.0, avgCpl: 7.5 },
  { month: "Mai", cpl: 6.8, avgCpl: 7.5 },
  { month: "Jun", cpl: 7.2, avgCpl: 7.5 },
]

export default function CplChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">CPL ao Longo do Tempo</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={cplByMonth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => [`R$ ${value}`, "Custo por Lead"]} />
            <Legend />
            <Line
              type="monotone"
              dataKey="cpl"
              name="CPL"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="avgCpl"
              name="Média"
              stroke="#D1D5DB"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
