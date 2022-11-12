import { Connection } from 'mongoose';
import { ProductTypeSchema } from '../../schemas/productType.schema';

export const productTypeProviders = [
  {
    provide: 'PRODUCT_TYPE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('ProductType', ProductTypeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
