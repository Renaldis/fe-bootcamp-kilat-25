import { apiResolver } from "@/utils/api";
import axios from "./axios";
import { Response, SignInDTO, SignUpDTO } from "@/types/user";

import { CreateTamuDto, Tamu, UpdateTamuDto } from "@/types/tamu";
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

const deleteGuest = async (guestId: string) => {
  return axios.patch(`/tamu/${guestId}`);
};

const createGuests = (payload: CreateTamuDto) => {
  return apiResolver<Response<CreateTamuDto>>(() =>
    axios.post("/tamu", payload)
  );
};

const updateGuest = (payload: UpdateTamuDto) => {
  return apiResolver<Response<UpdateTamuDto>>(() =>
    axios.put(`/tamu/${payload.id}`, payload)
  );
};

export { getGuests, createGuests, deleteGuest, updateGuest };
