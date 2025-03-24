import z from "zod";

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

export const PhonePattern = /^(?:\+62|62|0)8[1-9][0-9]{6,10}$/;

export const addNewGuestSchema = z.object({
  name: z.string().nonempty("Name is required").min(1, "Name min 3 character"),
  no_hp: z
    .string()
    .nonempty("No_Telp is required")
    .min(9, "No_Telp Min 8 Number")
    .regex(PhonePattern, "Invalid phone number"),
  status_hadir: z.boolean(),
});

export type AddNewGuestType = z.infer<typeof addNewGuestSchema>;

export const editGuestSchema = z.object({
  name: z.string().nonempty("Name is required").min(1, "Name min 3 character"),
  no_hp: z
    .string()
    .nonempty("No_Telp is required")
    .min(9, "No_Telp Min 8 Number")
    .regex(PhonePattern, "Invalid phone number"),
  status_hadir: z.boolean(),
});
export type EditGuestType = z.infer<typeof editGuestSchema>;
