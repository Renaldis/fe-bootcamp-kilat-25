import { signUpFormSchema, SignUpFormType } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Link, useNavigate } from "react-router-dom";
import { R_TOKEN, ROUTES, SignUpDefaultValues } from "@/utils/constants";
import useSignUp from "@/services/auth/mutations/use-signup";

const SignUpForm = () => {
  const form = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: SignUpDefaultValues,
  });

  const { mutate, isPending } = useSignUp();

  const navigate = useNavigate();

  function onSubmit(formData: SignUpFormType) {
    console.log(formData);
    mutate(formData, {
      onSuccess: (data) => {
        if (data.success) {
          navigate("/dashboard");
          localStorage.setItem(R_TOKEN, data.data!);
        }
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p>
          Have an account?{" "}
          <Link
            className="text-blue-500 underline hover:text-blue-600 font-bold"
            to={ROUTES.LOGIN}
          >
            Sign In
          </Link>
        </p>
        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={isPending}
        >
          {isPending ? "Submitting.." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
