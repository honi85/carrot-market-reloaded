"use server";

export async function login(prevState: any, formData: FormData) {
  console.log(prevState);
  await new Promise(resolve => setTimeout(resolve, 5000));
  //redirect("/");
  return {
    errors: ["wrong password", "password too short"],
  };
}
