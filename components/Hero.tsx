const Hero = () => {
  return (
    <section className = "fullscreen background padding-container flex-row pb-32 md:gap-28 lg: py-20">
            {/* left side */}
            <div className = "text-center items-center text-white mt-7">
                <h2 className = "bold-52 lg: bold-88 animate-fadeInTop delay-700">Adhvytha Srigopal</h2>
                <p className = "regular-18 mt-6 animate-fadeInTop delay-700">
                Statistics and Analytics student at UNC Chapel Hill passionate about the applications of statistics and operations research to solve problems in business!
                </p>
            </div>    
            <div className = "mt-6 flexCenter overflow-visible animate-fadeInTop delay-700">
            <img src="headshot.png" alt="Headshot" className="w-1/2 md:w-1/3 lg:w-1/4 h-auto rounded-lg object-contain" />
            </div>
    </section>
  )
}

export default Hero
