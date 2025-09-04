"use client"
import React from 'react';



export default function Btn({ bgColor, colorText, texto, w, p}: { bgColor: string , colorText: string, texto: string, w: string, p: string}
    ) {
    
        function handleClick() { 

            if(texto == "Acessar"){
                return alert("Bem-vindo ao Banco Pessoal! Estamos aqui para ajudar você a gerenciar suas finanças de forma simples e eficiente. Explore nossas funcionalidades e veja como podemos facilitar sua vida financeira.")

            }if(texto == "Cadastrar"){
                return alert("Cadastro realizado com sucesso! Agora você pode acessar sua conta e começar a gerenciar suas finanças de forma simples e eficiente.")         
            
            }if(texto == "Abri Conta"){
                
                return alert("Parabéns por abrir sua conta no Banco Pessoal! Estamos empolgados em tê-lo conosco. Explore nossas funcionalidades e veja como podemos ajudar você a gerenciar suas finanças de forma simples e eficiente.")
            }
        
         }

    
    
        return(

        
        <button onClick={handleClick} className=" rounded-xl" 
        style={{ background:bgColor, 
        width:w, padding:p,
        color:colorText}} >
        {texto}
        </button>


    )
}