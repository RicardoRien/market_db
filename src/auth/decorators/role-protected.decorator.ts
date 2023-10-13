import { SetMetadata } from '@nestjs/common';
import { ValidRoles } from '../interfaces/valid-roles';
import { META_ROLES } from 'src/utils/constants';

export const RoleProtected = (...args: ValidRoles[]) => {
  return SetMetadata(META_ROLES, args);
}
