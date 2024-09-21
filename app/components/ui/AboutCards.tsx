import React from "react";
import { useId } from "react";
import { motion } from "framer-motion";

export function FeaturesSectionDemo() {
  const Cardsvariants = [
    {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
      x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
    {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.2, ease: "easeOut" },
      },
    },
    {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.6, ease: "easeOut" },
      },
    },
    {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 2, ease: "easeOut" },
      },
    },
  ];

  return (
    <>
      {grid.map((feature, index) => (
        <motion.div
          key={feature.icon}
          variants={Cardsvariants[index]} // Select the corresponding variant for each feature
          initial="hidden"
          whileInView="visible" // Animation triggers on scroll
          viewport={{ once: true }} // Trigger animation only once
          className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-2 rounded-3xl overflow-hidden"
        >
          <Grid size={20} />
          <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-[2]">
            {feature.text}
          </p>
        </motion.div>
      ))}
    </>
  );
}

const grid = [
  {
    icon: "process",
    text: "Make online appointments with one simple step",
  },
  {
    icon: "flexible or tick",
    text: "We are flexible and can accommodate any service you need",
  },
  {
    icon: "respond or quick",
    text: "We respond quickly to your order-related needs",
  },
  {
    icon: "trust or satisfaction",
    text: "We provide 100% customer satisfaction",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_right,transparent)] dark:from-yellow-400 from-yellow-100 to-yellow-300 dark:to-yellow-400 opacity-100">
        <GridPattern
          width={size ?? 40}
          height={size ?? 40}
          x="-6"
          y="8"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-[#020635] dark:stroke-[#020635] stroke-[#000b2e] fill-[#000424]"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={2}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="2"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
