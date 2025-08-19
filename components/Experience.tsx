
const Experience = () => {
  return (
    <section className ="fullscreen background padding-container md:gap-20 lg: py-20">
    <div className = "flexCenterx">  
      <h1 className = "bold-52 lg: bold-88 text-white sm:text-center justify-center animate-fadeInTop">Prior Experience</h1>
    </div>
    <div className="space-y-5 mt-6 animate-fadeInLeft"> 
          <h2 className = "bold-32 lg: bold-52 text-white ">Institute for Risk Management and Insurance Innovation</h2>
          <div className ="text-bubble text-shadow">
            <p className = "bold-18 text-blue-800">Research Assistant</p>
            <p className = "regular-16 text-blue-800 mt-0">September 2024-Present</p>
             <p className = "regular-16 text-blue-800 mt-3 w-full">
               At IRMII, I am analyzing cybersecurity datasets to rank the risks of using different software vendors based on their vulnerability data. I have been working on building a graph database to connect different vulnerability datasets to the MITRE Att&ck Framework.
              </p>
          </div>
          <h2 className = "bold-32 lg: bold-52 text-white ">Alpha Kappa Psi</h2>
          <div className ="text-bubble text-shadow">
            <h1 className = "bold-18 text-blue-800">Operations Committee Chair</h1>
            <p className = "regular-16 text-blue-800 mt-0">September 2024-Present</p>
            <p className = "regular-16 text-blue-800 mt-3 w-full">
            At AK Psi, I am leading the planning and execution of chapter events while identifying and streamlining operational efficiencies. On the committee, we are working on optimizing resource allocation and the recruitment process while working with a 10K+ budget.
            </p>
          </div>
            
          <h2 className = "bold-32 lg: bold-52 text-white ">Indiana University—Bloomington</h2>
          <div className ="text-bubble text-shadow">
            <p className = "bold-18 text-blue-800">Research Intern</p>
            <p className = "regular-16 text-blue-800 mt-0">December 2022-August 2023</p>
             <p className = "regular-16 text-blue-800 mt-3 w-full">
             Supervised by Dr. John Beggs as a research intern simulating neural spike patterns using in-vivo and cortical cell array data in MATLAB. Analyzed raster plots and phase diagrams of neuronal systems to identify when cell arrays and biological systems were operating at criticality.
             </p>
          </div>
        </div>
    

    </section>
  )
}

export default Experience