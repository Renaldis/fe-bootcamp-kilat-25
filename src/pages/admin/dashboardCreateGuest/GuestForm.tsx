import { UseFormReturn } from "react-hook-form";
import { AddNewGuestType } from "@/lib/schema";
import { Form } from "@/components/ui/form";
import GuestFormFields from "./GuestFormFields";
import { Button } from "@/components/ui/button";

interface GuestFormProps {
  form: UseFormReturn<AddNewGuestType>;
  onSubmit: (data: AddNewGuestType) => void;
  isPending: boolean;
  error?: { message?: string };
}

export default function GuestForm({
  form,
  onSubmit,
  isPending,
  error,
}: GuestFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <GuestFormFields form={form} />
        <div>
          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={isPending}
          >
            {isPending ? "Submitting.." : "Submit"}
          </Button>
          {error && (
            <p className="text-red-500 text-center mt-3">{error.message}</p>
          )}
        </div>
      </form>
    </Form>
  );
}
