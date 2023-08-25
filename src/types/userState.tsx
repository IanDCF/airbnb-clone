interface UserState {
  isAuth: boolean;
  id: string;
  name: string;
  email: string;
  emailVerified: Date | null;
  image: string | null;
}

interface UserAuth {
  id: string;
  name: string;
  email: string;
  emailVerified: Date | null;
  image: string | null;
}
