import { useQuery } from "@tanstack/react-query";
import { getGuests } from "@/services/api";

export function useGuests(
  page: number = 1,
  limit: number = 10,
  search: string = "",
  statusFilter: boolean | undefined
) {
  return useQuery({
    queryKey: ["guests", page, limit, search, statusFilter],
    queryFn: () => getGuests(page, limit, search, statusFilter),
    placeholderData: (previousData) => previousData ?? undefined,
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // staleTime: 1000 * 60 * 5,
    // retry: 2,
  });
}
