import { z } from 'zod'

export const newTaskShema = z.object({
	title: z.string().min(1, 'Este campo precisa ser preenchido'),
})

export type NewTaskShemaProps = z.infer<typeof newTaskShema>