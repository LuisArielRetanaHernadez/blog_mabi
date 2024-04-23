import { NextResponse } from "next/server";

import prisma from "@/utils/connect";

export const GET = async (request, { params }) => {
  const { slug } = params

  try {

    const post = await prisma.post.findUnique({
      where: {
        slug
      }
    })

    return NextResponse.json(post, {status: 2002})
  } catch (error) {
    return NextResponse.json(JSON.stringify({message: 'error'}))
  }
}
