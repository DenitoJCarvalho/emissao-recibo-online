import * as zod from 'zod';

/**
 * Dto para seleção de usuário.
 * 
 * @typedef SelectUserDto
 * @property { string } id  Id do usuário.
 * @property { string } nomeCompleto  Nome completo do usuário.
 * @property { string } senha  Senha do usuário.
 * @property { string } email  E-mail do usuário.
 * @property { string } status  Status do usuário.
 * @property { string } perfilId  Id do perfil do usuário.
 */
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