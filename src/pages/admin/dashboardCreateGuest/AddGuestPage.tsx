import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddNewGuestType, addNewGuestSchema } from "@/lib/schema";
import { AddNewGuestDefaultValues } from "@/utils/constants";
import { useCreateGuests } from "@/services/guests/mutations/use-create-guests";
import { toast } from "sonner";
import GuestForm from "./GuestForm";

export default function AddGuestPage() {
  const form = useForm<AddNewGuestType>({
    resolver: zodResolver(addNewGuestSchema),
    defaultValues: AddNewGuestDefaultValues,
  });

  const { mutate, isPending, error } = useCreateGuests();

  function onSubmit(formData: AddNewGuestType) {
    mutate(formData, {
      onSuccess: (data) => {
        if (data.success) {
          toast.success(data.message);
          form.reset();
        }
      },
      onError: (data) => {
        toast.error(
          data.message || "Failed to create guest. Please try again!"
        );
      },
    });
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add Guest Form</h1>
      <GuestForm
        form={form}
        onSubmit={onSubmit}
        isPending={isPending}
        error={error ? { message: error.message } : undefined}
      />
    </div>
  );
}
