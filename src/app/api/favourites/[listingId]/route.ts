import { NextRequest, NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "../../../../lib/prisma-db";
import { SafeUser } from "@/types/safeUser";
import { User } from "@prisma/client";

interface IParams {
  listingId?: string;
}

export async function POST(
  request: NextRequest,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser(true);

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const favourite = await prisma.favourite.create({
    data: {
      userId: currentUser.id,
      listingId,
    },
  });
  return NextResponse.json({ created: favourite });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser(true);

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  const currentFavourite = await prisma.favourite.findMany({
    where: {
      listingId,
      userId: currentUser.id,
    },
  });

  if (!currentFavourite) {
    throw new Error("Invalid Listing ID");
  }

  const favourite = await prisma.favourite.deleteMany({
    where: {
      listingId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json({ deleted: favourite });
}
