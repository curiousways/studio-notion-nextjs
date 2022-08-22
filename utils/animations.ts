export const MobileNavContainerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 1,
    },
  },
};

export const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.7,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const listItemVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
