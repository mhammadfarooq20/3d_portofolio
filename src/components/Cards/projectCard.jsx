// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { github } from "../../assets";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";

export default function projectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      test
    </motion.div>
  );
}
