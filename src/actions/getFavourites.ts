import prisma from "@/lib/prisma-db";
import getCurrentUser from "./getCurrentUser";

export default async function getFavourites() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const userListings = await prisma.favourite.findMany({
      where: {
        userId: currentUser.id,
      },
      include: {
        listing: true,
      },
    });

    const favourites = userListings.map((favourite) => ({
      ...favourite.listing,
      createdAt: favourite.listing.createdAt.toISOString(),
    }));

    return favourites;
  } catch (error: any) {
    throw new Error(error);
  }
}
