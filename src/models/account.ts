export interface Account {
  name: string,
  email: string,
  password: string
}

export const DefaultAccount: Account = {
  name: 'Beeno Tung'
  , email: 'aabbcc1241@yahoo.com.hk'
  , password: 'f78ab9a87338ec334e067d4811fcd8cfd454eb736f87fc5f17b0b65477e5c677'
};

export interface LoginAccount {
  email: string,
  password: string
}
