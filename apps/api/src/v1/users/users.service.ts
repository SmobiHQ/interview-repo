import { PrismaClient, User } from "@repo/database";

const prisma = new PrismaClient();

export class UserService {
  // Create a new user
  async createUser(data: { email: string; name: string }): Promise<User> {
    return prisma.user.create({
      data: {
        ...data,
      },
    });
  }

  // Read a user by id
  async getUserById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  // Read all users
  async getAllUsers(): Promise<User[]> {
    return prisma.user.findMany();
  }

  // Update a user
  async updateUser(
    id: string,
    data: { email?: string; name?: string }
  ): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  // Delete a user
  async deleteUser(id: string): Promise<User> {
    return prisma.user.delete({
      where: { id },
    });
  }
}
