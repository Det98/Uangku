"use server";

import { revalidatePath } from "next/cache";

export async function createActivityAction(_, formData) {
  const title = formData.get("title");
  const amount = Number(formData.get("amount"));
  const category = formData.get("category");

  console.log(title, amount, category);

  await fetch("https://v1.appbackend.io/v1/rows/6CtJkF1cIGGm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{ title, amount, category }]),
  });

  revalidatePath("/");
}
