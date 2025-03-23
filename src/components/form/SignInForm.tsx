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
import { Link } from "react-router-dom";
import { ROUTES, SignInDefaultValues } from "@/utils/constants";

const SignUpForm = () => {
  const form = useForm<SignInFormType>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: SignInDefaultValues,
  });

  function onSubmit(values: SignInFormType) {
    console.log(values);
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
        <Button type="submit" className="w-full cursor-pointer">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
