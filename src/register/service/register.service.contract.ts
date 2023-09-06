export abstract class RegisterServiceContract {
  abstract createNewAccount(body: object): Promise<object>;
}
