export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Welcome to ICGA
        </span>

        <h1 className="mt-6 text-6xl font-extrabold text-slate-900">
          Impact Capacity Global Academy
        </h1>

        <p className="mt-4 text-2xl font-medium text-blue-700">
          Capacity for Change | Skills for Impact
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          Empowering Africa with world-class training in Data Science,
          Artificial Intelligence, MEAL, Research, and Digital Transformation.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-blue-700 px-8 py-4 text-white hover:bg-blue-800">
            Explore Courses
          </button>

          <button className="rounded-lg border border-blue-700 px-8 py-4 text-blue-700 hover:bg-blue-50">
            Learn More
          </button>
        </div>

      </section>
    </main>
  );
}