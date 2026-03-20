import { z } from "zod"

export const createExpenseSchema = z.object({
  title: z.string().min(1),
  amount: z.number().positive(),
  category: z.string().min(1)
})

export const updateExpenseSchema = z.object({
  title: z.string().min(1).optional(),
  amount: z.number().positive().optional(),
  category: z.string().min(1).optional()
})