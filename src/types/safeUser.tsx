import { User, Favourite, Listing, Account, Reservation } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified?: string | null;
  favourites?: Favourite[];
  accounts?: Account[];
  listings?: Listing[];
  reservation?: Reservation[];
};

export type SafeUserState = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified" | "hashedPassword"
> & {
  isAuth: boolean;
  emailVerified?: string;
};

export type SafeUserAuth = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified" | "hashedPassword"
> & {
  emailVerified?: string;
};
