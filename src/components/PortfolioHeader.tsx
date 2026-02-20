export default function PortfolioHeader() {
  const roles = ['Artist', 'Designer', 'Illustrator', 'Art Director'];

  return (
    <div className="bg-[#FAFADE] shadow-sm border border-gray-800 p-8 mb-8 flex flex-col md:flex-row md:items-center md:gap-8">
      <div className="flex-1">
      <div className="mb-2 text-sm text-gray-500">Portfolio</div>
      <h1 className="text-4xl md:text-5xl font-bold text-[#16160E] mb-4">
      Adéolúwa Edem Henshaw
      </h1>
      <p className="text-lg text-[#16160E] mb-6 max-w-2xl">
      Hi, I’m Adeoluwa, a digital artist and graphic designer.
I make visual stories through illustration, design, and art direction.
Take a look through a few selected projects below.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {roles.map((role, index) => (
          <span
            key={index}
            className="px-4 py-2 text-[#16160E]  text-sm italic"
          >
            {role}
          </span>
        ))}
      </div>
      {/* <div className="flex gap-4">
        <button className="px-6 py-3 bg-[#16160E] text-white  hover:bg-[#2a2a1a] transition-colors duration-200">
          View Projects
        </button>
        <button className="px-6 py-3 border-2 border-[#16160E] text-[#16160E]  hover:bg-[#16160E] hover:text-white transition-colors duration-200">
          Contact
        </button>
      </div> */}
      </div>
      <div className="flex-shrink-0 mt-6 md:mt-0">
        <img src="/ade.png" alt="Daniel Adeoluwa Henshaw" className=" object-cover max-w-xs w-full" />
      </div>
    </div>
  );
}

