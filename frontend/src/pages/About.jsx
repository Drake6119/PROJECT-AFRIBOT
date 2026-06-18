// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="min-h-screen bg-white text-white">


      <section className="max-w-6xl mx-auto px-6 py-10">

        <p className="text-red-600 text-6xl  mb-4 font-serif ">
          ABOUT US
        </p>

        <h1 className="text-4xl font-bold mb-6">
          Welcome to Afribot Skills Centre.
        </h1>

        <p className="text-black max-w-3xl">
          At Afribot, we inspire creativity,
          critical thinking and problem solving
          through hands-on STEM and robotics
          programs. Our goal is to equip young
          learners with skills needed in the
          modern technological world.
        </p>

      </section>

      <section className=" mx-auto px-6 pb-20">
       <div>
         
  <h2 className="text-3xl font-bold mb-8">
    Why Choose Afribot?
  </h2>

  <ul className="space-y-4 text-black">

    <li>• Engaging project-based learning</li>

    <li>• Experienced instructors</li>

    <li>• Pathway from beginner to advanced</li>

    <li>• Innovation competitions</li>

    <li>• Real-world project exposure</li>

  </ul>
  <br/>


  
  <div className="bg-[#e81a1a] border border-red-950 rounded-2xl p-8 w-100 mx-auto">
    <h2 className="text-3xl font-bold mb-4">
      APPRENTICESHIP
    </h2>
      <p className="text-black max-w-2xl font-cursive">
        We offer Apprenticeship Opportunities to Innovative Students 
        who have shown dedication to change the world by creating solutions
      </p>

  </div>
       </div>
 
 

</section>

<section className="max-w-6xl mx-auto px-6 pb-20">

  <h2 className="text-3xl font-bold mb-10">
    Products & Services
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-[#ca0909] border border-[#ca0909] rounded-2xl p-6">

      <h3 className="font-bold text-xl mb-3">
        STEM Education and Training
      </h3>

      <p className="text-white-400">
        Hands-on robotics, coding, design and technology programs that nurture creativity and problem solving 
        for learners of all ages.
      </p>

    </div>

    <div className="bg-[#ac0505] border border-[#ac0505] rounded-2xl p-6">

      <h3 className="font-bold text-xl mb-3">
        Industrial Automation
      </h3>

      <p className="text-white-400">
        Delivering solutions in smart operations,predictive maintenance, and custom automation systems 
        across different industries, from hospitality,health,manufacturing,security  and
        logistics.
      </p>

    </div>

    <div className="bg-[#bc0808] border border-[#be0f0f] rounded-2xl p-6">

      <h3 className="font-bold text-xl mb-3">
        Research & Development
      </h3>

      <p className="text-white-400">
        Driving innovation with projects that explore using robotics,
        AI ,electronics and modern technologies.
      </p>

    </div>

  </div>

</section>

 

    </div>
  
  );
}

export default About;