import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { editGuestSchema, EditGuestType } from "@/lib/schema";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useGuestById } from "@/services/guests/mutations/use-guestId";
import { useEffect } from "react";
import { useUpdateGuest } from "@/services/guests/mutations/use-update-guest";

export default function EditGuestForm({
  open,
  setOpen,
  guestId,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  guestId: number;
}) {
  const { data } = useGuestById(guestId);
  console.log(data);

  const form = useForm<z.infer<typeof editGuestSchema>>({
    resolver: zodResolver(editGuestSchema),
    defaultValues: {
      name: "",
      no_hp: "",
      status_hadir: false,
    },
  });

  useEffect(() => {
    if (data?.data) {
      form.reset({
        name: data.data.name || "",
        no_hp: data.data.no_hp || "",
        status_hadir: data.data.status_hadir || false,
      });
    }
  }, [data, form]);

  const { mutate, isPending, error } = useUpdateGuest();

  function onSubmit(formData: EditGuestType) {
    mutate(
      { id: guestId, ...formData },
      {
        onSuccess: (data) => {
          if (data.success) {
            toast.success(data.message);
            form.reset();
            setOpen(false);
          }
        },
        onError: (data) => {
          toast.error(
            data.message || "Failed to create guest. Please try again!"
          );
        },
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        {...field}
                        defaultValue={data?.data.name}
                      />
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
                      <Input
                        placeholder="No Telp"
                        {...field}
                        defaultValue={data?.data.no_hp}
                      />
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
                          defaultChecked={data?.data.status_hadir}
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
                {error && (
                  <p className="text-red-500 text-center mt-3">
                    {error.message}
                  </p>
                )}
              </div>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
