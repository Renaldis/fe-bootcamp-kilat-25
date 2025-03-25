import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateGuest } from "@/services/api";
import { UpdateTamuDto } from "@/types/tamu";

export function useUpdateGuest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (guestData: UpdateTamuDto) => updateGuest(guestData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guests"] });
      queryClient.invalidateQueries({ queryKey: ["guestsPresents"] });
    },
  });
}
