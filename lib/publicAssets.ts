/** Cartas individuais para o carrossel */
export const PUBLIC_CARTAS = [
  "/carta01.png",
  "/carta02.png",
  "/carta03.png",
  "/carta04.png",
  "/carta05.png",
] as const;

/** Boxes / produtos lacrados */
export const PUBLIC_BOXES = [
  "/box01.png",
  "/box02.png",
  "/box03.png",
] as const;

/** Todas as imagens (cartas + boxes) para o carrossel do Hero */
export const PUBLIC_IMAGES = [
  ...PUBLIC_CARTAS,
  ...PUBLIC_BOXES,
] as const;
