import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { CustomCheckboxProps } from "@/types/types";

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  form,
  index,
  level,
}) => {
  return (
    <div>
      <FormField
        key={index}
        control={form.control}
        name="level"
        render={({ field }) => {
          return (
            <FormItem
              key={index}
              className={`${field.value?.includes(index) ? "bg-secondary-foregroundWithOpacity" : ""} flex w-full flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow`}
            >
              <FormControl>
                <Checkbox
                  className="border-secondary data-[state=checked]:bg-secondary"
                  checked={field.value?.includes(index)}
                  onCheckedChange={(checked) => {
                    return checked
                      ? field.onChange([...field.value, index])
                      : field.onChange(
                          field.value?.filter(
                            (value: number) => value !== index,
                          ),
                        );
                  }}
                />
              </FormControl>
              <FormLabel className="text-sm font-normal w-full cursor-pointer">
                {level.name}
              </FormLabel>
            </FormItem>
          );
        }}
      />
    </div>
  );
};

export default CustomCheckbox;
