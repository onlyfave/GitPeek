function About() {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-3xl font-bold text-blue-400 mb-4">About GitHub Finder</h2>
      <p className="max-w-md text-gray-300">
        GitHub Finder lets you explore developer profiles by username using the GitHub API.
        Built with React, TailwindCSS, and Framer Motion — this project showcases API integration,
        routing, and responsive UI design.
      </p>
    </div>
  );
}

export default About();