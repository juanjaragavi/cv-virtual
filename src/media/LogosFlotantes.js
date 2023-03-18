import React from "react";
import { motion } from "framer-motion";

const transition = {
  duration: 8,
  ease: "easeInOut",
  repeat: Infinity,
  repeatDelay: 0,
};

function LogosFlotantes() {
  return (
    <main className="contenedor-logos-flotantes">
      <article className="subcontenedor-logos-flotantes">
        <motion.svg
          className="google-about"
          viewBox="0 0 512 512"
          animate={{
            y: [5, -5, 5, -5, 5],
            x: [-5, 5, 5, -5, -5],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={transition}
        >
          <g className="dark-svg">
            <path d="M473.16,221.48l-2.26-9.59H262.46v88.22H387c-12.93,61.4-72.93,93.72-121.94,93.72-35.66,0-73.25-15-98.13-39.11a140.08,140.08,0,0,1-41.8-98.88c0-37.16,16.7-74.33,41-98.78s61-38.13,97.49-38.13c41.79,0,71.74,22.19,82.94,32.31l62.69-62.36C390.86,72.72,340.34,32,261.6,32h0c-60.75,0-119,23.27-161.58,65.71C58,139.5,36.25,199.93,36.25,256S56.83,369.48,97.55,411.6C141.06,456.52,202.68,480,266.13,480c57.73,0,112.45-22.62,151.45-63.66,38.34-40.4,58.17-96.3,58.17-154.9C475.75,236.77,473.27,222.12,473.16,221.48Z" />
          </g>
        </motion.svg>
        <motion.svg
          className="tailwind-about dark-svg"
          viewBox="0 0 24 24"
          animate={{
            y: [-3, -2, 3, 1, -3],
            x: [-3, 1, 5, -6, -3],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={transition}
        >
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </motion.svg>
        <motion.svg
          className="react-about"
          viewBox="175.7 78 490.6 436.9"
          animate={{
            y: [5, -5, 5, -5, 5],
            x: [-5, 5, 5, -5, -5],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={transition}
        >
          <g className="dark-svg">
            <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
          </g>
        </motion.svg>
        <motion.svg
          className="github-about dark-svg"
          viewBox="0 0 24 24"
          animate={{
            y: [-3, 5, -3, 5, -3],
            x: [-6, 5, 3, -5, -6],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={transition}
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </motion.svg>
        <motion.svg
          className="figma-about dark-svg"
          viewBox="0 0 32 32"
          animate={{
            y: [5, -5, 5, -5, 5],
            x: [-5, 5, 5, -5, -5],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={transition}
        >
          <path d="M20.692 12.227c-2.084 0-3.773 1.689-3.773 3.773s1.689 3.773 3.773 3.773v0h0.122c2.084 0 3.773-1.689 3.773-3.773s-1.689-3.773-3.773-3.773v0zM20.814 21.611h-0.122c-3.099 0-5.611-2.512-5.611-5.611s2.512-5.611 5.611-5.611v0h0.122c3.099 0 5.611 2.512 5.611 5.611s-2.512 5.611-5.611 5.611v0zM11.186 21.611c-0 0-0.001 0-0.001 0-2.084 0-3.773 1.689-3.773 3.773s1.689 3.773 3.773 3.773c0.011 0 0.023-0 0.034-0h-0.002c0.003 0 0.007 0 0.011 0 2.121 0 3.843-1.714 3.854-3.833v-3.713zM11.216 30.996c-0.013 0-0.029 0-0.045 0-3.099 0-5.611-2.512-5.611-5.611s2.512-5.611 5.611-5.611c0.005 0 0.010 0 0.015 0h5.733v5.55c-0.012 3.135-2.557 5.672-5.693 5.672-0.003 0-0.006 0-0.009 0h0zM11.186 12.227c-2.084 0-3.773 1.689-3.773 3.773s1.689 3.773 3.773 3.773v0h3.895v-7.545zM16.918 21.611h-5.732c-3.099 0-5.611-2.512-5.611-5.611s2.512-5.611 5.611-5.611v0h5.733v11.222zM11.186 2.843c-2.084 0-3.773 1.689-3.773 3.773s1.689 3.773 3.773 3.773v0h3.895v-7.547zM16.918 12.227h-5.732c-3.099 0-5.612-2.512-5.612-5.612s2.512-5.612 5.612-5.612v0h5.733v11.223zM16.918 10.389h3.895c2.080-0.005 3.764-1.692 3.764-3.773s-1.684-3.768-3.764-3.773h-3.895zM20.814 12.227h-5.733v-11.223h5.733c3.099 0 5.612 2.512 5.612 5.612s-2.512 5.612-5.612 5.612v0z"></path>
        </motion.svg>
      </article>

      <article className="subcontenedor-logos-flotantes">
        <motion.svg
          className="framer-about"
          viewBox="0 0 256 256"
          animate={{
            y: [5, -5, 5, -5, 5],
            x: [-5, 5, 5, -5, -5],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={transition}
        >
          <g className="dark-svg">
            <path d="M200,108H148.12207l57.37109,54.18408A8,8,0,0,1,200,176H136v60a8,8,0,0,1-13.49316,5.81592l-72-68A7.99941,7.99941,0,0,1,48,168V100a8.00008,8.00008,0,0,1,8-8h51.87793L50.50684,37.81592A8,8,0,0,1,56,24H200a8.00008,8.00008,0,0,1,8,8v68A8.00008,8.00008,0,0,1,200,108Z" />
          </g>
        </motion.svg>

        <motion.svg
          className="netlify-about dark-svg"
          viewBox="0 0 24 24"
          animate={{
            y: [-3, 5, -3, 5, -3],
            x: [-6, 5, 3, -5, -6],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={transition}
        >
          <path d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25L12.132 7.86a1.2 1.2 0 0 1-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 0 1 0-.167.052.052 0 0 0-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 0 1-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 0 1-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031.022.01.011zm-6.441-2.652l5.878 1.211a1.044 1.044 0 0 1 .824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 0 1 .104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 0 1-.563.125 1.389 1.389 0 0 1-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 0 1 .314 0 1.378 1.378 0 0 1 .344 0l2.735-4.25a1.19 1.19 0 0 1-.334-.824 1.242 1.242 0 0 1 0-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 0 1 .835-.282 1.357 1.357 0 0 1 .397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 0 1 .24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z" />
        </motion.svg>
        <motion.svg
          className="facebook-about dark-svg"
          viewBox="0 0 30 30"
          stroke-linecap="round"
          stroke-linejoin="round"
          animate={{
            y: [3, 6, -3, 6, 3],
            x: [6, -5, -3, 5, 6],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={transition}
        >
          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z" />
        </motion.svg>
        <motion.svg
          className="flutter-about dark-svg"
          viewBox="0 0 32 32"
          animate={{
            y: [-3, 5, -3, 5, -3],
            x: [-6, 5, 3, -5, -6],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={transition}
        >
          <path d="M18.909 14.84l-8.086 8.070 8.085 8.085h9.214l-8.073-8.083 8.073-8.073h-9.212zM18.892 1.004l-15.013 14.996 4.624 4.624 19.599-19.603h-9.194z"></path>
        </motion.svg>
        <motion.svg
          className="vue-about dark-svg"
          viewBox="0 -2 28 28"
          animate={{
            y: [-6, 4, -3, 4, -6],
            x: [6, -5, 6, -5, 6],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={transition}
        >
          <path d="m22.313 0h5.688l-14 24-14-24h11l3 5.563 3.5-5.563zm-18.813 2 10.5 18 10.5-18h-3.375l-7.125 12.375-7.125-12.375z" />
        </motion.svg>
      </article>
    </main>
  );
}

export default LogosFlotantes;