import { easeInOut } from "framer-motion";

// ✅ Slow fade-in
export const slowFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.6, ease: easeInOut }
  }
};

// ✅ Fade & slide up softly
export const slowUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.6, ease: easeInOut }
  }
};

// ✅ Fade & slide down softly
export const slowDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.6, ease: easeInOut }
  }
};

// ✅ Parallax motion effect
export const parallax = (scrollY = 0.2) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: scrollY,
    transition: { duration: 1.8, ease: easeInOut }
  }
});

// ✅ Slight scale reveal (minimal)
export const slowScale = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.6, ease: easeInOut }
  }
};
