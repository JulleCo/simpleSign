import { PrismaClient } from "@prisma/client";
// import prisma from "./index"
// import bcrypt from "bcrypt"

class UserRepository {
    prisma : PrismaClient
    constructor(prisma : PrismaClient) {
      this.prisma = prisma

    }

//   compareHash = async (password, hash) => await bcrypt.compareSync(password, hash);

    async findAllUsers() {
      return await this.prisma.user.findMany();
    }
}

export default UserRepository;