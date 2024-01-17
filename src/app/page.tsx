import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { MyProjects } from "./components/MyProjects";

export default function Home() {
  return (
    <main>
      <Header/>
      <AboutMe/>
      <MyProjects/>
    </main>
  )
}
