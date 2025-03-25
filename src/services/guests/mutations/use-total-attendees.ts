import { useQuery } from "@tanstack/react-query";
import { getGuests } from "@/services/api";

export function usePresentGuests() {
  return useQuery({
    queryKey: ["guestsPresents"],
    queryFn: () => getGuests(),
  });
}
