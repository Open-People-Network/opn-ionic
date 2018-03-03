import {DefaultAccount} from "./account";

export interface Settings {
  account: Account
}

export const DefaultSettings: Settings = {
  account: DefaultAccount
};
