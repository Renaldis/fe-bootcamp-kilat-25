import { UseFormReturn } from "react-hook-form";
import { AddNewGuestType } from "@/lib/schema";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface GuestFormFieldsProps {
  form: UseFormReturn<AddNewGuestType>;
}

export default function GuestFormFields({ form }: GuestFormFieldsProps) {
  return (
    <>
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
    </>
  );
}
