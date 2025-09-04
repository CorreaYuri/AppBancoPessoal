import Btn from "@/components/btn";
import Logo from "@/components/logo";

export default function login(){

    return (
        <main className="mains bg-red-500  space-y-10 "> 
            <main className="mainPageInfoLogin space-y-15 w-full flex flex-col invisible  absolute h-full items-center justify-center  ">
                <div>
                    <h1 className="text-3xl text-white">Loguin</h1>
                </div>
                <div className="border-1 border-stone-500/10 h-50 rounded-xl   p-15 shadow-xl/30">
                
                    <h1>Entrando, por favor agurade...</h1>
                    <h2>Sr.Cliente</h2>
                    <span>Hora de login: Hora</span>
                    <span>Data: 05/08/2336</span>
                    <span>


                    </span>
                </div>

            </main>
            <header className="flex flex-col justify-between items-center p-4 text-white text-xs pt-15 ">

                <a href="/"><Logo subtitulo={"Acesse sua conta"} /></a>
            </header>
            <div className="flex flex-col items-center justify-center h-90">
                <form className="w-85 space-y-10">
                    <div className="text-white">  
                    <label className="ml-2" htmlFor="usuario">Nome</label>
                    <input type="text" placeholder="Digite seu nome de usuário" className="mt-1 p-2 rounded-lg border-1 border-white w-full"/>
                    <span className="text-xs text-red-600 hidden " >Nome de usuário Inválido</span>
                    </div>

                    <div className="text-white">  
                    <label className="ml-2" htmlFor="senha">Senha</label>
                    <input type="text" placeholder="Digite sua senha" className="mt-1 p-2 rounded-lg border-1 border-white w-full"/>
                    <span className="text-xs text-red-600 hidden " >Senha errada!</span>
                    </div>
                    
                    <footer className="flex flex-col justify-center">
                          <Btn   
                          bgColor={"red"} 
                          colorText={"white"} 
                          texto={"Acessar"} 
                          w={'100%'} 
                          p={'10px'} />
                          
                    </footer>
                    <footer className="text-white text-sm " >
                        <a href="http://">Esqeuci minha senha</a>
                          <div className="space-x-3">
                            <span id="SaveDadoslogin">Confiar nesse dispositivo</span>
                            <input type="checkbox" name="saveDadosLogin" id="" />
                            
                          </div>
                    </footer>
                </form>
                <main className="mainLoginAnotherWay  w-90 pt-5">

                    <div className="border-t-1 p-2 text-white">
                        <h1>Logar de outro jeito</h1>
                        Api para logar com outras contas

                    </div>
                    
                </main>

            </div>
    

        </main>
    )


}