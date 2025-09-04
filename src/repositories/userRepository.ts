import { prisma } from '@/lib/prisma';
import type { User } from '@prisma/client';




export type CreateUserInput = {
  nome: string;
  cpf: string ;
  email: string;
  nascimento: Date;
  senha: string;
};



export default class UserRepository {


  async create({ nome, cpf, email, nascimento, senha }: CreateUserInput): Promise<User> {
   
    return prisma.user.create({

      data: {
        nome,
        cpf,
        email,
        nascimento,
        senha
      }
    });
   
  
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

}
