import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Vestido Floral Verão",
    description:
      "Vestido leve e confortável com estampa floral, perfeito para os dias quentes de verão.",
    price: 129.9,
    images: [
      "https://images.tcdn.com.br/img/img_prod/798207/vestido_elegante_em_renda_guipir_rosa_pink_3049_1_7644b15c9dcadeb1e3ae9f7c55b8cbfb.jpg",
      "https://cdn.sistemawbuy.com.br/arquivos/71e6f2f574a4594be1f99ddcd575cde9/produtos/664785e7b269b/25-667c5a6d22c34.jpg",
      "https://images.tcdn.com.br/img/img_prod/1232850/vestido_longo_de_festa_frente_unica_lilas_mcoffee_festa_565_1_ff5b2c9ed5ed6fcb60d9e5cc4b559792.jpg",
    ],
    category: "roupas",
    sizes: ["P", "M", "G", "GG"],
    colors: ["#FFB6C1", "#87CEFA", "#98FB98"],
    isNew: true,
    stock: 30,
  },
  {
    id: "2",
    name: "Biquíni Ripple",
    description:
      "Biquíni com estampa de ondas, confortável e estiloso para o verão.",
    price: 89.9,
    images: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    category: "biquinis",
    sizes: ["P", "M", "G"],
    colors: ["#FF6347", "#4682B4", "#000000"],
    stock: 10,
  },
  {
    id: "3",
    name: "Camiseta Básica",
    description:
      "Camiseta básica de algodão, confortável e versátil para o dia a dia.",
    price: 49.9,
    images: [
      "https://blessedchoice.com.br/cdn/shop/files/10_2_11zon_800x.jpg?v=1695928007",
      "/placeholder.svg?height=800&width=800",
    ],
    category: "roupas",
    sizes: ["P", "M", "G", "GG"],
    colors: ["#FFFFFF", "#000000", "#808080", "#A52A2A"],
    stock: 15,
  },
  {
    id: "4",
    name: "Maiô Recorte",
    description: "Maiô com recortes laterais, elegante e moderno para o verão.",
    price: 119.9,
    images: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    category: "biquinis",
    sizes: ["P", "M", "G"],
    colors: ["#000000", "#FF0000", "#0000FF"],
    isNew: true,
    stock: 5,
  },
  {
    id: "5",
    name: "Shorts Jeans",
    description:
      "Shorts jeans de cintura alta, confortável e estiloso para o verão.",
    price: 79.9,
    images: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    category: "roupas",
    sizes: ["P", "M", "G", "GG"],
    colors: ["#0D47A1", "#1976D2", "#2196F3"],
    stock: 10,
  },
  {
    id: "6",
    name: "Biquíni Tropical",
    description:
      "Biquíni com estampa tropical, perfeito para dias de praia e piscina.",
    price: 99.9,
    images: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    category: "biquinis",
    sizes: ["P", "M", "G"],
    colors: ["#00FF00", "#FF00FF", "#FFFF00"],
    stock: 8,
  },
  {
    id: "7",
    name: "Vestido Longo",
    description: "Vestido longo e fluido, perfeito para ocasiões especiais.",
    price: 159.9,
    images: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    category: "roupas",
    sizes: ["P", "M", "G"],
    colors: ["#800080", "#C71585", "#000000"],
    isNew: true,
    stock: 0,
  },
  {
    id: "8",
    name: "Calça Jeans",
    description:
      "Calça jeans de cintura alta, confortável e versátil para o dia a dia.",
    price: 129.9,
    images: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    category: "roupas",
    sizes: ["36", "38", "40", "42", "44"],
    colors: ["#0D47A1", "#1976D2", "#2196F3"],
    stock: 0,
  },
];
