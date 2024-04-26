import { NextResponse } from "next/server";

import prisma from "@/utils/connect";
import { getAuthSession } from "../../../utils/auth";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url)

  const page = searchParams.get('page')
  const cat = searchParams.get('cat')

  const take = 2
  const skip = (page - 1) * take

  try {

    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany({
        skip,
        take,
        where: {
          ...(cat && {catSlug: cat})
        }
      }),
      prisma.post.count({
        where: {
          ...(cat && {catSlug: cat})
        }
      })
    ]);

    return NextResponse.json({posts, count}, {status: 202})
  } catch (error) {
    return NextResponse.json({message: 'error', error})
  }
}

export const POST = async (request) => {
  const session = await getAuthSession()

  if (!session) {
    return NextResponse.json(JSON.stringify({message: 'Not Authenti'}, {status: 401}))
  }

  try {
    const body = await request.json()

    const dataPost = {
      ...body,
      userEmail: session.user.email
    }
    const post = await prisma.post.create({
      data: dataPost
    })

    return NextResponse.json(post, {status: 202})
  } catch (error) {
    return NextResponse.json({message: 'error', error})
  }
}
