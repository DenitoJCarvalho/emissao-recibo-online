import * as zod from 'zod';

const Payload = zod.object({
  sub: zod.string()
    .max(50, { message: `Usuário ID inválido. Deve conter no máximo 50 caracteres.` }),
  
  email: zod.string()
    .email({
      message: `Email inválido.`
    }).max(100),
  
  expiresIn: zod.string().nullable()
});

export type PayloadDto = zod.infer<typeof Payload>;