import { useQuery } from "@tanstack/react-query";
import { getGuests } from "@/services/api";

export function useGuests() {
  return useQuery({
    queryKey: ["guests"],
    queryFn: getGuests,
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // staleTime: 1000 * 60 * 5,
    // retry: 2,
  });
}
