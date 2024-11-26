"use client";

import React from "react";
import DefaultHeader from "../DefaultHeader/DefaultHeader";
import CustomText from "../CustomText/CustomText";
import { Button } from "../ui/button";
import { trialLevels } from "../../../data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import { FormSchema } from "@/schema/form-schema";

const TrialLevel = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      level: [],
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

  return (
    <>
      <section className="px-4 w-full flex flex-col">
        <DefaultHeader />
        <CustomText
          text="What Is Your Level in Physics?"
          weight="font-bold"
          size="mt-24 mb-8 text-xl"
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="level"
              render={() => (
                <FormItem className="flex flex-col gap-y-3">
                  {trialLevels.map((level, index) => (
                    <CustomCheckbox
                      key={index}
                      level={level}
                      index={index}
                      form={form}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="absolute bottom-0 mb-6 w-full -ml-4 px-4 flex justify-center flex-col items-center gap-y-4">
              <Button
                type="submit"
                className={`py-6 w-full text-lg ${form.control._formValues.level.length > 0 ? "cursor-pointer" : "bg-disabled hover:bg-disabled cursor-pointer"}`}
                disabled={
                  form.control._formValues.level.length > 0 ? false : true
                }
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

export default TrialLevel;
