import { reactive } from "vue";

export const store = reactive({
  // dati header
  infoAzienda: [
    {
      telefono: "+1(305) 1234-5678",
      email: "hello@example.com",
      orariApertura: "Mon - Sat - 9:00 - 18:00",
      luogo: "Main Avenue, 123",
    },
  ],
  // dati pagina home
  // card nella terza sezione di home chiamate da metodo
  cardHomePage: [
    {
      ricerca: ["events", "social", "technology"],
      path: "/card1.webp",
      tipo: "Coding",
      tempo: "3 years",
      titolo: "Portfolio item with intro with sidebar",
      text: "lorem ipsum bla bla bla sit consectetur adisipsiscing elit.",
    },
    {
      ricerca: ["enviroment", "innovation"],
      path: "/cuffie2.avif",
      tipo: "Coding",
      tempo: "3 years",
      titolo: "Portfolio item with intro with sidebar",
      text: "lorem ipsum bla bla bla sit consectetur adisipsiscing elit.",
    },
    {
      ricerca: ["social", "technology", "innovation"],
      path: "/fiore.avif",
      tipo: "Coding",
      tempo: "3 years",
      titolo: "Portfolio item with intro with sidebar",
      text: "lorem ipsum bla bla bla sit consectetur adisipsiscing elit.",
    },
    {
      ricerca: ["istitutional", "technology"],
      path: "/card2.jpg",
      tipo: "Coding",
      tempo: "3 years",
      titolo: "Portfolio item with intro with sidebar",
      text: "lorem ipsum bla bla bla sit consectetur adisipsiscing elit.",
    },
    {
      ricerca: ["enviroment", "events", "istitutional"],
      path: "/vaso.avif",
      tipo: "Coding",
      tempo: "3 years",
      titolo: "Portfolio item with intro with sidebar",
      text: "lorem ipsum bla bla bla sit consectetur adisipsiscing elit.",
    },
    {
      ricerca: ["enviroment", "innovation"],
      path: "/avocado.jpg",
      tipo: "Coding",
      tempo: "3 years",
      titolo: "Portfolio item with intro with sidebar",
      text: "lorem ipsum bla bla bla sit consectetur adisipsiscing elit.",
    },
  ],
  menu: [
    {
      titolo: "all",
      active: true,
    },
    {
      titolo: "enviroment",
      active: false,
    },
    {
      titolo: "events",
      active: false,
    },
    {
      titolo: "istitutional",
      active: false,
    },
    {
      titolo: "social",
      active: false,
    },
    {
      titolo: "technology",
      active: false,
    },
    {
      titolo: "innovation",
      active: false,
    },
  ],
  // card sezione sotto jambo home
  card: [
    {
      icon: "/svg-1.svg",
      title: "Audit & Assurance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.",
    },
    {
      icon: "/svg-2.svg",
      title: "Financial Advisory",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.",
    },
    {
      icon: "/svg-3.svg",
      title: "Analytics and M&A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.",
    },
    {
      icon: "/svg-4.svg",
      title: "Middle Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.",
    },
    {
      icon: "/svg-5.svg",
      title: "Legal Consulting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.",
    },
    {
      icon: "/svg-6.svg",
      title: "Regulatory Risk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.",
    },
  ],
  textJambo: [
    {
      title: "We Share",
      titleEvidenziato: "Good Ideas",
      text: "Escape the comfort zone and achieve better results with the help of experts who understand the subject ",
    },
    {
      title: "Ready",
      titleEvidenziato: "Team",
      text: "No matter what what your company needs, we will ge ready to assist you in the best possible way. ",
    },
    {
      title: "Talk to a",
      titleEvidenziato: "Consultant",
      text: "Do not miss the opportunity to achieve better results and solidity in the market.",
    },
  ],
  // card pagina services
  services: [
    {
      icon: "/public/svg-1.svg",
      title: "Audit & Assurance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.",
    },
    {
      icon: "/public/svg-2.svg",
      title: "Financial Advisory",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.",
    },
    {
      icon: "/public/svg-3.svg",
      title: "Analytics and M&A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.",
    },
    {
      icon: "/public/svg-4.svg",
      title: "Middle Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.",
    },
    {
      icon: "/public/svg-5.svg",
      title: "Legal Consulting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.",
    },
    {
      icon: "/public/svg-6.svg",
      title: "Regulatory Risk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.",
    },
  ],
  // inizio dati pagina shop
  selectionValue: "menu_order",
  // dati vestiti
  clothes: [
    {
      id: 1,
      nome: "Black hooded sweatshirt",
      prezzoOriginale: 200.0,
      prezzoAttuale: 129,
      img: "/clothes/black_hoodie.jpg",
      popularity: 10,
      rating: 7,
      date: 2,
      type: [
        "Clothing",
        "Hoodies",
        "Black",
        "Long Sleeve",
        "With Hood",
        "With Print",
      ],
    },
    {
      id: 2,
      nome: "Black t-shirt with lamp print",
      prezzoAttuale: 45.0,
      prezzoOriginale: 100.0,
      img: "/clothes/black_tshirt.jpg",
      popularity: 20,
      rating: 9,
      date: 4,
      type: ["Clothing", "Tshirts", "Black", "With Print"],
    },
    {
      id: 3,
      nome: "Blue hooded sweatshirt",
      prezzoOriginale: 129.0,
      prezzoAttuale: 89.0,
      img: "/clothes/blue_hoodie.jpg",
      popularity: 40,
      rating: 2,
      date: 6,
      type: [
        "Clothing",
        "Hoodies",
        "Blue",
        "Long Sleeve",
        "With Hood",
        "With Print",
      ],
    },
    {
      id: 4,
      nome: "Brown hooded sweatshirt",
      prezzoOriginale: 75.0,
      prezzoAttuale: 39.0,
      img: "/clothes/brown_hoodie.jpg",
      popularity: 50,
      rating: 4,
      date: 10,
      type: [
        "Clothing",
        "Hoodies",
        "Brown",
        "Long Sleeve",
        "With Hood",
        "With Print",
      ],
    },
    {
      id: 5,
      nome: "Gray hooded sweatshirt",
      prezzoOriginale: "",
      prezzoAttuale: 149.0,
      img: "/clothes/gray_hoodie.jpg",
      popularity: 60,
      rating: 10,
      date: 8,
      type: [
        "Clothing",
        "Hoodies",
        "Gray",
        "Long Sleeve",
        "With Hood",
        "With Print",
      ],
    },
    {
      id: 6,
      nome: "Navy Blue hooded sweatshirt",
      prezzoOriginale: "",
      prezzoAttuale: 79.0,
      img: "/clothes/navy_blue_hoodie.jpg",
      popularity: 80,
      rating: 5,
      date: 9,
      type: [
        "Clothing",
        "Hoodies",
        "Blue",
        "Long Sleeve",
        "With Hood",
        "With Print",
      ],
    },
    {
      id: 7,
      nome: "Ninja square poster",
      prezzoOriginale: 60.0,
      prezzoAttuale: 35.0,
      img: "/clothes/ninja_square_poster.jpg",
      popularity: 85,
      rating: 8,
      date: 7,
      type: ["Ninja", "With Print"],
    },
    {
      id: 8,
      nome: "Red hooded sweatshirt",
      prezzoOriginale: "",
      prezzoAttuale: 45.0,
      img: "/clothes/red_hoodie.jpg",
      popularity: 87,
      rating: 3,
      date: 1,
      type: [
        "Clothing",
        "Hoodies",
        "Long Sleeve",
        "Red",
        "With Hood",
        "With Print",
      ],
    },
    {
      id: 9,
      nome: "Skull square poster",
      prezzoOriginale: "",
      prezzoAttuale: 20.0,
      img: "/clothes/skull_poster.jpg",
      popularity: 90,
      rating: 7,
      date: 5,
      type: ["Skull", "With Print"],
    },
    {
      id: 10,
      nome: "White ninja print t-shirt",
      prezzoOriginale: "",
      prezzoAttuale: 90.0,
      img: "/clothes/white_ninja_print.jpg",
      popularity: 100,
      rating: 6,
      date: 4,
      type: ["Clothing", "Tshirts", "Ninja", "White", "With Print"],
    },
  ],
  // dati menu caratteristiche
  colorClothes: [
    "All",
    "Black",
    "Blue",
    "Brown",
    "Gray",
    "House",
    "Long Sleeve",
    "Ninja",
    "Red",
    "Shirt",
    "Skull",
    "White",
    "With Hood",
    "With Print",
  ],
  // dati menu filtro con icona
  typeClothes: ["All", "Clothing", "Hoodies", "Tshirts"],
});
