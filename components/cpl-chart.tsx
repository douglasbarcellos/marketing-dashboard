"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { cplByMonth } from "@/lib/mock-data"

export default function CplChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={cplByMonth}
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
        <Tooltip formatter={(value) => [`R$ ${value.toFixed(2)}`, "CPL"]} labelFormatter={(label) => `Mês: ${label}`} />
        <Line type="monotone" dataKey="cpl" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
