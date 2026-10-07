/*
  EDITAR PRODUCTOS AQUÍ
  ---------------------
  Cada producto está dentro de PRODUCTS. Para cambiarlo, modifica: 
    name        = nombre del producto
    description = descripción
    retail      = código al detal
    wholesale   = código mayorista
    dimensions  = medidas (solo artesanías)

  El código mayorista se comunica/aplica para cantidades de 24 unidades o más.
  No cambies id ni las rutas de images/measure si no estás reemplazando las fotos.
*/

const PRODUCTS = [
  {
    "id": "souvenir-01",
    "section": "souvenirs",
    "category": "imanes",
    "name": "iman",
    "description": "Imán decorativo elaborado en madera y resina, con un diseño inspirado en Colombia. Ideal como recuerdo, detalle turístico o elemento decorativo.",
    "images": [
      "assets/souvenir-01.jpg"
    ],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-02",
    "section": "souvenirs",
    "category": "imanes",
    "name": "iman",
    "description": "Imán decorativo elaborado en madera y resina, con un diseño inspirado en Colombia. Ideal como recuerdo, detalle turístico o elemento decorativo.",
    "images": [
      "assets/souvenir-02.jpg"
    ],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-03",
    "section": "souvenirs",
    "category": "imanes",
    "name": "iman",
    "description": "Imán decorativo elaborado en madera y resina, con una imagen representativa de Colombia. Una opción ideal para regalar o conservar como recuerdo.",
    "images": [
      "assets/souvenir-03.jpg"
    ],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-04",
    "section": "souvenirs",
    "category": "imanes",
    "name": "iman",
    "description": "Imán decorativo elaborado en madera y resina, inspirado en Bogotá y sus lugares representativos. Ideal como recuerdo o detalle.",
    "images": [
      "assets/souvenir-04.jpg"
    ],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-05",
    "section": "souvenirs",
    "category": "imanes",
    "name": "iman",
    "description": "Imán decorativo elaborado en madera y resina, con diseño colombiano. Ideal para decorar, regalar o llevar como recuerdo.",
    "images": [
      "assets/souvenir-05.jpg"
    ],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-06",
    "section": "souvenirs",
    "category": "imanes",
    "name": "iman",
    "description": "Imán decorativo elaborado en madera y resina, con un diseño alusivo a Colombia. Ideal como recuerdo turístico o detalle.",
    "images": [
      "assets/souvenir-06.jpg"
    ],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-07",
    "section": "souvenirs",
    "category": "imanes",
    "name": "iman",
    "description": "Imán decorativo elaborado en madera y resina, con una imagen representativa de Colombia. Ideal para regalar o conservar como recuerdo.",
    "images": [
      "assets/souvenir-07.jpg"
    ],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-08",
    "section": "souvenirs",
    "category": "imanes",
    "name": "iman",
    "description": "Imán decorativo elaborado en madera y resina, con diseño inspirado en Colombia. Ideal como recuerdo, regalo o detalle decorativo.",
    "images": [
      "assets/souvenir-08.jpg"
    ],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-09",
    "section": "souvenirs",
    "category": "imanes",
    "name": "iman",
    "description": "Imán decorativo elaborado en madera y resina, con diseño colombiano. Ideal como recuerdo turístico, regalo o elemento decorativo.",
    "images": [
      "assets/souvenir-09.jpg"
    ],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-10",
    "section": "souvenirs",
    "category": "imanes",
    "name": "iman",
    "description": "Imán decorativo elaborado en madera y resina, con diseño inspirado en Colombia. Ideal como recuerdo o detalle para regalar.",
    "images": [
      "assets/souvenir-10.jpg"
    ],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-11",
    "section": "souvenirs",
    "category": "imanes",
    "name": "iman",
    "description": "Imán decorativo elaborado en madera y resina, con una imagen alusiva a Colombia. Ideal como recuerdo turístico o detalle decorativo.",
    "images": [
      "assets/souvenir-11.jpg"
    ],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-12",
    "section": "souvenirs",
    "category": "imanes",
    "name": "iman",
    "description": "Imán decorativo elaborado en madera y resina, con diseño inspirado en Colombia. Ideal para regalar o conservar como recuerdo.",
    "images": [
      "assets/souvenir-12.jpg"
    ],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-13",
    "section": "souvenirs",
    "category": "imanes",
    "name": "iman",
    "description": "Imán decorativo elaborado en madera y resina, con diseño colombiano. Ideal como recuerdo, regalo o detalle para el hogar.",
    "images": [
      "assets/souvenir-13.jpg"
    ],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-14",
    "section": "souvenirs",
    "category": "otros",
    "name": "Portalapiz",
    "description": "Portalápiz elaborado en madera, con un diseño artesanal inspirado en Colombia. Ideal para organizar lápices y decorar espacios de trabajo o estudio.",
    "images": [
      "assets/souvenir-14.jpg"
    ],
    "measure": null,
    "retail": "00061",
    "wholesale": "00021"
  },
  {
    "id": "souvenir-15",
    "section": "souvenirs",
    "category": "porta-telefonos",
    "name": "Porta Teléfono Colombia – Ave",
    "description": "Porta teléfono elaborado en madera, con diseño inspirado en Colombia. Permite sostener y exhibir el celular de forma práctica y decorativa.",
    "images": [
      "assets/souvenir-15.jpg"
    ],
    "measure": null,
    "retail": "00051",
    "wholesale": "00021"
  },
  {
    "id": "souvenir-16",
    "section": "souvenirs",
    "category": "porta-telefonos",
    "name": "Porta Teléfono Colombia – Café",
    "description": "Porta teléfono elaborado en madera, con diseño inspirado en Colombia. Una pieza práctica para sostener el celular y aportar un detalle artesanal al espacio.",
    "images": [
      "assets/souvenir-16.jpg"
    ],
    "measure": null,
    "retail": "00051",
    "wholesale": "00021"
  },
  {
    "id": "souvenir-17",
    "section": "souvenirs",
    "category": "porta-telefonos",
    "name": "Porta Teléfono Colombia – Bogotá",
    "description": "Porta teléfono elaborado en madera, con diseño inspirado en Bogotá. Ideal para sostener y exhibir el celular de manera práctica y decorativa.",
    "images": [
      "assets/souvenir-17.jpg"
    ],
    "measure": null,
    "retail": "00051",
    "wholesale": "00021"
  },
  {
    "id": "souvenir-18",
    "section": "souvenirs",
    "category": "otros",
    "name": "Portalapiz",
    "description": "Portalápiz elaborado en madera, con diseño artesanal inspirado en Colombia. Ideal para organizar lápices, lapiceros y otros elementos de escritorio.",
    "images": [
      "assets/souvenir-18.jpg"
    ],
    "measure": null,
    "retail": "00061",
    "wholesale": "00021"
  },
  {
    "id": "souvenir-19",
    "section": "souvenirs",
    "category": "otros",
    "name": "Portalapiz",
    "description": "Portalápiz elaborado en madera, con diseño artesanal. Ideal para organizar útiles de escritura y aportar un detalle decorativo al escritorio.",
    "images": [
      "assets/souvenir-19.jpg"
    ],
    "measure": null,
    "retail": "00061",
    "wholesale": "00021"
  },
  {
    "id": "souvenir-20",
    "section": "souvenirs",
    "category": "porta-telefonos",
    "name": "Porta Teléfono Colombia – Café 2",
    "description": "Porta teléfono elaborado en madera, con diseño inspirado en Colombia. Ideal para sostener y exhibir el celular con un acabado artesanal.",
    "images": [
      "assets/souvenir-20.jpg"
    ],
    "measure": null,
    "retail": "00051",
    "wholesale": "00021"
  },
  {
    "id": "souvenir-21",
    "section": "souvenirs",
    "category": "porta-telefonos",
    "name": "Porta Teléfono Colombia – Pueblo",
    "description": "Porta teléfono elaborado en madera, con diseño inspirado en un paisaje colombiano. Ideal para sostener el celular y como recuerdo decorativo.",
    "images": [
      "assets/souvenir-21.jpg"
    ],
    "measure": null,
    "retail": "00051",
    "wholesale": "00021"
  },
  {
    "id": "souvenir-22",
    "section": "souvenirs",
    "category": "porta-telefonos",
    "name": "Porta Teléfono Colombia – Arte Colorido",
    "description": "Porta teléfono elaborado en madera, con un diseño colombiano colorido. Ideal para sostener y exhibir el celular como pieza funcional y decorativa.",
    "images": [
      "assets/souvenir-22.jpg"
    ],
    "measure": null,
    "retail": "00051",
    "wholesale": "00021"
  },
  {
    "id": "souvenir-23",
    "section": "souvenirs",
    "category": "porta-telefonos",
    "name": "Porta Teléfono Colombia – Personaje",
    "description": "Porta teléfono elaborado en madera, con diseño inspirado en un personaje colombiano. Ideal para sostener el celular y decorar el espacio.",
    "images": [
      "assets/souvenir-23.jpg"
    ],
    "measure": null,
    "retail": "00051",
    "wholesale": "00021"
  },
  {
    "id": "artesania-01",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Mini Cucharon",
    "description": "Mini cucharón elaborado en madera, ideal para servir y manipular pequeñas cantidades de alimentos. Su acabado natural resalta el trabajo artesanal.",
    "dimensions": "20 cm de largo × 6 cm de ancho",
    "images": [
      "assets/artesania-01-foto-01.jpg",
      "assets/artesania-01-foto-02.jpg"
    ],
    "measure": "assets/artesania-01-medidas.jpg",
    "retail": "0005",
    "wholesale": "0053"
  },
  {
    "id": "artesania-02",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Coctelera pequeña",
    "description": "Coctelera pequeña elaborada en madera, pensada para mezclar y servir preparaciones en la cocina. Pieza práctica con acabado artesanal.",
    "dimensions": "26 cm de largo × 3 cm de ancho",
    "images": [
      "assets/artesania-02-foto-01.jpg"
    ],
    "measure": "assets/artesania-02-medidas.jpg",
    "retail": "0004",
    "wholesale": "0022"
  },
  {
    "id": "artesania-03",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Arrocera pequeña",
    "description": "Arrocera pequeña elaborada en madera, diseñada para servir arroz y otras preparaciones. Una pieza funcional para la cocina con acabado natural.",
    "dimensions": "25 cm de largo × 6 cm de ancho",
    "images": [
    
      "assets/artesania-03-foto-02.jpg",
      "assets/artesania-03-foto-03.jpg"
    ],
    "measure": "assets/artesania-03-medidas.jpg",
    "retail": "0006",
    "wholesale": "0053"
  },
  {
    "id": "artesania-04",
    "section": "artesanias",
    "category": "palas",
    "name": "Pala pequeña",
    "description": "Pala pequeña elaborada en madera, ideal para remover, mezclar y manipular alimentos durante la preparación de comidas.",
    "dimensions": "24 cm de largo × 5 cm de ancho",
    "images": [
      "assets/artesania-04-foto-01.jpg"
    ],
    "measure": "assets/artesania-04-medidas.jpg",
    "retail": "0004",
    "wholesale": "0052"
  },
  {
    "id": "artesania-05",
    "section": "artesanias",
    "category": "tenedores",
    "name": "Tenedor mediano",
    "description": "Tenedor mediano elaborado en madera, diseñado para servir y manipular alimentos. Pieza artesanal con acabado natural.",
    "dimensions": "21 cm de largo × 4 cm de ancho",
    "images": [
      "assets/artesania-05-foto-01.jpg",
      "assets/artesania-05-foto-02.jpg"
    ],
    "measure": "assets/artesania-05-medidas.jpg",
    "retail": "0055",
    "wholesale": "0053"
  },
  {
    "id": "artesania-06",
    "section": "artesanias",
    "category": "otros",
    "name": "Mandolina / Cortador de Madera",
    "description": "Mandolina de madera para corte, equipada con una cuchilla. Pieza funcional para la cocina, elaborada con estructura artesanal de madera.",
    "dimensions": "32 cm de largo × 12 cm de ancho",
    "images": [
      "assets/artesania-06-foto-01.jpg",
      "assets/artesania-06-foto-02.jpg"
    ],
    "measure": "assets/artesania-06-medidas.jpg",
    "retail": "00052",
    "wholesale": "00561"
  },
  {
    "id": "artesania-08",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Cucharon grande",
    "description": "Cucharón grande elaborado en madera, ideal para servir sopas, guisos y otras preparaciones. Su tamaño permite manipular porciones de forma práctica.",
    "dimensions": "37 cm de largo × 9 cm de ancho",
    "images": [
      "assets/artesania-08-foto-01.jpg",
      "assets/artesania-08-foto-02.jpg"
    ],
    "measure": "assets/artesania-08-medidas.jpg",
    "retail": "00081",
    "wholesale": "00021"
  },
  {
    "id": "artesania-09",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Platina Plana",
    "description": "Platina plana elaborada en madera, diseñada para servir, manipular o presentar alimentos. Pieza artesanal de acabado natural.",
    "dimensions": "30 cm de largo × 7 cm de ancho",
    "images": [
      "assets/artesania-09-foto-01.jpg",
      "assets/artesania-09-foto-02.jpg"
    ],
    "measure": "assets/artesania-09-medidas.jpg",
    "retail": "0008",
    "wholesale": "0054"
  },
  {
    "id": "artesania-10",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Coctelera grande",
    "description": "Coctelera grande elaborada en madera, ideal para mezclar y servir preparaciones. Su diseño alargado facilita el uso en la cocina.",
    "dimensions": "34 cm de largo × 4 cm de ancho",
    "images": [
      "assets/artesania-10-foto-01.jpg",
      "assets/artesania-10-foto-02.jpg"
    ],
    "measure": "assets/artesania-10-medidas.jpg",
    "retail": "0008",
    "wholesale": "0053"
  },
  {
    "id": "artesania-11",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Cucharon pequeño",
    "description": "Cucharón pequeño elaborado en madera, ideal para servir y manipular alimentos. Una pieza práctica y artesanal para la cocina.",
    "dimensions": "27 cm de largo × 7 cm de ancho",
    "images": [
      "assets/artesania-11-foto-01.jpg",
      "assets/artesania-11-foto-02.jpg"
    ],
    "measure": "assets/artesania-11-medidas.jpg",
    "retail": "00001",
    "wholesale": "0006"
  },
  {
    "id": "artesania-12",
    "section": "artesanias",
    "category": "palas",
    "name": "Pala de Grande",
    "description": "Pala grande elaborada en madera, pensada para remover, mezclar y manipular alimentos durante la preparación de comidas.",
    "dimensions": "30 cm de largo × 7 cm de ancho",
    "images": [
      "assets/artesania-12-foto-01.jpg"
    ],
    "measure": "assets/artesania-12-medidas.jpg",
    "retail": "0056",
    "wholesale": "0083"
  },
  {
    "id": "artesania-13",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Cuchara Amazonas",
    "description": "Cuchara Amazonas elaborada en madera, de formato largo y amplio, ideal para servir y manipular preparaciones en la cocina.",
    "dimensions": "41 cm de largo × 8 cm de ancho",
    "images": [
      "assets/artesania-13-foto-01.jpg",
      "assets/artesania-13-foto-02.jpg"
    ],
    "measure": "assets/artesania-13-medidas.jpg",
    "retail": "00081",
    "wholesale": "00021"
  },
  {
    "id": "artesania-14",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Picantera",
    "description": "Picantera elaborada en madera, diseñada para manipular y servir preparaciones. Su formato compacto la hace práctica para diferentes tareas de cocina.",
    "dimensions": "18 cm de largo × 3 cm de ancho",
    "images": [
      "assets/artesania-14-foto-01.jpg"
    ],
    "measure": "assets/artesania-14-medidas.jpg",
    "retail": "0003",
    "wholesale": "0051"
  },
  {
    "id": "artesania-15",
    "section": "artesanias",
    "category": "palas",
    "name": "Pala Mediana",
    "description": "Pala mediana elaborada en madera, ideal para remover, mezclar y manipular alimentos durante la preparación de comidas.",
    "dimensions": "29 cm de largo × 7 cm de ancho",
    "images": [
      "assets/artesania-15-foto-01.jpg"
    ],
    "measure": "assets/artesania-15-medidas.jpg",
    "retail": "0006",
    "wholesale": "0023"
  },
  {
    "id": "artesania-16",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Arrocera grande",
    "description": "Arrocera grande elaborada en madera, diseñada para servir arroz y otras preparaciones. Su tamaño ofrece mayor capacidad para el servicio.",
    "dimensions": "30 cm de largo × 7 cm de ancho",
    "images": [
      "assets/artesania-16-foto-01.jpg"
    ],
    "measure": "assets/artesania-16-medidas.jpg",
    "retail": "0008",
    "wholesale": "0054"
  },
  {
    "id": "artesania-17",
    "section": "artesanias",
    "category": "palas",
    "name": "Pala Gigante",
    "description": "Pala gigante elaborada en madera, de gran longitud y pensada para trabajos que requieren mayor alcance. Pieza artesanal de formato especial.",
    "dimensions": "1 metro de largo",
    "images": [
      "assets/artesania-17-foto-01.jpg"
    ],
    "measure": "assets/artesania-17-medidas.jpg",
    "retail": "00004",
    "wholesale": "00052"
  },
  {
    "id": "artesania-18",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Saca Fritos",
    "description": "Saca fritos elaborado en madera, diseñado para retirar y servir alimentos fritos. Su forma facilita la manipulación de las preparaciones.",
    "dimensions": "30 cm de largo × 7 cm de ancho",
    "images": [
      "assets/artesania-18-foto-01.jpg"
    ],
    "measure": "assets/artesania-18-medidas.jpg",
    "retail": "0009",
    "wholesale": "0005"
  },
  {
    "id": "artesania-19",
    "section": "artesanias",
    "category": "tablas",
    "name": "Tablon pino",
    "description": "Tablón de pino elaborado en madera, ideal para apoyar, preparar o presentar alimentos. Su superficie amplia ofrece un uso práctico en la cocina.",
    "dimensions": "30 cm × 40 cm",
    "images": [
      "assets/artesania-19-foto-01.jpg"
    ],
    "measure": "assets/artesania-19-medidas.jpg",
    "retail": "00062",
    "wholesale": "00081"
  },
  {
    "id": "artesania-20",
    "section": "artesanias",
    "category": "tablas",
    "name": "Tabla de Madera con Mango",
    "description": "Tabla de madera con mango, diseñada para preparar, servir y presentar alimentos. El mango facilita su manipulación y traslado.",
    "dimensions": "40 cm de largo × 18 cm de ancho",
    "images": [
      "assets/artesania-20-foto-01.jpg"
    ],
    "measure": "assets/artesania-20-medidas.jpg",
    "retail": "00541",
    "wholesale": "00501"
  },
  {
    "id": "artesania-21",
    "section": "artesanias",
    "category": "morteros",
    "name": "Mortero zapan #2",
    "description": "Mortero artesanal de madera zapan #2, acompañado de su mazo. Ideal para triturar, macerar y preparar ingredientes de forma tradicional.",
    "dimensions": "Mortero: 8 cm × 8 cm · mazo: 13 cm",
    "images": [
      "assets/artesania-21-foto-01.jpg"
    ],
    "measure": "assets/artesania-21-medidas.jpg",
    "retail": "00021",
    "wholesale": "0008"
  },
  {
    "id": "artesania-22",
    "section": "artesanias",
    "category": "otros",
    "name": "Servilletero",
    "description": "Servilletero elaborado en madera, diseñado para mantener las servilletas organizadas y disponibles. Una pieza funcional para la mesa y el hogar.",
    "dimensions": "12 cm de largo × 5 cm de ancho × 8 cm de alto",
    "images": [
      "assets/artesania-22-foto-01.jpg"
    ],
    "measure": "assets/artesania-22-medidas.jpg",
    "retail": "0058",
    "wholesale": "0006"
  },
  {
    "id": "artesania-23",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Azucarera 12cm",
    "description": "Azucarera de 12 cm elaborada en madera, diseñada para servir azúcar y acompañar bebidas o preparaciones. Pieza artesanal de acabado natural.",
    "dimensions": "12 cm de largo × 2,5 cm de ancho",
    "images": [
      "assets/artesania-23-foto-01.jpg",
      "assets/artesania-23-foto-02.jpg"
    ],
    "measure": "assets/artesania-23-medidas.jpg",
    "retail": "0002",
    "wholesale": "0011"
  },
  {
    "id": "artesania-24",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Mini azucarera",
    "description": "Mini azucarera elaborada en madera, de formato compacto y pensada para servir azúcar. Ideal para acompañar bebidas y espacios de mesa.",
    "dimensions": "10 cm de largo × 2,5 cm de ancho",
    "images": [
      "assets/artesania-24-foto-01.jpg",
      "assets/artesania-24-foto-02.jpg"
    ],
    "measure": "assets/artesania-24-medidas.jpg",
    "retail": "0051",
    "wholesale": "0001"
  },
  {
    "id": "artesania-25",
    "section": "artesanias",
    "category": "palas",
    "name": "Pala XL",
    "description": "Pala XL elaborada en madera, de gran tamaño y diseñada para remover y manipular preparaciones. Pieza artesanal de formato amplio.",
    "dimensions": "45 cm de largo × 8 cm de ancho",
    "images": [
      "assets/artesania-25-foto-01.jpg"
    ],
    "measure": "assets/artesania-25-medidas.jpg",
    "retail": "00521",
    "wholesale": "0008"
  },
  {
    "id": "artesania-26",
    "section": "artesanias",
    "category": "otros",
    "name": "Molinillo tetero",
    "description": "Molinillo tetero elaborado en madera, diseñado para mezclar y trabajar preparaciones. Su formato alargado facilita el movimiento manual.",
    "dimensions": "29 cm de largo × 3 cm de ancho",
    "images": [
      "assets/artesania-26-foto-01.jpg"
    ],
    "measure": "assets/artesania-26-medidas.jpg",
    "retail": "0058",
    "wholesale": "0055"
  },
  {
    "id": "artesania-27",
    "section": "artesanias",
    "category": "otros",
    "name": "Molinillo grande",
    "description": "Molinillo grande elaborado en madera, ideal para mezclar y remover preparaciones. Pieza funcional con acabado artesanal natural.",
    "dimensions": "32 cm de largo × 4 cm de ancho",
    "images": [
      "assets/artesania-27-foto-01.jpg"
    ],
    "measure": "assets/artesania-27-medidas.jpg",
    "retail": "00501",
    "wholesale": "0027"
  },
  {
    "id": "artesania-28",
    "section": "artesanias",
    "category": "otros",
    "name": "Molinillo pequeño",
    "description": "Molinillo pequeño elaborado en madera, de formato compacto y práctico para mezclar y remover preparaciones.",
    "dimensions": "25 cm de alto × 3 cm de ancho",
    "images": [
      "assets/artesania-28-foto-01.jpg"
    ],
    "measure": "assets/artesania-28-medidas.jpg",
    "retail": "0056",
    "wholesale": "0024"
  },
  {
    "id": "artesania-29",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Mini sopera",
    "description": "Mini sopera elaborada en madera, diseñada para servir pequeñas porciones de sopas, salsas u otras preparaciones. Pieza artesanal de tamaño compacto.",
    "dimensions": "17 cm de largo × 4 cm de ancho",
    "images": [
      "assets/artesania-29-foto-01.jpg",
      "assets/artesania-29-foto-02.jpg"
    ],
    "measure": "assets/artesania-29-medidas.jpg",
    "retail": "0052",
    "wholesale": "0051"
  },
{
    "id": "artesania-30",
    "section": "artesanias",
    "category": "tenedores",
    "name": "Tenedor grande",
    "description": "Tenedor grande elaborado en madera, diseñado para servir y manipular alimentos. Su tamaño ofrece mayor alcance y presencia en la mesa.",
    "dimensions": "30 cm de largo × 5 cm de ancho",
    "images": ["assets/artesania-30-foto-01.jpg"],
    "measure": "assets/artesania-30-medidas.jpg",
    "retail": "0009",
    "wholesale": "0005"
  },
  {
    "id": "artesania-31",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Sopera",
    "description": "Sopera elaborada en madera, diseñada para servir sopas, caldos y otras preparaciones. Pieza artesanal con acabado natural.",
    "dimensions": "20 cm de largo × 5 cm de ancho",
    "images": ["assets/artesania-31-foto-01.jpg", "assets/artesania-31-foto-02.jpg"],
    "measure": "assets/artesania-31-medidas.jpg",
    "retail": "0004",
    "wholesale": "0002"
  },
  {
    "id": "artesania-32",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Cuchara Medidora",
    "description": "Cuchara medidora elaborada en madera, diseñada para medir y manipular pequeñas cantidades de ingredientes. Pieza práctica con acabado artesanal.",
    "dimensions": "14 cm de largo × 4 cm de ancho",
    "images": ["assets/artesania-32-foto-01.jpg", "assets/artesania-32-foto-02.jpg"],
    "measure": "assets/artesania-32-medidas.jpg",
    "retail": "0053",
    "wholesale": "0002"
  },
  {
    "id": "artesania-33",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Platina pequeña",
    "description": "Platina pequeña elaborada en madera, diseñada para servir, presentar y manipular alimentos. Pieza compacta de acabado artesanal.",
    "dimensions": "25 cm de largo × 6 cm de ancho",
    "images": ["assets/artesania-33-foto-01.jpg", "assets/artesania-33-foto-02.jpg", "assets/artesania-33-foto-03.jpg"],
    "measure": "assets/artesania-33-medidas.jpg",
    "retail": "0006",
    "wholesale": "0053"
  },
  {
    "id": "artesania-34",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Platina grande",
    "description": "Platina grande elaborada en madera, pensada para servir y presentar alimentos. Su formato amplio permite trabajar con mayores cantidades.",
    "dimensions": "30 cm de largo × 7 cm de ancho",
    "images": ["assets/artesania-34-foto-01.jpg", "assets/artesania-34-foto-02.jpg"],
    "measure": "assets/artesania-34-medidas.jpg",
    "retail": "0008",
    "wholesale": "0054"
  },
  {
    "id": "artesania-35",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Azucarera 13cm",
    "description": "Azucarera de 13 cm elaborada en madera, con un diseño ondulado y artesanal. Ideal para servir azúcar y acompañar bebidas o preparaciones.",
    "dimensions": "13 cm de largo × 3 cm de ancho",
    "images": ["assets/artesania-35-foto-01.jpg"],
    "measure": "assets/artesania-35-medidas.jpg",
    "retail": "0052",
    "wholesale": "0031"
  },
  {
    "id": "artesania-36",
    "section": "artesanias",
    "category": "cucharas",
    "name": "Coctelera garza",
    "description": "Coctelera garza elaborada en madera, con un diseño ondulado y distintivo. Ideal para mezclar o manipular preparaciones en la cocina.",
    "dimensions": "25 cm de largo × 3 cm de ancho",
    "images": ["assets/artesania-36-foto-01.jpg"],
    "measure": "assets/artesania-36-medidas.jpg",
    "retail": "0004",
    "wholesale": "0052"
  },
  {
    "id": "artesania-37",
    "section": "artesanias",
    "category": "morteros",
    "name": "Mortero zapan #3",
    "description": "Mortero artesanal de madera zapan #3, acompañado de su mazo. Ideal para triturar, macerar y preparar ingredientes de manera tradicional.",
    "dimensions": "Mortero: 10 cm de alto × 9 cm de ancho · mazo: 14 cm",
    "images": ["assets/artesania-37-foto-01.jpg"],
    "measure": "assets/artesania-37-medidas.jpg",
    "retail": "00051",
    "wholesale": "00021"
  },
  {
    "id": "artesania-38",
    "section": "artesanias",
    "category": "otros",
    "name": "Pimentero grande",
    "description": "Pimentero grande elaborado en madera, diseñado para contener y dosificar pimienta. Su tamaño permite un manejo cómodo durante la preparación.",
    "dimensions": "6 pulgadas de alto",
    "images": ["assets/artesania-38-foto-01.jpg"],
    "measure": "assets/artesania-38-medidas.jpg",
    "retail": "00032",
    "wholesale": "00081"
  },
  {
    "id": "artesania-39",
    "section": "artesanias",
    "category": "otros",
    "name": "Pimentero pequeño",
    "description": "Pimentero pequeño elaborado en madera, diseñado para contener y dosificar pimienta. Su formato compacto es práctico para la mesa o la cocina.",
    "dimensions": "4 pulgadas de alto × 3 cm de ancho",
    "images": ["assets/artesania-39-foto-01.jpg"],
    "measure": "assets/artesania-39-medidas.jpg",
    "retail": "00012",
    "wholesale": "00551"
  },
  {
    "id": "artesania-40",
    "section": "artesanias",
    "category": "otros",
    "name": "Parte panelas",
    "description": "Parte panelas elaborado en madera y equipado con una cuchilla para facilitar el corte. Pieza funcional de cocina con diseño artesanal.",
    "dimensions": "40 cm de largo × 20 cm de alto",
    "images": ["assets/artesania-40-foto-01.jpg"],
    "measure": "assets/artesania-40-medidas.jpg",
    "retail": "00032",
    "wholesale": "00551"
  },
  {
    "id": "artesania-41",
    "section": "artesanias",
    "category": "morteros",
    "name": "Mortero urapan grande",
    "description": "Mortero grande elaborado en madera, acompañado de su mazo. Ideal para triturar, macerar y preparar ingredientes de forma tradicional.",
    "dimensions": "Mortero: 11 cm de alto × 7 cm de ancho · mazo: 16 cm",
    "images": ["assets/artesania-41-foto-01.jpg"],
    "measure": "assets/artesania-41-medidas.jpg",
    "retail": "00001",
    "wholesale": "0008"
  },
  {
    "id": "artesania-42",
    "section": "artesanias",
    "category": "morteros",
    "name": "Mortero urapan mediano",
    "description": "Mortero mediano elaborado en madera, acompañado de su mazo. Un tamaño práctico para triturar y macerar ingredientes en la cocina.",
    "dimensions": "Mortero: 9 cm de alto × 6 cm de ancho · mazo: 15 cm",
    "images": ["assets/artesania-42-foto-01.jpg"],
    "measure": "assets/artesania-42-medidas.jpg",
    "retail": "0009",
    "wholesale": "0007"
  },
  {
    "id": "artesania-43",
    "section": "artesanias",
    "category": "morteros",
    "name": "Mortero urapan pequeño",
    "description": "Mortero pequeño elaborado en madera, acompañado de su mazo. Ideal para preparar pequeñas cantidades de ingredientes mediante trituración o maceración.",
    "dimensions": "Mortero: 10 cm de alto × 6 cm de ancho · mazo: 15 cm",
    "images": ["assets/artesania-43-foto-01.jpg"],
    "measure": "assets/artesania-43-medidas.jpg",
    "retail": "0008",
    "wholesale": "0006"
  },
  {
    "id": "artesania-44",
    "section": "artesanias",
    "category": "otros",
    "name": "Mielero grande",
    "description": "Mielero grande elaborado en madera, diseñado para servir y dosificar miel. Su formato alargado permite manipular el producto con facilidad.",
    "dimensions": "18 cm de largo × 3 cm de ancho",
    "images": ["assets/artesania-44-foto-01.jpg"],
    "measure": "assets/artesania-44-medidas.jpg",
    "retail": "0005",
    "wholesale": "0052"
  },
  {
    "id": "artesania-45",
    "section": "artesanias",
    "category": "otros",
    "name": "Mielero pequeño",
    "description": "Mielero pequeño elaborado en madera, diseñado para servir y dosificar miel. Su formato compacto es práctico para acompañar bebidas y alimentos.",
    "dimensions": "10 cm de largo × 2 cm de ancho",
    "images": ["assets/artesania-45-foto-01.jpg"],
    "measure": "assets/artesania-45-medidas.jpg",
    "retail": "0003",
    "wholesale": "0081"
  },
{
    "id": "artesania-46",
    "section": "artesanias",
    "category": "morteros",
    "name": "Mortero de piedra #1",
    "description": "Mortero de piedra de menor tamaño, acompañado de su mazo. Ideal para triturar, macerar y preparar pequeñas cantidades de ingredientes de forma tradicional.",
    "dimensions": "7,5 × 10 cm",
    "images": ["assets/mortero-piedra-03.jpeg"],
    "measure": "assets/mortero-piedra-01.jpeg",
    "retail": "00024",
    "wholesale": "00021"
  },
  {
    "id": "artesania-47",
    "section": "artesanias",
    "category": "morteros",
    "name": "Mortero de piedra #2",
    "description": "Mortero de piedra de tamaño compacto, acompañado de su mazo. Ideal para triturar, macerar y preparar ingredientes de forma tradicional.",
    "dimensions": "9 × 11 cm",
    "images": ["assets/mortero-piedra-04.png"],
    "measure": "assets/mortero-piedra-05.png",
    "retail": "00062",
    "wholesale": "00061"
  },
  {
    "id": "artesania-48",
    "section": "artesanias",
    "category": "morteros",
    "name": "Mortero de piedra #3",
    "description": "Mortero de piedra de tamaño mediano, acompañado de su mazo. Ideal para triturar, macerar y preparar ingredientes de forma tradicional.",
    "dimensions": "10 × 12,5 cm",
    "images": ["assets/mortero-piedra-07.png"],
    "measure": "assets/mortero-piedra-08.png",
    "retail": "00003",
    "wholesale": "00002"
  },
  {
    "id": "artesania-49",
    "section": "artesanias",
    "category": "morteros",
    "name": "Mortero de piedra #4",
    "description": "Mortero de piedra de tamaño grande, acompañado de su mazo. Ideal para triturar, macerar y preparar ingredientes de forma tradicional.",
    "dimensions": "11,5 × 15 cm",
    "images": ["assets/mortero-piedra-10.png"],
    "measure": "assets/mortero-piedra-09.png",
    "retail": "00043",
    "wholesale": "00042"
  },
  {
    "id": "artesania-50",
    "section": "artesanias",
    "category": "morteros",
    "name": "Mortero de piedra #5",
    "description": "Mortero de piedra de mayor tamaño, acompañado de su mazo. Ideal para triturar, macerar y preparar mayores cantidades de ingredientes de forma tradicional.",
    "dimensions": "13,5 × 19 cm",
    "images": ["assets/mortero-piedra-06.png"],
    "measure": "assets/mortero-piedra-02.png",
    "retail": "00054",
    "wholesale": "00053"
  },
  {
    "id": "souvenir-24",
    "section": "souvenirs",
    "category": "portavasos",
    "name": "Portavasos Botero con caja",
    "description": "Portavasos de madera con diseños inspirados en obras de Fernando Botero, presentado en una caja artesanal de madera. Incluye varios portavasos decorativos.",
    "images": [
      "assets/portavasos-01-caja.png",
      "assets/portavasos-01-abierto.png"
    ],
    "measure": null,
    "retail": "00003",
    "wholesale": "00002"
  },
  {
    "id": "souvenir-25",
    "section": "souvenirs",
    "category": "imanes",
    "name": "Imán Botero #1",
    "description": "Imán decorativo elaborado en madera y resina, con diseño inspirado en una obra de Fernando Botero. Ideal como recuerdo de Colombia o detalle decorativo.",
    "images": ["assets/iman-botero-01.png"],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-26",
    "section": "souvenirs",
    "category": "imanes",
    "name": "Imán Botero #2",
    "description": "Imán decorativo elaborado en madera y resina, con diseño inspirado en una obra de Fernando Botero. Ideal como recuerdo de Colombia o detalle decorativo.",
    "images": ["assets/iman-botero-02.png"],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-27",
    "section": "souvenirs",
    "category": "imanes",
    "name": "Imán Botero #3",
    "description": "Imán decorativo elaborado en madera y resina, con diseño inspirado en una obra de Fernando Botero. Ideal como recuerdo de Colombia o detalle decorativo.",
    "images": ["assets/iman-botero-03.png"],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-28",
    "section": "souvenirs",
    "category": "imanes",
    "name": "Imán Botero #4",
    "description": "Imán decorativo elaborado en madera y resina, con diseño inspirado en una obra de Fernando Botero. Ideal como recuerdo de Colombia o detalle decorativo.",
    "images": ["assets/iman-botero-04.png"],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-29",
    "section": "souvenirs",
    "category": "imanes",
    "name": "Imán Botero #5",
    "description": "Imán decorativo elaborado en madera y resina, con diseño inspirado en una obra de Fernando Botero. Ideal como recuerdo de Colombia o detalle decorativo.",
    "images": ["assets/iman-botero-05.png"],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-30",
    "section": "souvenirs",
    "category": "imanes",
    "name": "Imán Botero #6",
    "description": "Imán decorativo elaborado en madera y resina, con diseño inspirado en una obra de Fernando Botero. Ideal como recuerdo de Colombia o detalle decorativo.",
    "images": ["assets/iman-botero-06.png"],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-31",
    "section": "souvenirs",
    "category": "imanes",
    "name": "Imán Botero #7",
    "description": "Imán decorativo elaborado en madera y resina, con diseño inspirado en una obra de Fernando Botero. Ideal como recuerdo de Colombia o detalle decorativo.",
    "images": ["assets/iman-botero-07.png"],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-32",
    "section": "souvenirs",
    "category": "imanes",
    "name": "Imán Botero #8",
    "description": "Imán decorativo elaborado en madera y resina, con diseño inspirado en una obra de Fernando Botero. Ideal como recuerdo de Colombia o detalle decorativo.",
    "images": ["assets/iman-botero-08.png"],
    "measure": null,
    "retail": "0005-0055",
    "wholesale": "0072-0023"
  },
  {
    "id": "souvenir-34",
    "section": "souvenirs",
    "category": "portavasos",
    "name": "Portavasos #2",
    "description": "Portavasos decorativos elaborados en madera, con diseños coloridos inspirados en Colombia y el arte colombiano.",
    "images": ["assets/portavasos-02-caja.png", "assets/portavasos-02-abierto.png"],
    "measure": null,
    "retail": "00003",
    "wholesale": "00002"
  },
  {
    "id": "souvenir-35",
    "section": "souvenirs",
    "category": "portavasos",
    "name": "Portavasos #3",
    "description": "Portavasos decorativos elaborados en madera, con diseños coloridos inspirados en Colombia y el arte colombiano.",
    "images": ["assets/portavasos-03-caja.png", "assets/portavasos-03-abierto.png"],
    "measure": null,
    "retail": "00003",
    "wholesale": "00002"
  },
  {
    "id": "souvenir-36",
    "section": "souvenirs",
    "category": "portavasos",
    "name": "Portavasos #4",
    "description": "Portavasos decorativos elaborados en madera, con diseños coloridos inspirados en Colombia y el arte colombiano.",
    "images": ["assets/portavasos-04-caja.png", "assets/portavasos-04-abierto.png"],
    "measure": null,
    "retail": "00003",
    "wholesale": "00002"
  },
  {
    "id": "souvenir-37",
    "section": "souvenirs",
    "category": "portavasos",
    "name": "Portavasos #5",
    "description": "Portavasos decorativos elaborados en madera, con diseños coloridos inspirados en Colombia y el arte colombiano.",
    "images": ["assets/portavasos-05-caja.png", "assets/portavasos-05-abierto.png"],
    "measure": null,
    "retail": "00003",
    "wholesale": "00002"
  },
  {
    "id": "souvenir-38",
    "section": "souvenirs",
    "category": "portavasos",
    "name": "Portavasos #6",
    "description": "Portavasos decorativos elaborados en madera, con diseños coloridos inspirados en Colombia y el arte colombiano.",
    "images": ["assets/portavasos-06-caja.png", "assets/portavasos-06-abierto.png"],
    "measure": null,
    "retail": "00003",
    "wholesale": "00002"
  },
  {
    "id": "souvenir-39",
    "section": "souvenirs",
    "category": "portavasos",
    "name": "Portavasos #7",
    "description": "Portavasos decorativos elaborados en madera, con diseños coloridos inspirados en Colombia y el arte colombiano.",
    "images": ["assets/portavasos-07-caja.png", "assets/portavasos-07-abierto.png"],
    "measure": null,
    "retail": "00003",
    "wholesale": "00002"
  },
  {
    "id": "souvenir-40",
    "section": "souvenirs",
    "category": "portavasos",
    "name": "Portavasos #8",
    "description": "Portavasos decorativos elaborados en madera, con diseños coloridos inspirados en Colombia y el arte colombiano.",
    "images": ["assets/portavasos-08-caja.png", "assets/portavasos-08-abierto.png"],
    "measure": null,
    "retail": "00003",
    "wholesale": "00002"
  }
];
