import { AboutMe } from "./(HomeComponents)/AboutMe";
import { Contacts } from "./(HomeComponents)/Contacts";
import Hero from "./(HomeComponents)/Hero";
import { Projects } from "./(HomeComponents)/Projects";
import { Skills } from "./(HomeComponents)/Skills";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />  
    </main>
  );
}
