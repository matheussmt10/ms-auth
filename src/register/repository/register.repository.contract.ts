export abstract class RegisterRepositoryContract {
  abstract findOneByEmail(email: string): Promise<object | null>;

  abstract insert(body: object): Promise<void>;
}
