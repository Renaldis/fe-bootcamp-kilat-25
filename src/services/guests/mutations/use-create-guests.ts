import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGuests } from "@/services/api";

export function useCreateGuests() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createGuests,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
