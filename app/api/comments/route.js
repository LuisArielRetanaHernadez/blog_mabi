import { NextResponse } from "next/server";

import prisma from "@/utils/connect";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const postSlug = searchParams.get("slug");

  try {
    const comments = await prisma.comments.findMany({
      where: {
        ...(postSlug && { postSlug })
      },
      include: { 
        user: true
      }
    })
    return NextResponse.json(comments, {status: 2002})
  } catch (error) {
    return NextResponse.json(JSON.stringify({message: 'error'}))
  }
}
