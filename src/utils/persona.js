export function determinePersona(metrics) {
  const {
    totalRepos,
    totalCommits90,
    commitDays90,
    activeRepos,
    avgRepoLifespanMonths,
    reposWithReadme,
    languagesUsed,
    totalStars,
    totalForks,
  } = metrics;

  // The Builder – many repos, frequent commits
  if (totalRepos >= 10 && totalCommits90 >= 50 && commitDays90 >= 20) {
    return {
      name: "The Builder 🔨",
      description:
        "Many repos, frequent commits. You're constantly creating and shipping new projects!",
    };
  }

  // The Maintainer – few repos, long lifespan
  if (
    totalRepos <= 8 &&
    avgRepoLifespanMonths >= 12 &&
    activeRepos >= 2 &&
    reposWithReadme / totalRepos >= 0.5
  ) {
    return {
      name: "The Maintainer 🛠️",
      description:
        "Few repos, long lifespan. You focus on maintaining quality projects over time.",
    };
  }

  // The Explorer – many languages, short projects
  if (languagesUsed >= 5 && avgRepoLifespanMonths < 6 && totalRepos >= 8) {
    return {
      name: "The Explorer 🧭",
      description:
        "Many languages, short projects. You love experimenting with different technologies!",
    };
  }

  // The Silent Pro – low commit activity, but high impact
  if (totalCommits90 < 15 && totalStars + totalForks >= 20) {
    return {
      name: "The Silent Pro 🎯",
      description:
        "Low commit activity, but high impact. Your projects speak for themselves with significant stars and forks!",
    };
  }

  // The Ghost – public repos, low activity
  if (totalCommits90 < 10 && activeRepos <= 1) {
    return {
      name: "The Ghost 👻",
      description:
        "Public repos, low activity. Your projects are out there, but activity has been quiet lately.",
    };
  }

  // Fallback for users who don't fit the main categories
  if (totalCommits90 >= 30 && totalRepos >= 5) {
    return {
      name: "The Builder 🔨",
      description:
        "Many repos, frequent commits. You're constantly creating and shipping new projects!",
    };
  }

  if (totalRepos <= 5 && avgRepoLifespanMonths >= 6) {
    return {
      name: "The Maintainer 🛠️",
      description:
        "Few repos, long lifespan. You focus on maintaining quality projects over time.",
    };
  }

  // Default to Ghost for minimal activity
  return {
    name: "The Ghost 👻",
    description:
      "Public repos, low activity. Your projects are out there, but activity has been quiet lately.",
  };
}
