import { motion } from "framer-motion";

export default function SkeletonLoader() {
  const shimmer = {
    initial: { backgroundPosition: "200% 0" },
    animate: { backgroundPosition: "-200% 0" },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-app-bg text-text-body px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-card-primary rounded-xl shadow-lg p-8 w-full max-w-2xl border border-border-divider">
        {/* Avatar skeleton */}
        <motion.div
          className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-r from-card-secondary via-[#3A2850] to-card-secondary"
          style={{
            backgroundSize: "200% 100%",
          }}
          variants={shimmer}
          initial="initial"
          animate="animate"
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />

        {/* Name skeleton */}
        <motion.div
          className="h-8 bg-gradient-to-r from-card-secondary via-[#3A2850] to-card-secondary rounded mb-4"
          style={{
            backgroundSize: "200% 100%",
          }}
          variants={shimmer}
          initial="initial"
          animate="animate"
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />

        {/* Bio skeleton */}
        <motion.div
          className="h-4 bg-gradient-to-r from-card-secondary via-[#3A2850] to-card-secondary rounded mb-6"
          style={{
            backgroundSize: "200% 100%",
          }}
          variants={shimmer}
          initial="initial"
          animate="animate"
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />

        {/* Stats skeleton */}
        <div className="flex justify-center gap-6 text-text-muted mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <motion.div
                className="h-6 w-12 bg-gradient-to-r from-card-secondary via-[#3A2850] to-card-secondary rounded mb-2"
                style={{
                  backgroundSize: "200% 100%",
                }}
                variants={shimmer}
                initial="initial"
                animate="animate"
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
              <motion.div
                className="h-3 w-16 bg-gradient-to-r from-card-secondary via-[#3A2850] to-card-secondary rounded"
                style={{
                  backgroundSize: "200% 100%",
                }}
                variants={shimmer}
                initial="initial"
                animate="animate"
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            </div>
          ))}
        </div>

        {/* Persona card skeleton */}
        <motion.div className="mb-6 p-4 bg-app-bg rounded-xl border border-border-divider">
          <motion.div
            className="h-6 bg-gradient-to-r from-card-secondary via-[#3A2850] to-card-secondary rounded mb-3"
            style={{
              backgroundSize: "200% 100%",
            }}
            variants={shimmer}
            initial="initial"
            animate="animate"
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
          <motion.div
            className="h-4 bg-gradient-to-r from-card-secondary via-[#3A2850] to-card-secondary rounded"
            style={{
              backgroundSize: "200% 100%",
            }}
            variants={shimmer}
            initial="initial"
            animate="animate"
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </motion.div>

        {/* Button skeletons */}
        <motion.div
          className="h-12 bg-gradient-to-r from-card-secondary via-[#3A2850] to-card-secondary rounded-full mb-3"
          style={{
            backgroundSize: "200% 100%",
          }}
          variants={shimmer}
          initial="initial"
          animate="animate"
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
        <motion.div
          className="h-12 bg-gradient-to-r from-card-secondary via-[#3A2850] to-card-secondary rounded-full"
          style={{
            backgroundSize: "200% 100%",
          }}
          variants={shimmer}
          initial="initial"
          animate="animate"
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
