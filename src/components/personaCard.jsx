export default function PersonaCard({ persona }) {
  return (
    <div className="bg-app-bg p-4 rounded-xl border border-border-divider text-text-body">
      <h2 className="text-xl font-semibold text-text-primary">
        GitHub Persona: {persona.name}
      </h2>
      <p className="text-text-body font-medium mt-2">
        {persona.description}
      </p>
    </div>
  );
}
