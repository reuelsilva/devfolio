import { useEffect } from "react";

function useScroll() {
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();

        const element = event.currentTarget as HTMLElement;
        const id = element.getAttribute("href");
        if (id) {
          const section = document.querySelector(id);
          if (section && section instanceof HTMLElement) {
            const distanceFromTop = section.offsetTop;
            window.scroll({
              top: distanceFromTop - 60,
              behavior: "smooth",
            });
          }
        }
      })
    }, [])
  }
  )
}

export default useScroll