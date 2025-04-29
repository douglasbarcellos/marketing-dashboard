"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Dados simulados para o gráfico de leads
const leadsByMonth = [
  { month: "Jan", leads: 120, target: 100 },
  { month: "Fev", leads: 150, target: 120 },
  { month: "Mar", leads: 180, target: 140 },
  { month: "Abr", leads: 210, target: 160 },
  { month: "Mai", leads: 200, target: 180 },
  { month: "Jun", leads: 190, target: 200 },
]

export default function LeadsChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Leads por Mês</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={leadsByMonth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value, name) => {
                return [value, name === "leads" ? "Leads" : "Meta"]
              }}
            />
            <Legend />
            <Bar dataKey="leads" name="Leads" fill="#6366F1" radius={[4, 4, 0, 0]} />
            <Bar dataKey="target" name="Meta" fill="#E4E4E7" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
