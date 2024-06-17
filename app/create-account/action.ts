"use server";
import { z } from "zod";

const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/,
);

const checkUsername = (username: string) => {
  return !username.includes("potato");
};

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Where is my username??",
      })
      .min(3, "Way too short")
      .max(10, "That is too looong!")
      .toLowerCase()
      .trim()
      .refine(checkUsername, "No potatos allowed!"),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(10)
      .regex(
        passwordRegex,
        "A password must have lowercase, UPPERCASE, a number and special characters.",
      ),
    confirm_password: z.string().min(10),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "Both password should be same",
    path: ["confirm_password"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
