import type { GetStaticProps, } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Link from 'next/link';
import { Experience, PageInfo, Project, Skill, Social } from '../typing';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProject } from '../utils/fetchProjects';
import { fetchSocial } from '../utils/fetchSocials';


type Props ={
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects:Project[];
  socials:Social[];

};
const Home = ({ pageInfo, experiences,skills, projects,  socials} :Props ) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen 
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80' >
      <Head>
        <title>{pageInfo.name} - Portfolio</title>
      </Head>
      <Header socials ={socials}/>
      {/* Hero */}
      <section id= "hero" className='snap-start'>
      <Hero pageInfo={pageInfo} /> 
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      {/* Experience */}
      <section id="experience" className='snap-center'>
        <WorkExperience  experiences= {experiences}/>
      </section>

      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-center'>
        <Contact />
      </section>
      <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
          src="https://lh3.googleusercontent.com/a-/ACNPEu8eJeRtqn3pJZxS5MREMxEKSecozMCGSYQgG23nog=s288-p-rw-no" 
          alt="" />
        </div>
      </footer>
      </Link>
    </div>
  )
}

export default Home; 

export const getStaticProps: GetStaticProps<Props> =async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocial();

  return{
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate:10,
  };
}