import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddNewGuestType, addNewGuestSchema } from "@/lib/schema";
import { AddNewGuestDefaultValues } from "@/utils/constants";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useCreateGuests } from "@/services/guests/mutations/use-create-guests";
import { toast } from "sonner";

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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="no_hp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>No Telp</FormLabel>
                <FormControl>
                  <Input placeholder="No Telp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status_hadir"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Is Present?</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2 capitalize">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <span>yes</span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={isPending}
            >
              {isPending ? "Submitting.." : "Submit"}
            </Button>
            <p className="text-red-500 text-center mt-3">{error?.message}</p>
          </div>
        </form>
      </Form>
    </div>
  );
}
