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
const getGuests = (
  page: number = 1,
  limit: number = 10,
  search: string = "",
  statusFilter?: boolean
) => {
  const token = localStorage.getItem(R_TOKEN);

  if (!token) {
    return Promise.reject(new Error("No token found"));
  }

  const params = new URLSearchParams();
  params.append("page", page.toString());
  params.append("limit", limit.toString());
  if (search) params.append("search", search);
  if (statusFilter !== undefined)
    params.append("status_hadir", statusFilter.toString());

  return apiResolver<Response<Tamu[]>>(() =>
    axios.get(`/tamu?${params.toString()}`, {
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
