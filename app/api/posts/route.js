import { NextResponse } from "next/server";

import prisma from "@/utils/connect";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url)

  const page = searchParams.get('page')
  const cat = searchParams.get('cat')

  const take = 2
  const skip = (page - 1) * take

  try {
    const posts = await prisma.posts.$transaction([
      prisma.posts.findMany({
        skip,
        take,
        where: {
          ...(cat ? {category: cat} : null)
        }
      }),
      prisma.posts.count(),
    ])
    return NextResponse.json(posts, {status: 2002})
  } catch (error) {
    return NextResponse.json(JSON.stringify({message: 'error'}))
  }
}
