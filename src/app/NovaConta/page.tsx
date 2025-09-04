"use client";

import { useState } from "react";
import Logo from "@/components/logo";
import Btn from "@/components/btn";



export default function NovaConta() {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");


    const handleSubmitCapturaValoresInput = async (e: React.FormEvent) => {
    alert("Caputurou os valores!")
    e.preventDefault(); // evita reload da página

    const response = await fetch('/api/nova-conta', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        nome,
        cpf,
        nascimento,
        email,
        senha
        })

    });

    const data = await response.json();

    if (data.success) {
      alert('Conta criada com sucesso!');
      
    } else {
      alert('Erro ao criar conta');
    }
    };


    /*console.log({
      nome,
      cpf,
      nascimento,
      email,
      senha,
      confirmarSenha
    })};*/


    return (
        <main className="mains flex flex-col justify-center items-center bg-white h-screen space-y-12">

            <a href="/"><Logo width="150" subtitulo="Abri Conta" /></a>

           <form className="flex flex-col text-white p-4 w-85 space-y-4  rounded-lg"
           onSubmit={handleSubmitCapturaValoresInput} 
           >
            
             <div>
                <input className="border-1 w-full p-2 rounded-xl" 
                type="text" 
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div>
                <input className="border-1 w-full p-2 rounded-xl" 
                type="text" 
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                />
            </div>
            <div>
                <input className="border-1 w-full p-2 rounded-xl" 
                type="date" 
                placeholder="Dt Nascimento"
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
                />
            </div>
            <div>
                <input className="border-1 w-full p-2 rounded-xl" 
                type="e-mail" 
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
           
            <h2 className="text-xs">Cadastre s ua senha</h2>
            <div>
                <input className="border-1 w-full p-2 rounded-xl" 
                type="text" 
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                />
            </div>
            <div>
                <input className="border-1 w-full p-2 rounded-xl" 
                type="text" 
                placeholder="Confirme a senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                />
            </div>

            <footer className="flex justify-center mt-4">
                <Btn 
                type="submit"  
                bgColor={"red"} 
                colorText={"white"} 
                texto={"Abri Conta"} 
                w={'100%'} 
                p={'10px'} />
            </footer>
           </form>
                

        </main>
    )
}
    