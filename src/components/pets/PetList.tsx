import React from "react";
import PetPass from "./PetPass";

interface Pet {
  id: string;
  name: string;
  photo: string;
  remainingVisits: number;
}

interface PetListProps {
  pets?: Pet[];
  onPetSelect?: (petId: string) => void;
}

const PetList = ({
  pets = [
    {
      id: "1",
      name: "Buddy",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=buddy",
      remainingVisits: 10,
    },
    {
      id: "2",
      name: "Luna",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=luna",
      remainingVisits: 5,
    },
    {
      id: "3",
      name: "Max",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=max",
      remainingVisits: 8,
    },
  ],
  onPetSelect = (petId: string) => console.log(`Pet ${petId} selected`),
}: PetListProps) => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Pets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {pets.map((pet) => (
          <div
            key={pet.id}
            onClick={() => onPetSelect(pet.id)}
            className="cursor-pointer transform hover:scale-105 transition-transform duration-200"
          >
            <PetPass
              petName={pet.name}
              petPhoto={pet.photo}
              remainingVisits={pet.remainingVisits}
            />
          </div>
        ))}
      </div>
      {pets.length === 0 && (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="text-6xl mb-4">🐾</div>
          <p className="text-xl text-gray-600">No pets registered yet</p>
        </div>
      )}
    </div>
  );
};

export default PetList;
