import { NextResponse } from "next/server";

import prisma from "@/utils/connect";

export const GET = async (request) => {
  try {
    const categories = await prisma.category.findMany()
    return NextResponse.json(JSON.stringify(categories))
  } catch (error) {
    return NextResponse.json(JSON.stringify({message: 'error'}))
  }
}
