/// <reference types="vite/client" />

declare module "*.scss" {
  const href: string;
  export default href;
}

declare module "*.md?raw" {
  const content: string;
  export default content;
}

declare module "*.txt?raw" {
  const content: string;
  export default content;
}
