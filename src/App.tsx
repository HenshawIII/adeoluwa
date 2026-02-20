import { projects } from './data/projects';
import PortfolioHeader from './components/PortfolioHeader';
import ProjectCard from './components/ProjectCard';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-[#FBFBEB]">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <PortfolioHeader />
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#16160E] mb-2">Selected Projects</h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <p className="text-[#16160E] mb-2 md:mb-0">
              Click a project to read the story and browse images.
            </p>
            {/* <p className="text-sm text-gray-600">
              {projects.length} projects, 6 to 15 images each
            </p> */}
          </div>
          
          <div className="space-y-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <ContactSection />

        <footer className="mt-12 text-center text-sm text-gray-600">
          © 2026 Adéolúwa Edem Henshaw
        </footer>
      </div>
    </div>
  );
}

export default App;
