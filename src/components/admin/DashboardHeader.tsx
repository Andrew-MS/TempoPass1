import { Button } from "@/components/ui/button";
import { LogOut, Settings, User } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Daycare Admin</h1>
          <Button variant="ghost" size="sm" className="ml-4">
            <User className="h-4 w-4 mr-2" /> Admin
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
