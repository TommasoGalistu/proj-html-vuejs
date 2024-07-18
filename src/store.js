import { reactive } from 'vue'

export const store = reactive({
    infoAzienda: [
        {
            telefono: '+1(305) 1234-5678',
            email: 'hello@example.com',
            orariApertura: 'Mon - Sat - 9:00 - 18:00',
        }
    ],
    // card nella terza sezione di home chiamate da metodo
    cardHomePage: [

        {
            ricerca: ['events', 'social', 'technology'],
            path: '/cuffie.avif',
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',

        },
        {
            ricerca: ['enviroment', 'innovation'],
            path: '/cuffie2.avif',
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',

        },
        {
            ricerca: ['social', 'technology', 'innovation'],
            path: '/fiore.avif',
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',

        },
        {
            ricerca: ['istitutional', 'technology'],
            path: '/ciliegie.jpg',
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',

        },
        {
            ricerca: ['enviroment', 'events', 'istitutional'],
            path: '/vaso.avif',
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',

        },
        {
            ricerca: ['enviroment', 'innovation'],
            path: '/avocado.jpg',
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',

        },
    ],
    menu: [
        {
            titolo: 'all',
            active: true
        },
        {
            titolo: 'enviroment',
            active: false
        },
        {
            titolo: 'events',
            active: false
        },
        {
            titolo: 'istitutional',
            active: false
        },
        {
            titolo: 'social',
            active: false
        },
        {
            titolo: 'technology',
            active: false
        },
        {
            titolo: 'innovation',
            active: false
        }
    ],

// inizio paolo da 100 a 200 compreso
    clothes: [
        {
            nome: "Black hooded sweatshirt",
            prezzoOriginale: "$200.00",
            prezzoAttuale: "$129.00",
            img: "/public/clothes/black_hoodie.jpg",
        },
        {
            nome: "Black t-shirt with lamp print",
            prezzoAttuale: "$45.00",
            img: "/public/clothes/black_tshirt.jpg",
        },
        {
            nome: "Blue hooded sweatshirt",
            prezzoOriginale: "$129.50",
            prezzoAttuale: "$89.90",
            img: "/public/clothes/blue_hoodie.jpg",
        },
        {
            nome: "Brown hooded sweatshirt",
            prezzoOriginale: "$75.00",
            prezzoAttuale: "$39.50",
            img: "/public/clothes/brown_hoodie.jpg",
        },
        {
            nome: "Gray hooded sweatshirt",

            prezzoAttuale: "$149.00",
            img: "/public/clothes/gray_hoodie.jpg",
        },
        {
            nome: "Navy Blue hooded sweatshirt",

            prezzoAttuale: "$79.00",
            img: "/public/clothes/navy_blue_hoodie.jpg",
        },
        {
            nome: "Ninja square poster",
            prezzoOriginale: "$60.00",
            prezzoAttuale: "$35.00",
            img: "/public/clothes/ninja_square_poster.jpg",
        },
        {
            nome: "Red hooded sweatshirt",

            prezzoAttuale: "$45.90",
            img: "/public/clothes/red_hoodie.jpg",
        },
        {
            nome: "Skull square poster",

            prezzoAttuale: "$20.00",
            img: "/public/clothes/skull_poster.jpg",
        },
        {
            nome: "White ninja print t-shirt",

            prezzoAttuale: "$90.00",
            img: "/public/clothes/white_ninja_print.jpg",
        }
    ],







































    // inizio ale da 201 
    services: [
        {
          icon: "/public/svg-1.svg",
          title: "Audit & Assurance",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia."
        },
        {
          icon: "/public/svg-2.svg",
          title: "Financial Advisory",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia."
        },
        {
          icon: "/public/svg-3.svg",
          title: "Analytics and M&A",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia."
        },
        {
          icon: "/public/svg-4.svg",
          title: "Middle Marketing",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia."
        },
        {
          icon: "/public/svg-5.svg",
          title: "Legal Consulting",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia."
        },
        {
          icon: "/public/svg-6.svg",
          title: "Regulatory Risk",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia."
        }
      ]
});







