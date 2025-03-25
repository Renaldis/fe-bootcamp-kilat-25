import { useQuery } from "@tanstack/react-query";
import { getGuests } from "@/services/api";

export function useTotalGuests() {
  return useQuery({
    queryKey: ["guestsPresents"],
    queryFn: () => getGuests(),
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // staleTime: 1000 * 60 * 5,
    // retry: 2,
  });
}
