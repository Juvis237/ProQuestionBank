"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { forgotPasswordHeader, ForgotPasswordText } from "../../../data";
import CustomText from "../CustomText/CustomText";
import CustomHeader from "../CustomHeader/CustomHeader";

const ForgotPassword = () => {
  const forgotPasswordSchema = z.object({
    email: z.string().email(),
  });
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    console.log("some values", values);
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <CustomHeader
        text={forgotPasswordHeader}
        weight="font-bold"
        size="text-xl"
        color="text-secondary"
        customStyle="pt-6 pt-3"
      />
      <CustomText text={ForgotPasswordText} customStyle="px-8 text-center" />
      <div className="flex justify-center items-center flex-col mx-4 py-6 w-[90%] sm:max-w-[380px]">
        <div className="pb-6"></div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full px-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Email or Telephone</FormLabel>
                  <FormControl>
                    <Input {...field} className="py-5 relative" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex items-center justify-center">
              <Button type="submit" className="px-8 py-5 bg-primary w-full">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
