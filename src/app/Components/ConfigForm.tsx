
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Input,  } from "@shadcn-ui/react"; // Shadcn UI Input and Button
import {Button } from '@/components/ui/button';
import {Input } from '@/components/ui/input';


const rolesAllowedEnum = ["guest", "member", "admin"] as const;

const SectionSchema = z.object({
  id: z.string().min(1, "Section ID is required"),
  title: z.string().min(1, "Section title is required"),
  visibility: z
    .object({
      rolesAllowed: z.array(z.enum(rolesAllowedEnum)),
      startDate: z.string().optional(),
      endDate: z.string().optional(),
    })
    .refine(
      (data) => !data.startDate || !data.endDate || new Date(data.startDate) <= new Date(data.endDate),
      {
        message: "Start date must be before or equal to end date",
      }
    ),
});

const ScreenSchema = z.object({
  id: z.string().min(1, "Screen ID is required"),
  title: z.string().min(1, "Screen title is required"),
  sections: z.array(SectionSchema).min(1, "At least one section is required"),
});

const ConfigSchema = z.object({
  appName: z.string().min(1, "App name is required"),
  version: z.string().regex(/^\d+\.\d+\.\d+$/, "Invalid version format"),
  screens: z.array(ScreenSchema).max(5, "Maximum 5 screens allowed"),
});

type ConfigFormValues = z.infer<typeof ConfigSchema>;

const ConfigForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConfigFormValues>({
    resolver: zodResolver(ConfigSchema),
    defaultValues: {
      appName: "",
      version: "",
      screens: [],
    },
  });

  const onSubmit = (data: ConfigFormValues) => {
    console.log("Validated Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>App Name</label>
        <Controller
          name="appName"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Enter app name" />
          )}
        />
        {errors.appName && <p className="error">{errors.appName.message}</p>}
      </div>

      <div>
        <label>Version</label>
        <Controller
          name="version"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Enter version (e.g., 1.0.0)" />
          )}
        />
      </div>

      {/* Add dynamic fields for screens and sections */}

      <div>
        <Button variant="outline" type="button" onClick={() => reset()}>
          Reset
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default ConfigForm;
