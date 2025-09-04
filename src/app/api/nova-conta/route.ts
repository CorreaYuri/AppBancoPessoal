import { NextResponse } from 'next/server';
import  UserRepository  from '../../../repositories/userRepository'; // ajuste se necessário

const userRepository = new UserRepository();

export async function POST(req: Request) {
  try {
    const { nome, cpf, nascimento, email, senha } = await req.json();
    const dataNascimento = new Date(nascimento).toISOString();


     
    // Aqui você salva no banco usando o repository
    const novoUsuario = await userRepository.create(  {
      
      nome,
      cpf,
      nascimento: dataNascimento,
      email,
      senha
    });

   
    return NextResponse.json({ success: true, data: novoUsuario }, {status: 200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Erro ao criar conta' }, { status: 505 });
  }
}
