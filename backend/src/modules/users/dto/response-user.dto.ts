import * as zod from 'zod';

/**
 * Dto para resposta de usuário.
 * 
 * @typedef ResponseUserDto
 * @property { string } id  Id do usuário.
 * @property { string } nomeCompleto  Nome completo do usuário.
 * @property { string } email  E-mail do usuário.
 * @property { string } status  Status do usuário.
 * @property { string } perfilId  Id do perfil do usuário. 
 */
export const ResponseUser = zod.object({
  id: zod
    .string(),
  
  nomeCompleto: zod
    .string(),
  
  email: zod
    .string()
    .email(),
  
  status: zod
    .string(),
  
  perfilId: zod
    .string(),
});

export type ResponseUserDto = zod.infer<typeof ResponseUser>;