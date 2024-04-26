import { NextResponse } from "next/server";

import prisma from "@/utils/connect";
import { getAuthSession } from "../../../utils/auth";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug })
      },
      include: { 
        user: true
      }
    })
    return NextResponse.json(comments, {status: 202})
  } catch (error) {
    return NextResponse.json(JSON.stringify({message: 'error'}))
  }
}

export const POST = async (request) => {
  const session = await getAuthSession()

  if (!session) {
    return NextResponse.json({message: 'Not Authenti'}, {status: 401})
  }

  try {
    const body = await request.json()

    const dataPost = {
      ...body,
      userEmail: session.user.email
    }

    const comment = await prisma.comment.create({
      data: dataPost
    })
    return NextResponse.json(comment, {status: 202})
  } catch (error) {
    return NextResponse.json({message: 'error'})
  }
}
