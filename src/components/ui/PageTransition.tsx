// components/ui/PageTransition.tsx
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type PageTransitionProps = {
    children: ReactNode;
};

const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
};

const PageTransition = ({ children }: PageTransitionProps) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration: 0.8,
            }}
            className="flex-1"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;