import { STACK_ICONS } from "@/app/constants/STACK_ICONS";
import Image from "next/image";

export default function Skills(){
    return(
        <section id="skills" className="p-6">
            <h2 className="text-white text-2xl font-medium text-center">Habilidades</h2>
            <p className="text-color-03 text-base font-normal text-center mt-2">Linguagens, Frameworks, Bancos de Dados e mais</p>
            <div className="grid grid-cols-[repeat(2,80px)] auto-rows-[80px] gap-3 justify-center mt-6 sm:grid-cols-[repeat(3,80px)]">
                {
                    STACK_ICONS.map((item, index:number) => {
                        return(
                            <div key={index} className="flex flex-col items-center justify-evenly bg-color-05 p-2 rounded-lg">
                                <Image src={item.url} alt={item.nome} width={30} height={30}/>
                                <h3 className="text-white text-xs font-normal text-center">{item.nome}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}