export default function Stats() {
  const stats = [
    {
      number: "5,000+",
      label: "Learners Trained",
    },
    {
      number: "150+",
      label: "Professional Courses",
    },
    {
      number: "50+",
      label: "Expert Trainers",
    },
    {
      number: "12+",
      label: "Countries Reached",
    },
  ];

  return (
    <section className="bg-blue-900 py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <h2 className="text-4xl font-extrabold">
              {stat.number}
            </h2>

            <p className="mt-3 text-lg text-blue-100">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}