<template>
  <div class="crown-anim">
    <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" overflow="visible" class="crown-svg">
      <defs>
        <linearGradient id="crown-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff3b0" />
          <stop offset="35%" stop-color="#f5c542" />
          <stop offset="70%" stop-color="#d99820" />
          <stop offset="100%" stop-color="#7a4d05" />
        </linearGradient>

        <linearGradient id="crown-metal-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff8d6" />
          <stop offset="100%" stop-color="#a86f0e" />
        </linearGradient>

        <radialGradient id="crown-core" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stop-color="#ffe27a" />
          <stop offset="55%" stop-color="#f5a300" />
          <stop offset="100%" stop-color="#7a4d00" />
        </radialGradient>

        <radialGradient id="crown-side-gem" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0%" stop-color="#ff8fa3" />
          <stop offset="40%" stop-color="#e63946" />
          <stop offset="100%" stop-color="#3a0509" />
        </radialGradient>

        <linearGradient id="crown-shimmer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </linearGradient>

        <clipPath id="crown-clip">
          <path
            d="M 10 80 L 18 30 L 32 55 L 44 18 L 60 50 L 76 18 L 88 55 L 102 30 L 110 80 Z
               M 8 78 H 112 V 94 H 8 Z"
          />
        </clipPath>

        <filter id="crown-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g class="crown-glow-halo">
        <path
          d="M 10 80 L 18 30 L 32 55 L 44 18 L 60 50 L 76 18 L 88 55 L 102 30 L 110 80 Z"
          fill="none"
          stroke="#ffcf45"
          stroke-width="6"
          stroke-linejoin="round"
          opacity="0.6"
          filter="url(#crown-glow)"
        />
      </g>

      <g class="crown-body">
        <path
          d="M 10 80 L 18 30 L 32 55 L 44 18 L 60 50 L 76 18 L 88 55 L 102 30 L 110 80 Z"
          fill="url(#crown-metal)"
          stroke="url(#crown-metal-edge)"
          stroke-width="1.5"
          stroke-linejoin="round"
        />

        <path
          d="M 18 30 L 22 55 M 44 18 L 48 50 M 76 18 L 72 50 M 102 30 L 98 55"
          stroke="#fff3b0"
          stroke-width="0.7"
          stroke-linecap="round"
          opacity="0.75"
        />

        <rect x="8" y="78" width="104" height="16" rx="2" fill="url(#crown-metal)" stroke="url(#crown-metal-edge)" stroke-width="1.5" />
        <rect x="10" y="80" width="100" height="2" rx="1" fill="#fff8d6" opacity="0.75" />
        <rect x="8" y="92" width="104" height="3" rx="1" fill="#5c3a05" />

        <rect class="crown-shimmer" x="-40" y="0" width="40" height="100" fill="url(#crown-shimmer)" clip-path="url(#crown-clip)" />
      </g>

      <g class="crown-gems">
        <circle cx="24" cy="86" r="2.8" fill="url(#crown-side-gem)" stroke="#3a0509" stroke-width="0.4" />
        <circle cx="46" cy="86" r="2.8" fill="url(#crown-side-gem)" stroke="#3a0509" stroke-width="0.4" />
        <circle cx="74" cy="86" r="2.8" fill="url(#crown-side-gem)" stroke="#3a0509" stroke-width="0.4" />
        <circle cx="96" cy="86" r="2.8" fill="url(#crown-side-gem)" stroke="#3a0509" stroke-width="0.4" />

        <circle cx="22.8" cy="84.8" r="0.9" fill="#ffffff" opacity="0.9" />
        <circle cx="44.8" cy="84.8" r="0.9" fill="#ffffff" opacity="0.9" />
        <circle cx="72.8" cy="84.8" r="0.9" fill="#ffffff" opacity="0.9" />
        <circle cx="94.8" cy="84.8" r="0.9" fill="#ffffff" opacity="0.9" />

        <g class="crown-core-gem">
          <circle cx="60" cy="86" r="5.5" fill="url(#crown-core)" stroke="#7a4d00" stroke-width="0.5" />
          <text
            x="60"
            y="89.3"
            text-anchor="middle"
            font-family="'JetBrains Mono', monospace"
            font-weight="900"
            font-size="7.5"
            fill="#1a0d00"
          >₿</text>
        </g>

        <g class="crown-tip-spheres">
          <circle cx="18" cy="28" r="3.5" fill="url(#crown-metal)" stroke="url(#crown-metal-edge)" stroke-width="0.6" />
          <circle cx="44" cy="16" r="4" fill="url(#crown-metal)" stroke="url(#crown-metal-edge)" stroke-width="0.6" />
          <circle cx="60" cy="10" r="5" fill="url(#crown-core)" stroke="#7a4d00" stroke-width="0.6" />
          <circle cx="76" cy="16" r="4" fill="url(#crown-metal)" stroke="url(#crown-metal-edge)" stroke-width="0.6" />
          <circle cx="102" cy="28" r="3.5" fill="url(#crown-metal)" stroke="url(#crown-metal-edge)" stroke-width="0.6" />

          <circle cx="17" cy="26.7" r="1.1" fill="#ffffff" opacity="0.9" />
          <circle cx="42.7" cy="14.5" r="1.3" fill="#ffffff" opacity="0.9" />
          <circle cx="58.4" cy="8" r="1.7" fill="#ffffff" opacity="0.95" />
          <circle cx="74.7" cy="14.5" r="1.3" fill="#ffffff" opacity="0.9" />
          <circle cx="101" cy="26.7" r="1.1" fill="#ffffff" opacity="0.9" />
        </g>
      </g>

      <g class="crown-sparkles">
        <g class="crown-sparkle crown-sparkle-1">
          <path d="M 8 12 L 8 18 M 5 15 L 11 15" stroke="#ffe27a" stroke-width="0.8" stroke-linecap="round" />
        </g>
        <g class="crown-sparkle crown-sparkle-2">
          <path d="M 112 22 L 112 28 M 109 25 L 115 25" stroke="#ffe27a" stroke-width="0.8" stroke-linecap="round" />
        </g>
        <g class="crown-sparkle crown-sparkle-3">
          <path d="M 60 -4 L 60 2 M 57 -1 L 63 -1" stroke="#ffe27a" stroke-width="0.9" stroke-linecap="round" />
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.crown-anim {
  display: block;
  width: 100%;
  height: 100%;
  animation: crown-float 3.2s ease-in-out infinite;
}

.crown-svg {
  width: 100%;
  height: auto;
  display: block;
  overflow: visible;
}

.crown-glow-halo {
  animation: crown-pulse 2.4s ease-in-out infinite;
  transform-origin: 60px 50px;
}

.crown-core-gem {
  transform-origin: 60px 86px;
  animation: crown-gem-pulse 1.6s ease-in-out infinite;
}

.crown-tip-spheres circle:nth-child(3) {
  transform-origin: 60px 10px;
  animation: crown-gem-pulse 1.6s ease-in-out infinite 0.2s;
}

.crown-shimmer {
  animation: crown-shimmer-sweep 3.6s ease-in-out infinite;
}

.crown-sparkle {
  transform-origin: center;
  opacity: 0;
}

.crown-sparkle-1 {
  animation: crown-sparkle 2.8s ease-in-out infinite;
}

.crown-sparkle-2 {
  animation: crown-sparkle 2.8s ease-in-out infinite 0.9s;
}

.crown-sparkle-3 {
  animation: crown-sparkle 2.8s ease-in-out infinite 1.6s;
}

@keyframes crown-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-3px) rotate(0.8deg);
  }
}

@keyframes crown-pulse {
  0%, 100% {
    opacity: 0.45;
    transform: scale(1);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.05);
  }
}

@keyframes crown-gem-pulse {
  0%, 100% {
    filter: brightness(1) drop-shadow(0 0 1px rgba(255, 226, 122, 0.6));
  }
  50% {
    filter: brightness(1.35) drop-shadow(0 0 4px rgba(255, 226, 122, 0.95));
  }
}

@keyframes crown-shimmer-sweep {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    transform: translateX(180px);
    opacity: 1;
  }
  100% {
    transform: translateX(220px);
    opacity: 0;
  }
}

@keyframes crown-sparkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0.4);
  }
  40% {
    opacity: 1;
    transform: scale(1.2);
  }
  60% {
    opacity: 1;
    transform: scale(1);
  }
  80% {
    opacity: 0;
    transform: scale(0.6);
  }
}

@media (prefers-reduced-motion: reduce) {
  .crown-anim,
  .crown-glow-halo,
  .crown-core-gem,
  .crown-shimmer,
  .crown-sparkle,
  .crown-tip-spheres circle:nth-child(3) {
    animation: none;
  }
}
</style>
