/* eslint-disable radix */
import * as dotenv from 'dotenv';

dotenv.config();
export class AppEnvs {
  static readonly STRING_CONNECTION_DB: string =
    process.env.STRING_CONNECTION_DB || '';

  static readonly PROJECT_ID: string = process.env.PROJECT_ID || 'm-services';

  static readonly X_API_KEY: string =
    process.env.X_API_KEY || 'dbb4b052-23b9-48c4-b885-9751d8be0dc5';

  static readonly AUTH_DB_MONGO: string =
    process.env.AUTH_DB_MONGO ||
    'mongodb+srv://mathcode:UllOGkENxqlJOhwW@cluster0.fvmu2kl.mongodb.net/sistemas';

  static readonly SALT_HASH: number = parseInt(process.env.SALT_HASH!) || 10;
}
