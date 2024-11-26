"use client";

import React, { useLayoutEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginField } from "../../../data";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CustomHeader } from "../CustomHeader/CustomHeader";
import { Input } from "../ui/input";
import { loginSchema } from "@/schema/logingSchema";
import { LoginSchema } from "@/types/types";

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(true);

  useLayoutEffect(() => {
    if (typeof localStorage !== "undefined") {
      const user = localStorage.getItem("user");
      if (user) {
        // router.push("/dashboard");
      }
    }
  }, [router]);
  const togglerPassword = (fieldType: string) => {
    if (fieldType === "password") {
      setShowPassword(!showPassword);
    }
  };
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: LoginSchema) => {
    console.log(values);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center items-center flex-col mx-4 py-6 w-[90%] sm:max-w-[380px]">
        <div className="pb-6">
          <CustomHeader
            text="Login"
            color="text-secondary"
            weight="font-bold"
            size="text-xl capitalize"
          />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            {loginField.map((fieldInput, index) => {
              return (
                <FormField
                  key={index}
                  control={form.control}
                  name={fieldInput.name as "email" | "password"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="">{fieldInput.label}</FormLabel>
                      {fieldInput.name !== "password" &&
                      fieldInput.name !== "confirm_password" ? (
                        <FormControl>
                          <Input {...field} className="py-5 relative" />
                        </FormControl>
                      ) : (
                        <div className="relative">
                          <Input
                            type={
                              showPassword && fieldInput.name === "password"
                                ? "password"
                                : ""
                            }
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                            className={`py-5 bg-white ${fieldInput.name === "password" && "pr-16"}`}
                          />
                          <div
                            className="w-6 absolute right-0 top-0 mr-4 mt-2 cursor-pointer"
                            onClick={() => togglerPassword(fieldInput.name)}
                          >
                            {fieldInput.name === "password" ? (
                              showPassword ? (
                                <EyeIcon />
                              ) : (
                                <EyeSlashIcon />
                              )
                            ) : null}
                          </div>
                        </div>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            })}

            <Link href={"./forgot-password"}>
              <div className="text-secondary mt-2  cursor-pointer flex justify-start">
                Forgot password ?
              </div>{" "}
            </Link>
            <div className="w-full flex items-center justify-center pb-4">
              <Button
                type="submit"
                className="px-8 py-5 bg-primary w-full"
                disabled={
                  // disableBtn ||
                  form.formState.isSubmitting
                }
                onClick={form.handleSubmit(onSubmit)}
                spinner={
                  // disableBtn ||
                  form.formState.isSubmitting
                }
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
        {/* <span>or</span>
                <div className="flex justify-between gap-4 py-4 w-full">
                    {socialIcon.map((icon, index) => {
                        return <OptionIcon imageSrc={icon} key={index} />
                    })}
                </div> */}
        {/* <FormRedirect
                    link="/sign-up"
                    linkText="Sign up"
                    linkTextDescription="Don’t yet have an account?"
                /> */}
      </div>
    </div>
  );
};

export default LoginForm;
