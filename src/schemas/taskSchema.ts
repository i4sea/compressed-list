import { z } from 'zod'

export const newTaskShema = z.object({
	title: z.string(),
})

export type NewTaskShemaProps = z.infer<typeof newTaskShema>