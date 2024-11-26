"use client";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import FormRedirect from "../FormRedirect/FormRedirect";
import { CustomHeader } from "../CustomHeader/CustomHeader";
import CustomText from "../CustomText/CustomText";
import { toast } from "@/hooks/use-toast";

const ResetPasswordOTP = () => {
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const FormSchema = z.object({
    pin: z.string().min(5, {
      message: "Your one-time password must be 5 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const counter = new Date();
      const seconds = counter.getMinutes() * 60 + counter.getSeconds();
      const minutes = 60 * 2;
      const timeLeft = minutes - (seconds % minutes);
      setMins(minutes);
      setSecs(seconds);
      setTimeLeft(timeLeft);
    }, 500);
    return () => clearInterval(timer);
  }, [mins, secs]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-4 items-center w-full pl-4 -mt-24 mb-24">
          <Link
            className="w-6 cursor-pointer text-white"
            href={"/forgot-password"}
          >
            <ArrowLeftIcon />
          </Link>
        </div>
        {/* -mt-24 mb-24 */}
        <div className="flex justify-center items-center flex-col mx-4 py-6 w-[90%] sm:max-w-[380px]">
          <div className="pb-3 flex flex-col items-center">
            <CustomHeader
              text={"Verification"}
              weight="font-bold"
              size="text-xl"
              color="text-secondary"
            />
            <CustomText
              text="A code has been sent to you. Please fill the code below to recover your account"
              customStyle="text-center pt-3 pb-32"
            />
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full pb-4"
            >
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormDescription className="text-center pt-2">
                      Code expires in{" "}
                      <span className="font-bold text-muted">
                        {Math.floor(timeLeft / 60)}:
                        {timeLeft % 60 < 10
                          ? `0${timeLeft % 60}`
                          : timeLeft % 60}
                      </span>
                    </FormDescription>
                    <FormControl>
                      <InputOTP maxLength={5} {...field}>
                        <InputOTPGroup className="flex w-full justify-between">
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <FormRedirect
            link="/"
            linkText="Resend"
            linkTextDescription="Don’t received a code?"
          />
          <div className="text-center py-6 w-full">
            <Button type="submit" className="px-8 py-5 bg-primary w-full">
              Verify
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordOTP;
