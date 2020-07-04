import { motion } from 'framer-motion';
export default function Poems() {
    return (
        <motion.div
            exit={{ x: "100%" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: "#1f535b", height: "100vh", width: "100%" }}
        >
            <h1>hello poems</h1>
        </motion.div>
    )
}