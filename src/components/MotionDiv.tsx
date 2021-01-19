import {motion} from "framer-motion";
import './MotionDiv.scss';

export const MotionDiv = ({children}: any) => (
	<motion.div
		className="motion"
		initial="initial"
		animate="in"
		exit="out"
		variants={{
			initial: {
				opacity: 0,
			},
			in: {
				opacity: 1,
			},
			out: {
				opacity: 0,
			}
		}}
		transition={{
			duration: 0.5
		}}
	>
		{children}
	</motion.div>
);
