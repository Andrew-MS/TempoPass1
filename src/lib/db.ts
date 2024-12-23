import { supabase } from "./supabase";
import type {
  Owner,
  Pet,
  PassPackage,
  PetPass,
  CheckIn,
} from "@/types/database.types";

// Owners
export const createOwner = async (owner: Omit<Owner, "id" | "created_at">) => {
  const { data, error } = await supabase
    .from("owners")
    .insert(owner)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const getOwnerByPhone = async (phone: string) => {
  const { data, error } = await supabase
    .from("owners")
    .select("*")
    .eq("phone", phone)
    .single();
  if (error) throw error;
  return data;
};

// Pets
export const createPet = async (pet: Omit<Pet, "id" | "created_at">) => {
  const { data, error } = await supabase
    .from("pets")
    .insert(pet)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const getPetsByOwnerId = async (ownerId: string) => {
  const { data, error } = await supabase
    .from("pets")
    .select(
      `
      *,
      pet_passes (*)      
    `,
    )
    .eq("owner_id", ownerId);
  if (error) throw error;
  return data;
};

// Pass Packages
export const getPassPackages = async () => {
  const { data, error } = await supabase.from("pass_packages").select("*");
  if (error) throw error;
  return data;
};

export const createPassPackage = async (
  pkg: Omit<PassPackage, "id" | "created_at">,
) => {
  const { data, error } = await supabase
    .from("pass_packages")
    .insert(pkg)
    .select()
    .single();
  if (error) throw error;
  return data;
};

// Pet Passes
export const createPetPass = async (
  pass: Omit<PetPass, "id" | "created_at">,
) => {
  const { data, error } = await supabase
    .from("pet_passes")
    .insert(pass)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updatePetPassVisits = async (
  passId: string,
  remainingVisits: number,
) => {
  const { data, error } = await supabase
    .from("pet_passes")
    .update({ remaining_visits: remainingVisits })
    .eq("id", passId)
    .select()
    .single();
  if (error) throw error;
  return data;
};

// Check-ins
export const createCheckIn = async (
  checkIn: Omit<CheckIn, "id" | "created_at">,
) => {
  const { data, error } = await supabase
    .from("check_ins")
    .insert(checkIn)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateCheckOut = async (
  checkInId: string,
  checkOutTime: string,
) => {
  const { data, error } = await supabase
    .from("check_ins")
    .update({ check_out_time: checkOutTime })
    .eq("id", checkInId)
    .select()
    .single();
  if (error) throw error;
  return data;
};
