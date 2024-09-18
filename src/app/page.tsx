import React from "react";
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight, MailPlus, MouseIcon, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MyProjects from "@/components/projects";
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import CertificationsSection from "@/components/cert";
import Head from "next/head";
import CopyCmd from "@/components/copycmd";
import { FlipWordsDemo } from "@/components/words";
import { DockDemo } from "@/components/dock";
import HoverImageComponent from "@/components/skills";
import ReadmeDisplay from "@/components/readme";
import ContactMe from "@/components/contact";



const projects = [
    { title: ' UG_Lyrics', description: 'A Lyrics genarator built with React.', icon: <FaReact className='text-blue-500' /> },
    { title: 'UG_JARVIS', description: 'A Virtual Assistance project.', icon: <FaDatabase className='text-purple-500' /> },
    
   
 
  
  ];
  const certifications = [
    {
      id: 1,
      title: "SQL (Advanced)",
      image: "/assests/images/SQL.png",
      description: "Received the certificate for clearing the HACKERRANK SQL Advanced skills test",
      issuer: "HACKERRANK",
      date: "11-05-2024"
    },
    {
        id: 2,
        title: "JAVASCRIPT (Intermediate)",
      image: "/assests/images/JAVA SCRIPT.png",
      description: "Received the certificate for clearing the HACKERRANK JAVASCRIPT Intermediate skills test",
      issuer: "HACKERRANK",
      date: "11-05-2024"
      },
      {
        id: 3,
        title: "GO (Intermediate)",
        image: "/assests/images/GO.png",
        description: "Received the certificate for clearing the HACKERRANK GO Intermediate skills test",
        issuer: "HACKERRANK",
        date: "14-05-2024"
      },
   
      {
          id: 4,
          title: "PROBLEM SOLVING (Intermediate)",
          image: "/assests/images/PROBLEM SOLVING.png",
          description: "Received the certificate for clearing the HACKERRANK PROBLEM SOLVING Intermediate skills test",
          issuer: "HACKERRANK",
          date: "11-05-2024"
        },
  
        {
          id: 5,
          title: "REST API (Intermediate)",
          image: "/assests/images/REST API.png",
          description: "Received the certificate for clearing the HACKERRANK REST API Intermediate skills test",
          issuer: "HACKERRANK",
          date: "11-05-2024"
        },
  
        {
          id: 6,
          title: "REACT (Basic)",
          image: "/assests/images/REACT.png",
          description: "Received the certificate for clearing the HACKERRANK REACT Basic skills test",
          issuer: "HACKERRANK",
          date: "08-05-2024"
        },
  
        {
          id: 7,
          title: "JAVA (Basic)",
          image: "/assests/images/JAVA.png",
          description: "Received the certificate for clearing the HACKERRANK JAVA Basic skills test",
          issuer: "HACKERRANK",
          date: "10-04-2024"
        },
  
        {
          id: 8,
          title: "CSS (Basic)",
          image: "/assests/images/CSS.png",
          description: "Received the certificate for clearing the HACKERRANK CSS Basic skills test",
          issuer: "HACKERRANK",
          date: "12-05-2024"
        },
  
        {
          id: 9,
          title: "C Sharp (Basic)",
          image: "/assests/images/C Sharp.png",
          description: "Received the certificate for clearing the HACKERRANK C Sharp Basic skills test",
          issuer: "HACKERRANK",
          date: "08-05-2024"
        },
  
        {
          id: 10,
          title: "PYTHON (Basic)",
          image: "/assests/images/PYTHON.png",
          description: "Received the certificate for clearing the HACKERRANK PYHTON Basic skills test",
          issuer: "HACKERRANK",
          date: "07-05-2024"
        },
    // Add more certification objects...
  ];
const page = () => {
    return (
        <section className="lg:max-w-[50%] mt-20 md:mt-36 md:max-w-[90%] relative md:m-auto p-4 flex flex-col min-h-screen">
          
            <div className=" flex gap-3 flex-col justify-center items-left min-h-[60vh] lg:min-h-screen">
                <span className=" text-sm lg:text-md flex items-center gap-2 opacity-70 font-medium tracking-widest uppercase">
                    <Terminal size={17} />
                    Hi I am
                </span>
                <div className="flex items-center gap-3">
                    <h1 className="text-4xl flex gap-12 items-center flex-row md:text-7xl lg:text-8xl font-bold ">Unmesh</h1>
                    
                </div>
               
                <FlipWordsDemo />
                
               

           
                <div className="flex flex-col md:flex-row items-right mt-3 gap-1 md:gap-3">
                <CopyCmd />
            
    <DockDemo />
</div>
<HoverImageComponent />
<div>
<MyProjects projects={projects} />
</div>
<div>
  <ContactMe />
</div>



</div>



             

            


              
            
        </section>
    );
};

export default page;
