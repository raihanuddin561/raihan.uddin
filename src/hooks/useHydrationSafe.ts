'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook to handle hydration safely and prevent hydration warnings
 * caused by browser extensions that inject attributes like fdprocessedid
 */
export function useHydrationSafe() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated after first render
    setIsHydrated(true);
  }, []);

  return isHydrated;
}

/**
 * Hook to get a stable client-side only value
 * This prevents hydration mismatches for values that might differ between server and client
 */
export function useClientOnly<T>(serverValue: T, clientValue: T): T {
  const [value, setValue] = useState<T>(serverValue);
  
  useEffect(() => {
    setValue(clientValue);
  }, [clientValue]);

  return value;
}

/**
 * Hook to safely access localStorage without hydration warnings
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        // Handle both JSON and plain string values
        try {
          setStoredValue(JSON.parse(item));
        } catch {
          // If JSON parsing fails, treat it as a plain string
          setStoredValue(item as T);
        }
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
    }
  }, [key]);

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      // Store as JSON for objects, plain string for strings
      if (typeof value === 'string') {
        window.localStorage.setItem(key, value);
      } else {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}
