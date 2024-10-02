import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { MyProjects } from "./components/MyProjects";
import { Social } from "./components/Social";

export default function Home() {
  return (
    <main>
      <Header/>
      <AboutMe/>
      <MyProjects/>
      <Social/>
    </main>
  )
}
