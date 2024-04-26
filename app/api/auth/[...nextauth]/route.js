import NextAuth, { getServerSession } from "next-auth"

import { authOptions } from "@/utils/auth"

const henler = NextAuth(authOptions)

export { henler as GET, henler as POST}

