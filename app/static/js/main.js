
import '../sass/application.scss';
import Dashboard from './Dashbord';
import HomePage from './HomePage';
import Watching from './Washing';
class Main {
    constructor() {
        this.initElements(); 
       
    }
    initElements() {
       
        // Récupérer tous les éléments avec des classes spécifiques
        const elements = document.querySelectorAll('.home-page, .dashboard, .watch-page');

        // Itérer sur chaque élément et appliquer un comportement en fonction de la classe
        elements.forEach(element => {
            this.handleElementByClass(element);
        });
    }
    handleElementByClass(element) {
        debugger;
        switch (element.classList[0]) {
            case 'home-page':
                // Code spécifique pour l'élément avec la classe "Home page"
                console.log('Code pour la classe "Home page"');
               new HomePage();
                break;
            case 'dashboard':
                // Code spécifique pour l'élément avec la classe "Dashboard"
                console.log('Code pour la classe "Dashboard"');
                new Dashboard();
            break
            case 'watch-page':
                console.log('code pour la classe watching');
                new Watching();
            break;
            default:
                // Code par défaut si aucune classe ne correspond
                console.log('Code par défaut');
                break;
        }
    }

} 
document.addEventListener('DOMContentLoaded', () => {
        const main = new Main();
    });