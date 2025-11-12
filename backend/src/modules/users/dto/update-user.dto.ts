import * as zod from 'zod';

export const UpdateUser = zod.object({

  id: zod
    .string({ message: 'ID do usuário é obrigatório.' }),

  nomeCompleto: zod
    .string()
    .trim()
    .min(8, { message: 'O nome completo deve ter no mínimo 8 caracteres.' })
    .max(200, { message: 'O nome completo deve ter no máximo 200 caracteres.' })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, { message: 'O nome completo contém caracteres inválidos.' })
    .optional(),

  senha: zod
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
    .max(100, { message: 'A senha deve ter no máximo 100 caracteres.' })
    .optional(),
  
  email: zod
    .string()
    .trim()
    .max(100, { message: 'O email deve ter no máximo 100 caracteres.' })
    .email({ message: 'O email fornecido não é válido.' })
    .optional(),
  
  status: zod
    .string()
    .default('pendente')
  .optional(),
  
  perfilId: zod
    .string()
    .optional()
});

export type UpdateUserDto = zod.infer<typeof UpdateUser>;