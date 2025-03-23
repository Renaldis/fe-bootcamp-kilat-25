import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGuest } from "@/services/api";

export function useDeleteGuest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteGuest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
  });
}
