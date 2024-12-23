import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface PhoneVerificationProps {
  onVerificationComplete?: (phoneNumber: string) => void;
  initialStep?: "phone" | "code";
  defaultPhone?: string;
  isLoading?: boolean;
  error?: string;
}

const PhoneVerification = ({
  onVerificationComplete = () => {},
  initialStep = "phone",
  defaultPhone = "",
  isLoading = false,
  error = "",
}: PhoneVerificationProps) => {
  const [step, setStep] = useState<"phone" | "code">(initialStep);
  const [phoneNumber, setPhoneNumber] = useState(defaultPhone);
  const [verificationCode, setVerificationCode] = useState("");
  const [localError, setLocalError] = useState(error);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length < 10) {
      setLocalError("Please enter a valid phone number");
      return;
    }
    setLocalError("");
    setStep("code");
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode.length !== 6) {
      setLocalError("Please enter a valid 6-digit code");
      return;
    }
    setLocalError("");
    onVerificationComplete(phoneNumber);
  };

  return (
    <Card className="w-[480px] bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-800">
          {step === "phone"
            ? "Enter Your Phone Number"
            : "Enter Verification Code"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {(localError || error) && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{localError || error}</AlertDescription>
          </Alert>
        )}

        {step === "phone" ? (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="tel"
                placeholder="(555) 555-5555"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="text-lg"
                disabled={isLoading}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending Code..." : "Send Verification Code"}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleCodeSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter 6-digit code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={6}
                className="text-lg text-center tracking-widest"
                disabled={isLoading}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify Code"}
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={() => setStep("phone")}
              disabled={isLoading}
            >
              Back to Phone Number
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default PhoneVerification;
