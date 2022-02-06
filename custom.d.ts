// declare module "*.svg" {
//   const content: React.Node;
//   export default content;
// }

declare module '*.svg' {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
