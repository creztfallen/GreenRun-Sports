import { Role } from "@prisma/client";

export interface User {
    id: number;
    role: Role;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    username: string;
    address: string;
    gender: string;
    birth_date: string;
    country_id: string;
    city: string;
    category: string;
    document_id: string;
    user_state: string;
}
