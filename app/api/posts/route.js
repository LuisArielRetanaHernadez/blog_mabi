import { NextResponse } from "next/server";

import prisma from "@/utils/connect";

export const GET = async (request) => {
  try {
    const posts = await prisma.posts.findMany()
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(JSON.stringify({message: 'error'}))
  }
}
