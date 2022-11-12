import { Connection } from 'mongoose';
import { CustomerSchema } from '../../schemas/customer.schema.or';

export const customerProviders = [
  {
    provide: 'CUSTOMER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Customer', CustomerSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
