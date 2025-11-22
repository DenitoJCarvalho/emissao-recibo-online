import * as zod from 'zod';

import { Status } from '@module/users/enums/status.enum';

/**
 * Dto para criação de usuário.
 * 
 * @typedef CreateUserDto
 * @property { string } nomeCompleto  Nome completo do usuário.
 * @property { string } email  E-mail do usuário.
 * @property { string } senha  Senha do usuário.
 * @property { Status } status  Status do usuário.
 * @property { string } perfilId  Id do perfil do usuário. 
 */
export const CreateUser = zod.object({

  nomeCompleto: zod
    .string()
    .trim()
    .min(8, { message: 'O nome completo deve ter no mínimo 8 caracteres.' })
    .max(200, { message: 'O nome completo deve ter no máximo 200 caracteres.' })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, { message: 'O nome completo contém caracteres inválidos.' }),

  senha: zod
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
    .max(100, { message: 'A senha deve ter no máximo 100 caracteres.' }),
  
  email: zod
    .string()
    .trim()
    .max(100, { message: 'O email deve ter no máximo 100 caracteres.' })
    .email({ message: 'O email fornecido não é válido.' }),
  
  status: zod
    .nativeEnum(Status)
    .default(Status.PENDENTE),
  
  perfilId: zod
    .string()
});

export type CreateUserDto = zod.infer<typeof CreateUser>;

