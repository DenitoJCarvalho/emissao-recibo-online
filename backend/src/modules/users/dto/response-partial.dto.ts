import * as zod from 'zod';
import { ResponseUser } from '@module/users/dto/response-user.dto';

console.log(`data: ${ResponseUser}`)

export const ResponsePartial = ResponseUser.partial();

export type ResponsePartialDto = zod.infer<typeof ResponsePartial>;