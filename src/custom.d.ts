declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.png" {
  const value: string;
  export default value;
}
// если нужны другие форматы — тоже добавь

declare module "*.mp3" {
  const src: string;
  export default src;
}
