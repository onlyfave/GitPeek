import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="mt-8 flex justify-center"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1 }}
    >
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full" />
    </motion.div>
  );
}


export default Loader();