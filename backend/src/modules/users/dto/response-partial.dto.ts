import * as zod from 'zod';
import { ResponseUser } from '@module/users';

export const ResponsePartial = ResponseUser.partial();

export type ResponsePartialDto = zod.infer<typeof ResponsePartial>;