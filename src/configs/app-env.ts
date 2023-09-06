/* eslint-disable radix */
import * as dotenv from 'dotenv';

dotenv.config();
export class AppEnvs {
  static readonly STRING_CONNECTION_DB: string =
    process.env.STRING_CONNECTION_DB || '';

  static readonly PROJECT_ID: string =
    process.env.PROJECT_ID || 'micro-services';

  static readonly SALT_HASH: number = parseInt(process.env.SALT_HASH!) || 10;
}
