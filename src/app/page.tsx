
import Logo from "@/components/logo"
import Btn from "@/components/btn"

export default function Home() {

  const listFunctionsLandingPage = [

    "✔︎ Controle seu dinheiro com clareza.",
    "✔︎ Veja suas finanças em tempo real.",
    "✔︎ Relatórios simples e intuitivos.",
    "✔︎ Ideal para autônomos e pequenos negócios.",
    "✔︎ Seguro, rápido e fácil de usar."

  ]



  return (
    <main className="mains flex flex-col justify-center items-center h-screen space-y-12">
      <header className="flex justify-between items-center p-4 text-white text-xs  w-full">
        <a href="/login">Acesse sua conta</a>
        <a href="/NovaConta">Abrir nova conta</a>

      </header>

      <div className="containerLogoLanding flex flex-col items-center justify-center ">
        <Logo subtitulo={"Bem-vindo"} />

      </div>
      <section className="text-white text-start space-y-4 px-4">
        <h2 className="text-2xl font-bold">Seu dinheiro sob controle</h2>
        <p className="text-sm">Organize suas finanças de forma simples e eficiente. Nosso sistema é ideal para autônomos e pequenos negócios que desejam ter uma visão clara de suas finanças.</p>

        <ul className="text-left list-inside space-y-2 max-w-md mx-auto">
          {listFunctionsLandingPage.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <footer className="flex justify-center">
        <Btn bgColor={"red"}
          colorText={"white"}
          texto={"Acessar"}
          w={'20em'}
          p={'10px'} />
      </footer>




    </main>
  );
}
