import { z } from "zod";

const historyLinksSchema = z.object({
  title: z.string(),
  content: z.object({
    title: z.string(),
    link: z.string(),
    icon: z.string(),
  }),
  last_visit: z.union([z.string(), z.number(), z.date()]),
});

type HistoryLinks = z.infer<typeof historyLinksSchema>;

const historyLinksStore = z.object({
  history: z.array(historyLinksSchema),
  setHistoryLink: z.function().args(historyLinksSchema).returns(z.void()),
});

type HistoryLinksStore = z.infer<typeof historyLinksStore>;

export { type HistoryLinks, type HistoryLinksStore };
