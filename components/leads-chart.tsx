"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { leadsByMonth } from "@/lib/mock-data"

export default function LeadsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={leadsByMonth}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => [`${value} leads`, "Leads"]} labelFormatter={(label) => `Mês: ${label}`} />
        <Bar dataKey="leads" fill="#3B82F6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
