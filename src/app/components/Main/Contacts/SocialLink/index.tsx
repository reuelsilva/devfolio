import Image from "next/image"
import ArrowUpRight from "./ArrowUpRight"

type SocialLinkProps = {
    social: string
    href: string,
    icon: string
}

export default function SocialLink(props: SocialLinkProps) {
    return (
        <a href={props.href} target="_blank" className='flex items-center gap-3 w-full bg-color-05 p-4 rounded-lg'>
            <Image src={props.icon} alt="" width={30} height={30} />
            <span className='text-color-03 font-medium'>{props.social}</span>
            <ArrowUpRight/>
        </a>
    )
}