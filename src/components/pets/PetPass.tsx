import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

interface PetPassProps {
  petName?: string;
  petPhoto?: string;
  remainingVisits?: number;
  onAddToWallet?: () => void;
}

const PetPass = ({
  petName = "Buddy",
  petPhoto = "https://api.dicebear.com/7.x/avataaars/svg?seed=pet",
  remainingVisits = 10,
  onAddToWallet = () => console.log("Add to wallet clicked"),
}: PetPassProps) => {
  return (
    <Card className="w-[350px] h-[500px] bg-white hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <CardHeader className="relative h-64">
        <img
          src={petPhoto}
          alt={petName}
          className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">{petName}</h2>
          <Badge
            variant="secondary"
            className="text-lg px-4 py-2 bg-purple-100 text-purple-700"
          >
            {remainingVisits} visits
          </Badge>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-200 rounded-full" />
            <span className="text-gray-600">Valid for daycare visits</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-200 rounded-full" />
            <span className="text-gray-600">Pass active</span>
          </div>
        </div>

        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAddToWallet();
          }}
          variant="outline"
          className="w-full mt-4"
        >
          <Wallet className="mr-2 h-4 w-4" />
          Add to Wallet
        </Button>

        <div className="absolute bottom-4 right-4">
          <div className="w-8 h-8 opacity-20 rotate-45">🐾</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PetPass;
