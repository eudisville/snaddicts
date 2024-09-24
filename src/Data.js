const product = [
    {
        id: 1,
        name: "Air Jordan 1 Gym Red",
        description: "La Nike SB Dunk Low Pro reprend le look emblématique de la Dunk dans une coupe basse. L'unité Zoom Air dans le talon et la languette matelassée procurent un confort optimal pour pratiquer le skate.",
        price: "20 000",
        imageUrl: "gym red.jpg",
        category: "Nike",
        inStock: true
    },
    {
        id: 2,
        name: "Adidas Campus Gree",
        description: "Une nouvelle chaussure",
        price: "21 000",
        imageUrl: "cam.png",
        category: "Adidas",
        inStock: true
    },
    {
        id: 3,
        name: "Air Jordan 1 x Travis Scott",
        description: "Une nouvelle chaussure",
        price: "30 000",
        imageUrl: "travis scott.jpg",
        category: "Nike",
        inStock: false
    },
    {
        id: 4,
        name: "Nike Dunk Low Midas Gold",
        description: "Une nouvelle chaussure",
        price: "24 000",
        imageUrl: "midas gold.jpg",
        category: "Nike",
        inStock: true
    },
    {
        id: 5,
        name: "Yeezy 700",
        description: "Une nouvelle chaussure",
        price: "30 000",
        imageUrl: "700.png",
        category: "Adidas",
        inStock: false
    },
    {
        id: 6,
        name: "Curry 3",
        description: "Une nouvelle chaussure",
        price: "30 000",
        imageUrl: "curry.png",
        category: "Under Armour",
        inStock: false
    },
    {
        id: 7,
        name: "Puma Clyde All Pro",
        description: "Une nouvelle chaussure",
        price: "45 000",
        imageUrl: "kuz.jpeg",
        category: "Puma",
        inStock: false
    },
    {
        id: 8,
        name: "All Star Converse Chuck Taylor",
        description: "Une nouvelle chaussure",
        price: "12 000",
        imageUrl: "cht.png",
        category: "Converse",
        inStock: true
    },
    {
        id: 9,
        name: "Adidas Samba OG",
        description: "Née sur les terrains de football, la Samba est désormais une icône streetwear intemporelle. Cette silhouette reste fidèle à son héritage, avec une tige en cuir souple basse et élégante, des empiècements en suède et une semelle en gomme, qui en font un essentiel de tous les dressings.",
        price: "64 000",
        imageUrl: "samba.jpg",
        category: "Adidas",
        inStock: true
    },
    {
        id: 10,
        name: "Nike SB Dunk Low Premium QS",
        description: "Née sur les terrains de football, la Samba est désormais une icône streetwear intemporelle. Cette silhouette reste fidèle à son héritage, avec une tige en cuir souple basse et élégante, des empiècements en suède et une semelle en gomme, qui en font un essentiel de tous les dressings.",
        price: "25 000",
        imageUrl: "premium.jpg",
        category: "Nike",
        inStock: true
    },
    {
        id: 11,
        name: "Nike Dunk Low",
        description: "Née sur les terrains de football, la Samba est désormais une icône streetwear intemporelle. Cette silhouette reste fidèle à son héritage, avec une tige en cuir souple basse et élégante, des empiècements en suède et une semelle en gomme, qui en font un essentiel de tous les dressings.",
        price: "20 000",
        imageUrl: "dunk.jpg",
        category: "Nike",
        inStock: true
    },
    {
        id: 12,
        name: "Nike Dunk Low SP Brazil",
        description: "Née sur les terrains de football, la Samba est désormais une icône streetwear intemporelle. Cette silhouette reste fidèle à son héritage, avec une tige en cuir souple basse et élégante, des empiècements en suède et une semelle en gomme, qui en font un essentiel de tous les dressings.",
        price: "28 000",
        imageUrl: "sp.jpg",
        category: "Nike",
        inStock: true
    },
    {
        id: 13,
        name: "Air Jordan 1 OG 'Voodoo'",
        description: "Née sur les terrains de football, la Samba est désormais une icône streetwear intemporelle. Cette silhouette reste fidèle à son héritage, avec une tige en cuir souple basse et élégante, des empiècements en suède et une semelle en gomme, qui en font un essentiel de tous les dressings.",
        price: "28 000",
        imageUrl: "voodoo.jpg",
        category: "Nike",
        inStock: true
    },
    {
        id: 14,
        name: "Nike Dunk Low Jarritos",
        description: "Née sur les terrains de football, la Samba est désormais une icône streetwear intemporelle. Cette silhouette reste fidèle à son héritage, avec une tige en cuir souple basse et élégante, des empiècements en suède et une semelle en gomme, qui en font un essentiel de tous les dressings.",
        price: "28 000",
        imageUrl: "jarritos.jpg",
        category: "Nike",
        inStock: true
    },
    {
        id: 15,
        name: "Nike Dunk Low Purple Pigeon",
        description: "Née sur les terrains de football, la Samba est désormais une icône streetwear intemporelle. Cette silhouette reste fidèle à son héritage, avec une tige en cuir souple basse et élégante, des empiècements en suède et une semelle en gomme, qui en font un essentiel de tous les dressings.",
        price: "28 000",
        imageUrl: "purple.jpg",
        category: "Nike",
        inStock: true
    },
    {
        id: 16,
        name: "Nike Air Jordan 1 Midnight Navy",
        description: "Née sur les terrains de football, la Samba est désormais une icône streetwear intemporelle. Cette silhouette reste fidèle à son héritage, avec une tige en cuir souple basse et élégante, des empiècements en suède et une semelle en gomme, qui en font un essentiel de tous les dressings.",
        price: "26 000",
        imageUrl: "navy.jpg",
        category: "Nike",
        inStock: true
    },
    {
        id: 17,
        name: "Nike Air Jordan 1 x Travis Scott",
        description: "Née sur les terrains de football, la Samba est désormais une icône streetwear intemporelle. Cette silhouette reste fidèle à son héritage, avec une tige en cuir souple basse et élégante, des empiècements en suède et une semelle en gomme, qui en font un essentiel de tous les dressings.",
        price: "33 000",
        imageUrl: "olive.jpg",
        category: "Nike",
        inStock: true
    },
    {
        id: 18,
        name: "Nike Air Jordan 1 SP Retro Mocha",
        description: "Née sur les terrains de football, la Samba est désormais une icône streetwear intemporelle. Cette silhouette reste fidèle à son héritage, avec une tige en cuir souple basse et élégante, des empiècements en suède et une semelle en gomme, qui en font un essentiel de tous les dressings.",
        price: "30 000",
        imageUrl: "mocha.jpg",
        category: "Nike",
        inStock: true
    },
]

export { product };