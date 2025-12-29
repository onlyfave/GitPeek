export function calculateMetrics(user, repos, commitsMap) {
  const now = new Date();

  let totalCommits90 = 0;
  let commitDays = new Set();
  let languages = new Map();
  let activeRepos = 0;
  let abandonedRepos = 0;
  let totalStars = 0;
  let totalForks = 0;
  let repoLifespans = [];
  let reposWithReadme = 0;

  repos.forEach((repo) => {
    totalStars += repo.stargazers_count;
    totalForks += repo.forks_count;

    const created = new Date(repo.created_at);
    const pushed = new Date(repo.pushed_at);
    const lifespanMonths = (pushed - created) / (1000 * 60 * 60 * 24 * 30);

    repoLifespans.push(lifespanMonths);

    if ((now - pushed) / (1000 * 60 * 60 * 24) <= 90) {
      activeRepos++;
    }

    if ((now - pushed) / (1000 * 60 * 60 * 24) > 365) {
      abandonedRepos++;
    }

    if (repo.language) {
      languages.set(repo.language, (languages.get(repo.language) || 0) + 1);
    }

    if (repo.has_wiki || repo.description) {
      reposWithReadme++;
    }
  });

  Object.values(commitsMap).forEach((commits) => {
    commits.forEach((c) => {
      const date = new Date(c.commit.author.date);
      if ((now - date) / (1000 * 60 * 60 * 24) <= 90) {
        totalCommits90++;
        commitDays.add(date.toDateString());
      }
    });
  });

  const avgRepoLifespan =
    repoLifespans.reduce((a, b) => a + b, 0) / repoLifespans.length;

  const dominantLanguagePercentage =
    Math.max(...languages.values(), 0) / repos.length;

  return {
    totalRepos: repos.length,
    activeRepos,
    abandonedRepos,
    totalCommits90,
    commitDays90: commitDays.size,
    languagesUsed: languages.size,
    dominantLanguagePercentage,
    avgRepoLifespanMonths: avgRepoLifespan,
    reposWithReadme,
    totalStars,
    totalForks,
  };
}

export function calculateHealthScore(metrics) {
  const {
    totalCommits90,
    commitDays90,
    activeRepos,
    totalRepos,
    languagesUsed,
    dominantLanguagePercentage,
    avgRepoLifespanMonths,
    reposWithReadme,
    totalStars,
    totalForks,
    abandonedRepos,
  } = metrics;

  // Activity (30%) - based on commit frequency and consistency
  const commitFrequency = Math.min(totalCommits90 / 50, 1) * 50; // Max 50 points for 50+ commits
  const commitConsistency = Math.min(commitDays90 / 30, 1) * 30; // Max 30 points for commits on 30+ days
  const activityScore = (commitFrequency + commitConsistency) * 0.3;

  // Code Focus (20%) - based on language diversity and specialization
  const diversityScore = Math.min(languagesUsed / 5, 1) * 50; // Max 50 points for 5+ languages
  const focusScore = (1 - dominantLanguagePercentage) * 50; // Balanced = higher score
  const codeFocusScore = (diversityScore * 0.6 + focusScore * 0.4) * 0.2;

  // Project Maintenance (30%) - based on active repos and project lifespan
  const activeRatioScore = (activeRepos / Math.max(totalRepos, 1)) * 50; // Max 50 points for high active ratio
  const lifespanScore = Math.min(avgRepoLifespanMonths / 24, 1) * 50; // Max 50 points for 2+ year avg lifespan
  const maintenanceScore = (activeRatioScore + lifespanScore) * 0.3;

  // Documentation & Collaboration (20%) - based on stars, forks, and readme
  const readmeRatio = (reposWithReadme / Math.max(totalRepos, 1)) * 40; // Max 40 points for docs
  const impactScore = Math.min((totalStars + totalForks) / 100, 1) * 60; // Max 60 points for impact
  const collaborationScore = (readmeRatio + impactScore) * 0.2;

  // Calculate final score
  const totalScore = Math.round(
    activityScore + codeFocusScore + maintenanceScore + collaborationScore
  );

  // Generate explanation
  const explanation = generateHealthExplanation(
    totalScore,
    commitDays90,
    activeRepos,
    totalRepos,
    reposWithReadme,
    languagesUsed,
    totalStars + totalForks
  );

  return {
    score: Math.max(0, Math.min(100, totalScore)), // Clamp between 0-100
    explanation,
    breakdown: {
      activity: Math.round(activityScore),
      codeFocus: Math.round(codeFocusScore),
      maintenance: Math.round(maintenanceScore),
      collaboration: Math.round(collaborationScore),
    },
  };
}

function generateHealthExplanation(
  score,
  commitDays90,
  activeRepos,
  totalRepos,
  reposWithReadme,
  languagesUsed,
  totalImpact
) {
  let explanation = "";

  if (score >= 80) {
    explanation = `Excellent GitHub health! You're consistently active with ${commitDays90} commit days in the last 90 days, maintaining ${activeRepos} active repos, and your projects have ${totalImpact} stars and forks combined. You're a well-rounded developer with strong documentation and community engagement.`;
  } else if (score >= 60) {
    explanation = `Good GitHub health! You maintain ${activeRepos} active repos out of ${totalRepos} with decent community engagement (${totalImpact} total impact). Keep improving consistency with commits and documentation to boost your score.`;
  } else if (score >= 40) {
    explanation = `Moderate GitHub health. You have ${totalRepos} repos but only ${activeRepos} are active. Consider focusing on maintaining fewer, well-documented projects, and increasing commit frequency to improve your health score.`;
  } else {
    explanation = `Your GitHub profile has room for improvement. Try being more consistent with commits, maintaining a few key projects actively, and adding documentation to increase community engagement.`;
  }

  return explanation;
}
