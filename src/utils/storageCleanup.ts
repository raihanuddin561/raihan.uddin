/**
 * Utility to clean up localStorage and fix any malformed values
 * Run this in the browser console if you encounter localStorage-related errors
 */

// Function to clean up theme localStorage
function cleanupThemeStorage() {
  try {
    const theme = localStorage.getItem('theme');
    if (theme && theme !== 'light' && theme !== 'dark') {
      console.log('Cleaning up invalid theme value:', theme);
      localStorage.setItem('theme', 'light');
    }
  } catch (error) {
    console.error('Error cleaning up theme storage:', error);
  }
}

// Function to clean up all localStorage
function cleanupAllStorage() {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      try {
        const value = localStorage.getItem(key);
        if (value && key === 'theme') {
          // Ensure theme is valid
          if (value !== 'light' && value !== 'dark') {
            localStorage.setItem(key, 'light');
          }
        }
      } catch (error) {
        console.error(`Error processing localStorage key "${key}":`, error);
        // Remove problematic keys
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.error('Error cleaning up localStorage:', error);
  }
}

// Auto-run cleanup on import
if (typeof window !== 'undefined') {
  cleanupThemeStorage();
}

export { cleanupThemeStorage, cleanupAllStorage };
