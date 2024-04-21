import { Prisma } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new Prisma();

} else {
  
  if (!global.prisma) {
    global.prisma = new Prisma();
  }
  prisma = global.prisma;
}

export default prisma;

