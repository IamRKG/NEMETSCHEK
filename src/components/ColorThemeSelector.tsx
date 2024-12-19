import { motion } from 'framer-motion';
import { useColorTheme } from '../context/ColorThemeContext';

const themeButtons = [
  { name: 'default', label: 'Default' },
  { name: 'dark', label: 'Dark' },
  { name: 'nature', label: 'Nature' }
] as const;

export const ColorThemeSelector = () => {
  const { theme, setTheme, colors } = useColorTheme();

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-4 p-4"
    >
      {themeButtons.map(({ name, label }) => (
        <motion.button
          key={name}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTheme(name)}
          className={`
            px-4 py-2 rounded-lg transition-colors duration-200
            ${theme === name ? 'ring-2 ring-offset-2' : ''}
          `}
          style={{
            backgroundColor: theme === name ? colors.primary : colors.background,
            color: theme === name ? colors.background : colors.text
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {label}
          </motion.span>
        </motion.button>
      ))}
    </motion.div>
  );
};
