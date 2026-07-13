export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 Empowering Africa Through Digital Skills
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">
            Build Your Future With
            <span className="block text-blue-700">
              Impact Capacity Global Academy
            </span>
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-600">
            Learn Data Science, Artificial Intelligence, Monitoring,
            Evaluation, Accountability and Learning (MEAL), Research,
            and Digital Transformation through practical,
            industry-focused programmes designed for Africa.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="rounded-lg bg-blue-700 px-8 py-4 font-semibold text-white hover:bg-blue-800">
              Explore Courses
            </button>

            <button className="rounded-lg border border-blue-700 px-8 py-4 font-semibold text-blue-700 hover:bg-blue-50">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}