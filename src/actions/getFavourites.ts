import prisma from "@/lib/prisma-db";
import getCurrentUser from "./getCurrentUser";

export default async function getFavourites() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const favourites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favouriteIds || [])],
        },
      },
    });

    const safeFavourites = favourites.map((favourite) => ({
      ...favourite,
      createdAt: favourite.createdAt.toString(),
    }));

    return safeFavourites;
  } catch (error: any) {
    throw new Error(error);
  }
}
