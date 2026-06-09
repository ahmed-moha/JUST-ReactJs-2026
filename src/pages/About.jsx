function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About</h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        This is a simple React app built with Vite and React Router. It demonstrates
        multi-page navigation using client-side routing.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Each page lives in its own file under the <code className="bg-gray-100 px-1 rounded">pages</code> folder,
        and routes are defined in a dedicated routes module.
      </p>
    </div>
  );
}

export default About;
