import * as zod from 'zod';

export const SelectUser = zod.object({

  id: zod
    .string(),

  nomeCompleto: zod
    .string(),
  
  senha: zod
    .string(),
  
  email: zod
    .string(),
  
  status: zod
    .string(),
  
  perfilId: zod
    .string()
});

export type SelectUserDto = zod.infer<typeof SelectUser>;