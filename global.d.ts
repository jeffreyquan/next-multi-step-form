import "little-state-machine";

declare module "little-state-machine" {
  interface GlobalState {
    firstName: string;
    lastName: string;
    age: string;
  }
}
