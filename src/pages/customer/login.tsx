import React, { useState } from "react";
import PhoneVerification from "@/components/auth/PhoneVerification";
import PetList from "@/components/pets/PetList";

interface LoginPageProps {
  isLoading?: boolean;
  error?: string;
  isAuthenticated?: boolean;
}

const LoginPage = ({
  isLoading = false,
  error = "",
  isAuthenticated = false,
}: LoginPageProps) => {
  const [showPetList, setShowPetList] = useState(isAuthenticated);

  const handleVerificationComplete = (phoneNumber: string) => {
    setShowPetList(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Doggy Daycare Portal
            </h1>
            <p className="text-lg text-gray-600">
              Welcome to your pet's home away from home
            </p>
          </div>

          {!showPetList ? (
            <div className="flex justify-center items-center min-h-[600px]">
              <PhoneVerification
                onVerificationComplete={handleVerificationComplete}
                isLoading={isLoading}
                error={error}
              />
            </div>
          ) : (
            <PetList
              onPetSelect={(petId) => {
                console.log(`Selected pet: ${petId}`);
              }}
            />
          )}

          <div className="fixed bottom-4 right-4 opacity-20">
            <div className="text-6xl transform rotate-45">🐾</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
