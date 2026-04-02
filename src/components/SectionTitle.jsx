import { motion } from 'framer-motion';

/**
 * SectionTitle — Animated section header with word-by-word clip reveal
 *
 * Props:
 *   title      — heading string (last word gets gradient color)
 *   subtitle   — optional subheading
 *   centered   — center align (default true)
 *   accentWord — which word index gets the gradient (default: last)
 *   tag        — heading element to render (default 'h2')
 */
const wordVariants = {
  hidden: {
    clipPath: 'inset(0 100% 0 0)',
    opacity: 0,
  },
  visible: (i) => ({
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.77, 0, 0.18, 1],
      delay: i * 0.1,
    },
  }),
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
  },
};

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  accentWord = -1, // -1 = last word
  tag: Tag = 'h2',
}) => {
  const words = title.split(' ');

  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <Tag
        className={`text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 leading-tight ${
          centered ? 'mx-auto' : ''
        }`}
      >
        {words.map((word, i) => {
          const isAccent =
            accentWord === -1
              ? i === words.length - 1
              : i === accentWord;

          return (
            <motion.span
              key={i}
              className="inline-block mr-3 overflow-hidden"
              variants={wordVariants}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <span
                className={
                  isAccent
                    ? 'gradient-text-blue-purple'
                    : 'text-[var(--text)]'
                }
              >
                {word}
              </span>
            </motion.span>
          );
        })}
      </Tag>

      {subtitle && (
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className={`text-base lg:text-lg text-[var(--text-muted)] leading-relaxed ${
            centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
