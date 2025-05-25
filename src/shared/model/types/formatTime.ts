import { z } from "zod";

const timeSchema = z.object({
  formattedTime: z
    .function()
    .args(z.number())
    .returns(
      z.object({
        seconds: z.number(),
        minutes: z.number(),
        hours: z.number(),
        days: z.number(),
        weeks: z.number(),
        months: z.number(),
      })
    ),
  getTime: z.function().returns(
    z.object({
      milliseconds: z.number(),
      seconds: z.number(),
      minutes: z.number(),
      hours: z.number(),
      days: z.number(),
      weeks: z.number(),
      months: z.number(),
    })
  ),
  getFormatTime: z
    .function()
    .args(z.union([z.string(), z.number(), z.date()]))
    .returns(
      z.object({
        formatted: z.string(),
      })
    ),
});

export type TimeFormat = z.infer<typeof timeSchema>;
