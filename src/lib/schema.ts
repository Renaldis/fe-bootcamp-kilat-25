import z from "zod";

export const noteFormSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title can't be more than 100 characters"),
  content: z
    .string()
    .min(1, "Content must be at least 10 characters long")
    .max(500, "Content can't be more than 500 characters"),
});

export type NoteFormType = z.infer<typeof noteFormSchema>;

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type SignInFormType = z.infer<typeof signInFormSchema>;

export const signUpFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type SignUpFormType = z.infer<typeof signUpFormSchema>;
