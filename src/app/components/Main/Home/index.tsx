import Image from "next/image";
import ArrowDownButton from "./ArrowDownButton";

export default function Home(){
    return(
        <section id="home" className="p-6 sm:h-[calc(100vh-72px)] bg-home md:bg-home-md bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col items-center gap-5">
                <Image src={"https://avatars.githubusercontent.com/u/109824495?v=4"} priority alt="Foto Reuel Silva" width={150} height={150} className="rounded-full"/>
                <h1 className="text-white font-semibold text-2xl">Olá, sou o dev Reuel! <span>👋</span></h1>
                <p className="max-w-lg text-color-03 text-center text-sm">Olá! Meu nome é Reuel Silva, sou desenvolvedor Front-end em nível Júnior, formado em Análise e Desenvolvimento de Sistemas pela Universidade Cruzeiro do Sul. Atualmente, dedico meu tempo a criar projetos pessoais que me ajudam a aprimorar minhas habilidades e expandir meu conhecimento na área.</p>
            </div>
            <ArrowDownButton/>
        </section>
    )
}