'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import LetsContact from "./components/LetsContact";
import { useEffect, useRef } from "react";  // Correcting the import
import { gsap } from "gsap";
import Sketch from "./components/Sketch";
import Script from "next/script";
import InteractiveStars from "./components/Sketch";

export default function Home() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const header = document.querySelector('h1');
    const paragraph = document.querySelector('p');
    const button = buttonRef.current;
    const tl = gsap.timeline();
  

    // Header animation starts 0.01 seconds after the paragraph animation completes
    tl.from(header, { y: -20, opacity: 0, duration: 0.5 })  
      .to(header, { y: 20, opacity: 1, duration: 0.3 });  // Header moves down

    // Paragraph animation
    tl.from(paragraph, { y: -20, opacity: 0, duration: 1 })  // Paragraph starts , "+=0.0001"off-screen and fades in
      .to(paragraph, { y: 20, opacity: 1, duration: 0.5 });  // Paragraph moves down

    tl.from(button, { y: -20, opacity: 0})
      .to(button, { y: 18, opacity: 1})
    
    
      // Hover animation
     // Define GSAP animations for hover effects
     const handleMouseEnter = () => {
      gsap.to(button, { 
        scale: 1.1, 
        boxShadow: '0px 0px 20px rgba(0, 255, 0, 0.5)', // Glow effect
        duration: 0.3, 
        ease: 'power2.out' 
      });
    };
    const handleMouseLeave = () => {
      gsap.to(button, { 
        scale: 1, 
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)', // Subtle shadow
        duration: 0.3, 
        ease: 'power2.out' 
      });
    };

    // Attach event listeners
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
    
  }, []); // Empty dependency array to run on component mount

  return (
    
    <main className="container mx-auto px-4 py-12">
      <Script src="https://codepen.io/Hyperplexed/pen/xxYJYjM/54407644e24173ad6019b766443bf2a6.js" strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly,`)
        }
      />
      <InteractiveStars />
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 header">Welcome to coderrrrr.site!</h1>
        <p className="text-xl mb-8">I'm a software developer working on many projects at the same time.</p>
        <Button asChild className="workbutton" ref={buttonRef}>
          <Link href="/projects">View My Work</Link>
        </Button>
      </section>
      
      <section id="about" className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
            <CardDescription>A brief introduction</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Hello! I'm Deva Midhun aka coderrrrr, a software developer with 5 years of experience using Linux and coding in Python. 
              I specialize in making Python apps. When I'm not coding, you can find me on Discord 
              or reading a book.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="projects" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="https://github.com/turbomaster95/dotmastr">
            <Card>
            <CardHeader>
              <CardTitle>Dotmastr</CardTitle>
              <CardDescription>A very easy to use dotfiles manager written in Python and compiled to C.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">This is my main project that I am working on. This took 2 months to complete writing, and it's still not complete!</p>
              <p>It contains the following commands:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>add</li>
                <li>remove</li>
                <li>list</li>
              </ul>
            </CardContent>
            </Card>
          </Link>
          <Card>
            <CardHeader>
              <CardTitle>Future Project</CardTitle>
              <CardDescription>Exciting new ideas in the pipeline</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Stay tuned for more innovative projects coming soon! I'm always exploring new technologies and looking for ways to solve interesting problems.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <LetsContact />
      
    </main>
    
  );
}
