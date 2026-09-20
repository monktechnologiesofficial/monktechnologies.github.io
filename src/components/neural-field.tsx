export function NeuralField({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 640 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#0066ff" strokeOpacity="0.28" strokeWidth="1">
        <line x1="80" y1="90" x2="220" y2="160" />
        <line x1="220" y1="160" x2="360" y2="80" />
        <line x1="360" y1="80" x2="520" y2="140" />
        <line x1="80" y1="90" x2="140" y2="260" />
        <line x1="140" y1="260" x2="280" y2="300" />
        <line x1="220" y1="160" x2="280" y2="300" />
        <line x1="360" y1="80" x2="400" y2="240" />
        <line x1="400" y1="240" x2="520" y2="140" />
        <line x1="280" y1="300" x2="400" y2="240" />
        <line x1="280" y1="300" x2="460" y2="380" />
        <line x1="400" y1="240" x2="560" y2="320" />
        <line x1="520" y1="140" x2="560" y2="320" />
        <line x1="140" y1="260" x2="80" y2="400" />
      </g>
      {[
        [80, 90],
        [220, 160],
        [360, 80],
        [520, 140],
        [140, 260],
        [280, 300],
        [400, 240],
        [460, 380],
        [560, 320],
        [80, 400]
      ].map(([x, y], i) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 6 : 4}
          fill={i % 2 === 0 ? "#ffb800" : "#0066ff"}
          fillOpacity={i % 2 === 0 ? 0.9 : 0.7}
        />
      ))}
    </svg>
  );
}
