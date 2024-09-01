import { z } from "zod";

export const countrySchema = z.union([z.literal("US"), z.literal("NO")]);
export type Country = z.infer<typeof countrySchema>;

export const familySchema = z.union([z.literal("Sather"), z.literal("Juve")]);
export type Family = z.infer<typeof familySchema>;

export const sexSchema = z.union([z.literal("Male"), z.literal("Female")]);
export type Sex = z.infer<typeof sexSchema>;

export const dateSchema = z.object({
  month: z.number(),
  year: z.number(),
  country: countrySchema.default("US"),
});

export const personSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  sex: sexSchema,
  picture: z.string().optional(),
  birth: dateSchema,
  death: dateSchema.optional(),
  marriages: z
    .array(
      z.object({
        year: z.number(),
        spouse: z.string(),
      })
    )
    .optional(),
  children: z.array(z.string()).optional(),
  image: z.string().optional(),
});
export type Person = z.infer<typeof personSchema>;
