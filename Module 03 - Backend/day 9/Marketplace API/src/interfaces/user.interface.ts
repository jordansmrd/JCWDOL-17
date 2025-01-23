export interface UserLogin {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  img_src?: string;
  role?: string;
}
