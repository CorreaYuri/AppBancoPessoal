'use client';
import Logo from "@/components/logo"


import { useEffect, useState } from 'react';

type Article = {
    title: string;
    description: string;
    url: string;
};


export default function Main() {

    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadNews = async () => {
            try {
                const response = await fetch('/api/news');
                if (!response.ok) throw new Error('Erro ao buscar notícias');
                const data = await response.json();

                
                setArticles(data); // ajuste conforme o retorno real da API
            } catch (err) {
                console.error(err);
                setError('Não foi possível carregar as notícias');
            } finally {
                setLoading(false);
            }
        };

        loadNews();
    }, []);

    if (loading) return <p>Entrando...</p>;
    if (error) return <p>{error}</p>;


    return (

        <main className="mains flex flex-col h-screen space-y-2 p-2">
           
            <header className="">
                <div className="flex gap-3 items-center justify-between ">
                    <div>
                        <Logo width="110" subtitulo={""} />
                    </div>

                    <div className="text-xs text-white ">Fulano de tal</div>
                    <div className="text-white text-xs p-3">Menu</div>
                </div>

                <div className="text-white bg-black text-xs p-2">Cc:00001/001-1 A:0001/001/-1</div>
            </header>

            <section className="xl:w-90 border-1 space-x-5  border-slate-500/20 rounded-xl p-2 shadow-xl/25">
                <h2 className="text-xs items-center text-gray-600">News</h2>
               
                <div className=" flex overflow-x-auto scrollbar-hide  ">
                    {articles.map((article, index) => (

                    <div className="mainsSlider flex min-w-[315px] bg-slate-200/10 overflow-y-auto p-2 rounded-lg m-1">
                    <div key={index} className="   mb-4 h-30 w-full">
                        <div className=" ">
                            <h1 className="text-xs font-bold text-slate-400 flex">{article.title}</h1>
                        </div>
                        
                        <p className="text-sm">{article.summary}</p>
                        <span className="text-xs text-slate-200">{article.publishDate}</span><br/>
                        <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-slate-600 hover:underline"
                        >
                            Ler mais
                        </a>

                    </div>
                    </div>
                    
                ))}

                </div>
            

               

            </section>

            <nav>
                <div>
                    botoes de navegação
                </div>
            </nav>
            <section>
                <div>
                    <h1>Saldo Atual</h1>
                    <div>R$ 0,00</div>
                </div>

                <div>
                    <h1>Despesa Programada</h1>
                    <div>R$ 0,00</div>
                </div>

                <button>$</button>
            </section>
            <section>
                <p>Status</p>
                <div>
                    tabela de dados
                </div>
            </section>
            <footer>
                Gráfico de barras
            </footer>
        </main>




    )



}