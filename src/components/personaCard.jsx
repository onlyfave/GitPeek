export default function PersonaCard({ persona }) {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl border border-emerald-800">
      <h2 className="text-xl font-bold text-white">
        GitHub Persona: {persona.name}
      </h2>
      <p className="text-zinc-400 mt-2">
        {persona.description}
      </p>
    </div>
  );
}
