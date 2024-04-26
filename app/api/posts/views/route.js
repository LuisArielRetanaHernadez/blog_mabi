import { NextResponse } from "next/server";

import prisma from "@/utils/connect";

export const GET = async () => {
  console.log('entro al get top view')
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        views: 'desc'
      },
      take: 3
    })

    return NextResponse.json(posts, {status: 202})
  } catch (error) {
    return NextResponse.json({message: 'error', error})
  }
}