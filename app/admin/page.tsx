"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/dashboard-header";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Aqui você verificaria se o usuário está autenticado
    // Se não estiver, redirecionaria para a página de login
    // const isAuthenticated = checkAuth();
    // if (!isAuthenticated) {
    //   router.push("/login");
    // }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Painel Administrativo</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <p>Bem-vindo ao painel administrativo!</p>
        </div>
      </main>
    </div>
  );
} 