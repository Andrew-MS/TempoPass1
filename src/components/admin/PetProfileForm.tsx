import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export function PetProfileForm() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="petName">Pet Name</Label>
            <Input id="petName" placeholder="Enter pet name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="breed">Breed</Label>
            <Input id="breed" placeholder="Enter breed" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" placeholder="Enter age" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Special Notes</Label>
            <Textarea
              id="notes"
              placeholder="Enter any special notes, medical conditions, etc."
            />
          </div>
        </Card>

        <Card className="p-4 space-y-4">
          <div className="space-y-2">
            <Label>Pet Photo</Label>
            <div className="border-2 border-dashed rounded-lg p-4 text-center">
              <div className="space-y-2">
                <div className="mx-auto w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
                  🐾
                </div>
                <Button variant="outline" className="w-full">
                  Upload Photo
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="owner">Owner</Label>
            <Input id="owner" placeholder="Select owner" />
          </div>
        </Card>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save Pet Profile</Button>
      </div>
    </div>
  );
}
