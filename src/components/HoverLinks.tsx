import Link from "next/link";
import { motion } from "motion/react";

type HoverLinkProps = {
  text: string;
  href: string;
  className?: string;
  hoverColor?: string;
  isActive?: boolean;
  onClick ?: ()=>void
};



const HoverLink = ({
  text,
  href,
  className = "",
  hoverColor = "bg-subheading-cake",
  isActive = false
}: HoverLinkProps) => {


  return (
    <Link href={href} className="w-fit">
      <motion.div
        className={`relative w-fit cursor-pointer ${className}`}
        initial="initial"
        whileHover="hover"
      >
        <span>{text}</span>

        <motion.div
          variants={{
            initial: { clipPath: isActive ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" },
            hover: { clipPath: "inset(0% 0% 0% 0%)" },
          }}
          transition={{
            duration: 0.4,
            ease: [0.83, 0, 0.17, 1],
          }}
          className={`absolute  bottom-0 left-px w-full h-0.5 ${hoverColor}`}
        />
      </motion.div>
    </Link>
  );
};

export default HoverLink;