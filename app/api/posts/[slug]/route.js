import { NextResponse } from "next/server";

import prisma from "@/utils/connect";

export const GET = async (request, { params }) => {
  const { slug } = params

  try {

    const post = await prisma.post.update({
      where: {
        slug: slug
      },
      data: {
        views: {
          increment: 1
        }
      },
      include: { 
        user: true
      }
    })

    return NextResponse.json(post, {status: 202})
  } catch (error) {
    return NextResponse.json(JSON.stringify({message: 'error'}))
  }
}
