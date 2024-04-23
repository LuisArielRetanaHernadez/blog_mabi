import { NextResponse } from "next/server";

import prisma from "@/utils/connect";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url)

  const page = searchParams.get('page')

  const take = 2
  const skip = (page - 1) * take

  try {
    const posts = await prisma.posts.findMany({
      take,
      skip,
    })
    return NextResponse.json(posts, {status: 2002})
  } catch (error) {
    return NextResponse.json(JSON.stringify({message: 'error'}))
  }
}
