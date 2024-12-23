import { DashboardHeader } from "@/components/admin/DashboardHeader";
import { RecordsManager } from "@/components/admin/RecordsManager";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-8">
        <RecordsManager />
      </main>
    </div>
  );
}
