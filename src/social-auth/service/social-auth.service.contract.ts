export abstract class SocialAuthServiceContract {
  abstract loginWithSocialAuth(body: object): Promise<object>;
}
