import { motion } from "framer-motion";

export default function SkeletonLoader() {
  const shimmer = {
    initial: { backgroundPosition: "200% 0" },
    animate: { backgroundPosition: "-200% 0" },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-md border border-gray-800">
        {/* Avatar skeleton */}
        <motion.div
          className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
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
          className="h-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded mb-4"
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
          className="h-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded mb-6"
          style={{
            backgroundSize: "200% 100%",
          }}
          variants={shimmer}
          initial="initial"
          animate="animate"
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />

        {/* Stats skeleton */}
        <div className="flex justify-center gap-6 text-gray-300 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <motion.div
                className="h-6 w-12 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded mb-2"
                style={{
                  backgroundSize: "200% 100%",
                }}
                variants={shimmer}
                initial="initial"
                animate="animate"
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
              <motion.div
                className="h-3 w-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded"
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
        <motion.div className="mb-6 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
          <motion.div
            className="h-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded mb-3"
            style={{
              backgroundSize: "200% 100%",
            }}
            variants={shimmer}
            initial="initial"
            animate="animate"
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
          <motion.div
            className="h-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded"
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
          className="h-12 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg mb-3"
          style={{
            backgroundSize: "200% 100%",
          }}
          variants={shimmer}
          initial="initial"
          animate="animate"
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
        <motion.div
          className="h-12 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg"
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
