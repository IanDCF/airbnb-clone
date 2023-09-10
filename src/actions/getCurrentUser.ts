import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/lib/prisma-db";

export async function getSession() {
  return await getServerSession(authOptions);
}

// NOT an API call
// This is a direct communication with the db through a server component
export default async function getCurrentUser(
  includeFavourites = true,
  includeAccounts = true,
  includeListings = true,
  includeReservations = true
) {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const include = {
      favourites: includeFavourites,
      accounts: includeAccounts,
      listings: includeListings,
      reservations: includeReservations,
    };

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
      include,
    });

    if (!currentUser) {
      return null;
    }

    console.log(currentUser);

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    return null;
  }
}
