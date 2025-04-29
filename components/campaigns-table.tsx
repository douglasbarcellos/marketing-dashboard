"use client"

import { useState } from "react"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

// Dados simulados para a tabela de campanhas
const campaigns = [
  {
    id: 1,
    name: "Facebook Ads",
    leads: 350,
    conversion: 7.5,
    cpl: 8.1,
    budget: 2835,
    status: "Ativo",
  },
  {
    id: 2,
    name: "Google Ads",
    leads: 550,
    conversion: 9.2,
    cpl: 6.95,
    budget: 3822.5,
    status: "Ativo",
  },
  {
    id: 3,
    name: "Instagram Ads",
    leads: 200,
    conversion: 6.1,
    cpl: 7.85,
    budget: 1570,
    status: "Pausado",
  },
  {
    id: 4,
    name: "LinkedIn Ads",
    leads: 120,
    conversion: 4.8,
    cpl: 12.5,
    budget: 1500,
    status: "Ativo",
  },
  {
    id: 5,
    name: "TikTok Ads",
    leads: 180,
    conversion: 5.2,
    cpl: 9.3,
    budget: 1674,
    status: "Pausado",
  },
]

export default function CampaignsTable() {
  const [sortField, setSortField] = useState("leads")
  const [sortDirection, setSortDirection] = useState("desc")

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const sortedCampaigns = [...campaigns].sort((a, b) => {
    // @ts-ignore - Ignorando o erro de tipagem para simplificar
    const aValue = a[sortField]
    // @ts-ignore - Ignorando o erro de tipagem para simplificar
    const bValue = b[sortField]

    if (sortDirection === "asc") {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6 pb-3">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Campanhas Ativas</h2>
        <p className="text-sm text-gray-500">Acompanhe o desempenho das suas campanhas de marketing digital</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Campanha
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("leads")}
              >
                <div className="flex items-center">
                  Leads
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("conversion")}
              >
                <div className="flex items-center">
                  Conversão
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("cpl")}
              >
                <div className="flex items-center">
                  CPL
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("budget")}
              >
                <div className="flex items-center">
                  Orçamento
                  <ArrowUpDown className="ml-1 h-4 w-4" />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedCampaigns.map((campaign) => (
              <tr key={campaign.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{campaign.leads}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{campaign.conversion}%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">R$ {campaign.cpl.toFixed(2)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">R$ {campaign.budget.toFixed(2)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      campaign.status === "Ativo" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
