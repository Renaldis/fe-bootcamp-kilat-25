import { apiResolver } from "@/utils/api";
import axios from "./axios";
import { Response, SignInDTO, SignUpDTO } from "@/types/user";

import { CreateTamuDto, Tamu } from "@/types/tamu";
import { R_TOKEN } from "@/utils/constants";

type token = string;

export function signUp(payload: SignUpDTO) {
  return apiResolver<Response<token>>(() =>
    axios.post("/auth/signup", payload)
  );
}
export function signIn(payload: SignInDTO) {
  return apiResolver<Response<token>>(() =>
    axios.post("/auth/signin", payload)
  );
}

export function authorize() {
  return apiResolver<Response<token>>(() => axios.post("/auth/authorize"));
}

// Guests
const getGuests = () => {
  const token = localStorage.getItem(R_TOKEN);

  if (!token) {
    return Promise.reject(new Error("No token found"));
  }

  return apiResolver<Response<Tamu[]>>(() =>
    axios.get("/tamu", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );
};

// const getNoteById = () => {};

const deleteGuest = async (guestId: string) => {
  return axios.patch(`/tamu/${guestId}`);
};

const createGuests = (payload: CreateTamuDto) => {
  return apiResolver<Response<CreateTamuDto>>(() =>
    axios.post("/tamu", payload)
  );
};

// get tamu
// export async function fetchGuests() {
//   const response = await fetch("http://localhost:3000/api/tamu", {
//     headers: { Authorization: "Bearer " + R_TOKEN },
//   });
//   if (!response.ok) {
//     throw new Error("Failed to fetch tamu");
//   }
//   return response.json();
// }
export { getGuests, createGuests, deleteGuest };
