const fadeInHeadingVariants = {
  from: {
    opacity: 0,
    x: 100,
  },

  to: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};

const fadeInVariants = {
  from: {
    opacity: 0,
    y: 100,
  },

  to: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

export { fadeInHeadingVariants, fadeInVariants };
