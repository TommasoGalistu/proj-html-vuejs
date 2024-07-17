import { reactive } from 'vue'

export const store = reactive({
    // card nella terza sezione di home chiamate da metodo
    cardHomePage:[
        
        {
            ricerca: ['events','social','technology'],
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',
            
        },
        {
            ricerca: ['enviroment','innovation'],
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',
            
        },
        {
            ricerca: ['social','technology', 'innovation'],
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',
            
        },
        {
            ricerca:['istitutional','technology'],
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',
            
        },
        {
            ricerca: ['enviroment', 'events', 'istitutional'],
            tipo: 'Coding',
            tempo: '3 years',
            titolo: 'Portfolio item with intro with sidebar',
            text: 'lorem ipsum bla bla bla sit consectetur adisipsiscing elit. Vestibulu...',
            
        },
        {
            ricerca: ['enviroment','innovation'],
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