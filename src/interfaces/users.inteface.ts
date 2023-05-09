export interface AuthInputs {
  email: String;
  password: String;
}
export interface UserInterface extends AuthInputs {
  names: String;
}
