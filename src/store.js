import { reactive } from 'vue'

export const store = reactive({
    // card nella terza sezione di home chiamate da metodo
    cardHomePage:[
        
        {
            ricerca: ['events','social','technology'],
            path:'/public/cuffie.avif',
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',
            
        },
        {
            ricerca: ['enviroment','innovation'],
            path:'/public/cuffie2.avif',
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',
            
        },
        {
            ricerca: ['social','technology', 'innovation'],
            path:'/public/fiore.avif',
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',
            
        },
        {
            ricerca:['istitutional','technology'],
            path:'/public/ciliegie.jpg',
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',
            
        },
        {
            ricerca: ['enviroment', 'events', 'istitutional'],
            path:'/public/vaso.avif',
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',
            
        },
        {
            ricerca: ['enviroment','innovation'],
            path:'/public/avocado.jpg',
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',
            
        },
    ],
    menu: [
        {
            titolo:'all',
        active:true
        }, 
        {
            titolo:'enviroment',
        active:false
        }, 
        {
            titolo:'events',
        active:false
        },
        {
            titolo:'istitutional',
        active:false
        },
        {
            titolo:'social',
        active:false
        },
        {
            titolo:'technology',
        active:false
        }, 
        {
            titolo:'innovation',
        active:false
        }
    ],

});