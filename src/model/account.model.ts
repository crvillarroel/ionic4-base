export interface Account {
  login: string,
  email: string,
  firstName?: string,
  activated?: boolean,
  authorities?: string[],
  langKey?: string,
  lastName?: string,
  imageUrl?: string
}