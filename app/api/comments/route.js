import { NextResponse } from "next/server";

import prisma from "@/utils/connect";
import { getAuthSession } from "../auth/[...nextauth]/route";

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

export const POST = async (request) => {
  const session = getAuthSession()

  if (!session) {
    return NextResponse.json(JSON.stringify({message: 'Not Authenti'}, {status: 401}))
  }

  try {
    const body = await request.json()
    const comment = await prisma.comments.create({
      data: {
        ...body,
        userEmail: session.user.email
      }
    })
    return NextResponse.json(comment, {status: 2002})
  } catch (error) {
    return NextResponse.json(JSON.stringify({message: 'error'}))
  }
}
