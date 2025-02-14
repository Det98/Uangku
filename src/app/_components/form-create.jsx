"use client";

import { useActionState } from "react";
import { createActivityAction } from "../_actions/action-create";
import { Button, Input, Select, SelectItem } from "@heroui/react";

export const FormCreate = () => {
  const [state, formAction, pending] = useActionState(
    createActivityAction,
    null
  );
  return (
    <form className="space-y-2" action={formAction}>
      <section>
        <h3 className="text-lg font-bold">Add new my activity</h3>
        <p>Input your activity and amount</p>
      </section>
      <Input variant="bordered" name="title" placeholder="Input the title" />
      <Input
        variant="bordered"
        name="amount"
        type="number"
        placeholder="Input the amount"
      />
      <select variant="bordered" name="category">
        <SelectItem key="credit">CREDIT</SelectItem>
        <SelectItem key="debit">DEBIT</SelectItem>
      </select>
      <Button type="submit" color="primary" isLoading={pending}>
        Save
      </Button>
    </form>
  );
};
