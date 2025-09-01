import { interpolate } from "flubber";
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";

export default function PathMorphing() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.3,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
  }, [pathIndex, progress]);

  return (
    <svg width="400" height="400">
      <g transform="translate(10 10) scale(17 17)">
        <motion.path fill={fill} d={path} />
      </g>
    </svg>
  );
}

/**
 * ==============   Utils   ================
 */

const getIndex = (_, index) => index;

function useFlubber(progress, paths) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
  });
}

/**
 * ==============   Shape data   ================
 */

// Paths taken from https://github.com/veltman/flubber/blob/master/demos/basic-svg.html
const star =
  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

const lightning = "M7 2v11h3v9l7-12h-4l4-8z";
const note =
  "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z";

const paths = [star, note, lightning, star, note, lightning, star];
const colors = [
  "#7e22ce",
  "#0cdcf7",
  "#dd00ee",
  "#0cdcf7",
  "#0d63f8",
  "#0cdcf7",
  "#4ff0b7",
];
