import SocialLink from "./SocialLink";

export default function Contacts() {
    return (
        <section id="contact" className='p-6'>
            <h2 className="text-white text-2xl font-medium text-center">Contatos</h2>
            <div className='flex flex-col gap-3 w-full max-w-[400px] mx-auto mt-6'>
                <SocialLink
                    href="https://www.linkedin.com/in/reuelsilva"
                    icon="/social-icons/linkedin-icon.png"
                    social="LinkedIn"
                />

                <SocialLink
                    href="https://www.github.com/reuelsilva"
                    icon="/social-icons/github-icon.png"
                    social="GitHub"
                />

                <SocialLink
                    href="mailto:reuelsilva19@gmail.co"
                    icon="/social-icons/email-icon.png"
                    social="Email"
                />

                <SocialLink
                    href="https://wa.me/+5521996230995"
                    icon="/social-icons/whatsapp-icon.png"
                    social="WhatsApp"
                />
                
                <SocialLink
                    href="https://www.instagram.com/reueldev/"
                    icon="/social-icons/instagram-icon.png"
                    social="Instagram"
                />
            </div>
        </section>
    )
}