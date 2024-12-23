import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PetProfileForm } from "./PetProfileForm";
import { OwnerDetailsForm } from "./OwnerDetailsForm";
import { PassPackageManager } from "./PassPackageManager";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function RecordsManager() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search records..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Record
        </Button>
      </div>

      <Tabs defaultValue="pets" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="pets">Pets</TabsTrigger>
          <TabsTrigger value="owners">Owners</TabsTrigger>
          <TabsTrigger value="passes">Passes</TabsTrigger>
        </TabsList>

        <TabsContent value="pets">
          <PetProfileForm />
        </TabsContent>

        <TabsContent value="owners">
          <OwnerDetailsForm />
        </TabsContent>

        <TabsContent value="passes">
          <PassPackageManager />
        </TabsContent>
      </Tabs>
    </Card>
  );
}
