import { signInFormSchema, SignInFormType } from "@/lib/schema";
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
import { R_TOKEN, ROUTES, SignInDefaultValues } from "@/utils/constants";
import useSignIn from "@/services/auth/mutations/use-signin";

const SignUpForm = () => {
  const form = useForm<SignInFormType>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: SignInDefaultValues,
  });

  const { mutate, isPending } = useSignIn();

  const navigate = useNavigate();

  function onSubmit(formData: SignInFormType) {
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
        <p>
          Don&apos;t have an account?{" "}
          <Link
            className="text-blue-500 underline hover:text-blue-600 font-bold"
            to={ROUTES.REGISTER}
          >
            Sign Up
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
