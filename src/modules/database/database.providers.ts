import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        process.env.DATABASE_HOST.replace(
          '<PASSWORD>',
          process.env.DATABASE_PASSWORD,
        ),
        // {
        //   useNewUrlParser: true,
        //   useFindAndModify: false,
        //   useUnifiedTopology: true,
        //   useCreateIndex: true,
        // },
      ),
  },
];
