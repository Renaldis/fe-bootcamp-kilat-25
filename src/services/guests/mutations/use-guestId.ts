import { R_TOKEN } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";

export function useGuestById(guestId: number) {
  return useQuery({
    queryKey: ["getGuestById", guestId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/api/tamu/${guestId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(R_TOKEN)}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch guest data");
      }
      return response.json();
    },
    enabled: !!guestId,
  });
}
