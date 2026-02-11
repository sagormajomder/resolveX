'use client';

import { useState } from 'react';

export function Timestamp() {
  // Initialize state lazily with a function to avoid hydration issues
  // in 99.9% of cases, while being much more performant.
  const [time] = useState(() => new Date().getFullYear());

  if (time) {
    return time;
  }
  return null;
}
