/**
 * Imagens da pasta public - uma por projeto/item, sem repetição.
 * Usar por índice: PUBLIC_PROJECT_IMAGES[index] ou PUBLIC_AREAS_IMAGES[index].
 */

export const PUBLIC_PROJECT_IMAGES: string[] = [
  "/bicuar.jpeg",
  "/iona-national-park.jpg.jpeg",
  "/mupa.jpg.jpeg",
  "/capacitacao.jpeg",
  "/formacao.jpeg",
  "/imagem2.jpg",
  "/imagem3.jpg",
  "/imagem4.jpg",
  "/Imagem5.jpg",
  "/imagem6.jpg",
  "/imagem7.jpg",
  "/hero-biodiversity.jpg",
  "/hero-forest.jpg",
  "/Sable_bull.jpg.jpeg",
  "/herbario.jpeg",
  "/floresta.jpeg",
  "/bicuar.jpeg",
  "/Welwitschia_mirabilis-1024x768.jpg.jpeg",
  "/conservacy.jpeg",
  "/investig.jpeg",
  "/museu.jpeg",
  "/infra.jpeg",
  "/documentation.jpeg",
  "/environmental_education.jpeg",
  "/training.jpeg",
  "/sig.jpeg",
  "/Acervo_Jorge-Ferreira_namibe_Parque-Nacional-do-Iona10.jpg (1).jpeg",
  "/parque da kissama.jpg.jpeg",
  "/microscope.jpeg",
  "/equipa.jpeg",
];

export function getProjectImage(index: number): string {
  return PUBLIC_PROJECT_IMAGES[index % PUBLIC_PROJECT_IMAGES.length];
}
