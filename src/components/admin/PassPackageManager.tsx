import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export function PassPackageManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Pass Packages</h3>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Package
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Basic", "Standard", "Premium"].map((tier) => (
          <Card key={tier} className="p-4 space-y-4">
            <div className="space-y-2">
              <Label>Package Name</Label>
              <Input defaultValue={`${tier} Package`} />
            </div>

            <div className="space-y-2">
              <Label>Number of Visits</Label>
              <Input
                type="number"
                defaultValue={
                  tier === "Basic" ? 5 : tier === "Standard" ? 10 : 20
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Price ($)</Label>
              <Input
                type="number"
                defaultValue={
                  tier === "Basic" ? 100 : tier === "Standard" ? 180 : 320
                }
              />
            </div>

            <div className="pt-4 flex space-x-2">
              <Button variant="outline" className="flex-1">
                Edit
              </Button>
              <Button variant="destructive" className="flex-1">
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
