import { Connection } from 'mongoose';
import { WarrantyClaimSchema } from '../../schemas/warrantyClaim.schema';

export const warrantyClaimProviders = [
  {
    provide: 'WARRANTY_CLAIM_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('WarrantyClaim', WarrantyClaimSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
