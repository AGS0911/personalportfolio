const About = () => {
  return (
    <section className ="fullscreen background padding-container md:gap-20 lg: py-20">
    <div className = "flexCenter flex-0">
      <h1 className = "bold-52 lg: bold-88 text-white animate-fadeInTop">About Me</h1>
    </div>    
      <div className = "grid sm:grid-cols-1 md:grid-cols-2 mt-4">
        <div className = "space-y-4 animate-fadeInLeft"> 
          
          <h2 className = "bold-32 lg: bold-52 text-white">Background</h2>
          <p className = "text-bubble text-shadow regular-16 text-blue-800 text-center xl:max-w-[520px]">
             I was born and raised in the Chicagoland Area. When I was younger, I originally wanted to be a lawyer until I discovered my love of math and statistics. Now, I want to integrate my love of statistics and STEM comunication into my career. In the future, I would like to pursue a PhD and spend time in industry while teaching on the side.
          </p>

          <h2 className = "bold-32 lg: bold-52 text-white">Interests</h2>
             <p className = "text-bubble text-shadow regular-16 text-blue-800 text-center xl:max-w-[520px]">
              Careerwise, I’m interested in statistics and operations research and their applications in decision science to help optimize business operations. In my free time, I love to hike, stay active, read, and spend time with my friends and family. When I’m not working, I’m usually grabbing a bite to eat or getting coffee while spending time with my friends.
             </p>

             <h3 className = "bold-32 lg: bold-52 text-white">My Philosophy</h3>
             <p className = "text-bubble text-shadow regular-16 text-blue-800 text-center xl:max-w-[520px]">
              I am a firm believer in the idea that to be a good leader, you not only have to be a good problem-solver but an even better problem-finder to anticipate challenges and pave the way to future success.
             </p>
        </div>
        {/* images */}
        <div className="flex flexCenter flex-col pt-5 space-y-8 animate-fadeInRight">
        <img src="chicago.jpeg" alt="Chicago" className="w-full md:w-[80%] lg:w-[75%] h-auto rounded-lg object-cover" />
        <div className="flex justify-center gap-4 w-full md:w-[60%] lg:w-[70%]">
           <img src="graduation.jpeg" alt="Graduation" className="w-1/2 h-auto rounded-lg object-cover" />
           <img src="australia.jpeg" alt="Australia" className="w-1/2 h-auto rounded-lg object-" />
         </div>
        </div>
      </div>
    </section>
  )
}

export default About