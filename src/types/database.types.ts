export interface Owner {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  address: string;
  created_at: string;
}

export interface Pet {
  id: string;
  owner_id: string;
  name: string;
  breed: string;
  age: number;
  photo_url: string;
  notes: string;
  created_at: string;
}

export interface PassPackage {
  id: string;
  name: string;
  visits: number;
  price: number;
  created_at: string;
}

export interface PetPass {
  id: string;
  pet_id: string;
  package_id: string;
  remaining_visits: number;
  purchase_date: string;
  expiry_date: string;
  created_at: string;
}

export interface CheckIn {
  id: string;
  pet_id: string;
  check_in_time: string;
  check_out_time: string;
  created_at: string;
}
