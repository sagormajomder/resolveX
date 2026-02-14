'use client';

import { useState } from 'react';

export function Timestamp() {
  const [time] = useState(() => new Date().getFullYear());

  if (time) {
    return time;
  }
  return null;
}
