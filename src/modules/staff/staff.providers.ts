import { Connection } from 'mongoose';
import { StaffSchema } from '../../schemas/staff.schema';

export const staffProviders = [
  {
    provide: 'STAFF_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Staff', StaffSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
