var data = [{
    "id": 0,
    "thumbnail": "../static/img/maxresdefault.jpeg",
    "title_img": "../static/img/ToArise_Logo-2.webp",
    "text": "Depuis trois siècles, la planète Dhana est asservie par sa voisine, la planète Rena. Ses habitants sont réduits à l'esclavage primaire par les Réniens. Le joueur incarne Alphen. Amnésique et insensible à la douleur, sa vie va basculer lors de sa rencontre avec Shionne, dont le fait de la toucher provoque une extrême douleur.",
    "image_gif": "../static/img/TALESOFARISE.gif",
    'audio': '../static/img/arise.MP3',
    "image_buttom": "../static/img/shionne_vymer.webp",

},
{
    "id": 1,
    "thumbnail": "../static/img/claymore.jpeg",
    "title_img": "../static/img/Claymore_(manga)_logo_2.png",
    "text": "Les Claymores sont des guerrières mi-humaines mi-démons auxquelles font appel les villageois pour se protéger de monstres tels que les démons. Craintes et redoutées, on les distingue à leurs yeux argentés et à l'épée gigantesque qu'elles portent sur le dos, d'où leurs appellations par les humains de « sorcières aux yeux d'argent » ou bien de « Claymore » (le nom du type d'épée qu'elles utilisent",
    "image_gif": "../static/img/Claymore_AMV.gif",
    'audio': '../static/img/claymore-short.MP3',
    "image_buttom": "../static/img/claymore_clarvector.png",


},
{
    "id": 2,
    "thumbnail": "../static/img/tokyo-thumb.jpeg",
    "title_img": "../static/img/title-tokyo.png",
    "text": "Après être remonté douze ans en arrière, à l'époque où il était au secondaire (les meilleures années de sa vie), Takemichi réécrit l'histoire en faisant des choix différents afin de sauver sa chérie dans le futur.",
    "image_gif": "../static/img/tokyo-revenfer.gif",
    'audio': '../static/img/babycry.MP3',
    "image_buttom": "../static/img/tokyo_revengers_f0vnb4-375w-2x.png",


},
{
    "id": 3,
    "thumbnail": "../static/img/stein-gate-thumb.jpeg",
    "title_img": "../static/img/stein-gate-title.png",
    "text": "Après être remonté douze ans en arrière, à l'époque où il était au secondaire (les meilleures années de sa vie), Takemichi réécrit l'histoire en faisant des choix différents afin de sauver sa chérie dans le futur.",
    "image_gif": "../static/img/SteinsGate.gif",
    'audio': '../static/img/stein-gate-short.MP3',
    "image_buttom": "../static/img/kurisu-makise-steins-gate-bottom.png",


}, {
    "id": 4,
    "thumbnail": "../static/img/Psycho-Pass-Wallpaper.jpeg",
    "title_img": "../static/img/psychopass-loco.png",
    "text": "En 2112, au Japon, Sibyl, un système informatique, a transformé la société en monde parfait. Grâce aux caméras, drones et scanneurs omniprésents, Sibyl est capable d'analyser et quantifier la santé mentale et morale des citoyens (ce qui donne le 'Psycho-Pass') et ainsi d'identifier les personnes susceptibles de commettre un crime.",
    "image_gif": "../static/img/psychopass.gif",
    'audio': '../static/img/psycho-pass.MP3',
    "image_buttom": "../static/img/psycho-padd-bottom.png",


},
{
    "id": 4,
    "thumbnail": "../static/img/made_in_abyss_thumb.jpeg",
    "title_img": "../static/img/made_logo.webp",
    "text": "La cité entoure un étrange et immense gouffre, communément appelé « l’Abysse ». L’Abysse recèle des artefacts et des vestiges d’une ancienne civilisation disparue, et est de fait un lieu prisé par les caverniers pour l’excavation de ces objets pouvant être vendus à l’étranger.",
    "image_gif": "../static/img/MadeInAbyssAMV-HanezeveCaradhina-ezgif.com-optimize.gif",
    'audio': '../static/img/Made-in-abyss.MP3',
    "image_buttom": "../static/img/reg_official.png",


},
{
    "id": 5,
    "thumbnail": "../static/img/kaiju-thumb.jpg",
    "title_img": "../static/img/kaiji-title.png",
    "text": "La cité entoure un étrange et immense gouffre, communément appelé « l’Abysse ». L’Abysse recèle des artefacts et des vestiges d’une ancienne civilisation disparue, et est de fait un lieu prisé par les caverniers pour l’excavation de ces objets pouvant être vendus à l’étranger.",
    "image_gif": "../static/img/kaiju.gif",
    'audio': '../static/img/kaiju N8.mp3',
    "image_buttom": "../static/img/kaiji_img1.webp",


},
{
    "id": 6,
    "thumbnail": "../static/img/rick-thumb.png",
    "title_img": "../static/img/rick-title.png",
    "text": "La cité entoure un étrange et immense gouffre, communément appelé « l’Abysse ». L’Abysse recèle des artefacts et des vestiges d’une ancienne civilisation disparue, et est de fait un lieu prisé par les caverniers pour l’excavation de ces objets pouvant être vendus à l’étranger.",
    "image_gif": "../static/img/RickandMorty.gif",
    'audio': '../static/img/rick.mp3',
    "image_buttom": "../static/img/",


},


]
import swiper, { Swiper } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default class HomePage {

    constructor() {
        console.log('Module Anime initialized');
        this.toggleDropmenu()
        this.swiperDate();
        this.liveHours();
        setInterval(this.liveHours, 1000);
        this.fadeInVolume()
        this.thumbnail = document.getElementsByClassName("animes__thumbnail");
        this.audio = document.getElementsByClassName("animes__audioPlayer");
        this.hoverArea = document.getElementById('hover-area');
        this.music = document.getElementById('background-music');
        this.action()
        this.populateThumb()
        this.initThumb()
        this.startbanner()
        this.removeBanner()
        console.log('audio', audio)



    }

    liveHours() {
        const hoursDiv = document.getElementById('schedule__date')
        const now = new Date();
        const timeZone = now.toLocaleTimeString()
        const timezoneOffset = now.toUTCString()
        hoursDiv.textContent = `${timezoneOffset} ${timeZone} `


    }

    swiperDate() {
        const swiper = new Swiper('.schedule__swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 7,
            slidesPerGroup: 1,
            gsap: 35,
            spaceBetween: 20,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            modules: [Navigation, Pagination],
        })
    }
    fadeInVolume() {
        gsap.fromTo(this.music, {
            volume: 0,
          // Type de easing pour une animation en douceur
        },{
            volume:0.30,
             duration: 5, // Durée de l'animation en secondes
            ease: "power1.inOut"
        });
    }
    action() {

        const hero_gif = document.getElementsByClassName('hero__gif')[0]
        const src = hero_gif.src
        debugger
        const hero_img = document.getElementsByClassName('hero__img')[0];
        ScrollTrigger.create({
            trigger: '#hover-area',
            start: 'top 5%',
            end: 'bottom 55%',
            onEnter: () => {
                
                this.music.play()
                this.fadeInVolume();
                hero_gif.src = ""
                hero_gif.src = src
                hero_gif.style.display = 'block'

                hero_img.style.display = 'none'

            }, // lancer la vidéo
            onLeave: () => {
                hero_gif.src = ""
                hero_gif.src = src
                this.music.pause();
                this.music.currentTime = 0;

                hero_gif.style.display = 'none'
                hero_img.style.display = 'block'
            },// mettre la vidéo en pause
            onEnterBack: () => {
                this.music.play()
                hero_gif.src = ""
                hero_gif.src = src
                hero_gif.style.display = 'block'
                hero_img.style.display = 'none'
            }, // relancer la vidéo quand on revient
            onLeaveBack: () => {
                this.music.pause();
                this.music.currentTime = 0;
                hero_gif.style.display = 'none'
                hero_img.style.display = 'block'

            },
            markers: true

        }

        )
        // this.hoverArea.addEventListener('mouseenter',()=> {
        //     console.log('mouse over')
        //     this.music.volume = 0.35;
        //     this.music.play();
        //     this.music.loop = true

        // });

        //     this.hoverArea.addEventListener('mouseleave',()=> {

        //         console.log('mouse out')
        //         setTimeout(()=> {
        //             this.music.pause();
        //             this.music.currentTime = 0;
        //         }, 500);
        //          // Optionnel, réinitialise la musique au début
        //     });
    }
    // Peupler les images thumbnail de chaque anime
    populateThumb() {
        var animeWrap = document.getElementsByClassName("animes")[0]
        for (let i = 0; i < data.length; i++) {

            var anime = `<div class="animes__thumbnail" data-id="${data[i].id}">
             <img src="${data[i].thumbnail}" width="400" loading="lazy" />
             <audio class="animes__audioPlayer" loop controls
                 width="400"
                 =
                 <source src="${data[i].audio}"
                 type="audio/mp3">
             </audio>
         </div>`
            animeWrap.innerHTML += anime

        }


    }
    //Démarre la bannière lorsque qu'on click sur un thumbnail
    startbanner(thumb, i) {

        for (let i = 0; i < this.thumbnail.length; i++) {

            if (this.thumbnail[i].classList.contains('active')) {
                this.thumbnail[i].classList.remove('active');
                this.audio[i].currentTime = 1;
                this.audio[i].pause();
                this.removeBanner(i, thumb)
            }
        }
        let banner = document.getElementsByClassName("banner")[0]
        banner.innerHTML = ""
        banner.innerHTML += `<img class="banner__gif" loading="lazy" src="${data[i].image_gif}" width="800" height="700">`
        banner.innerHTML += `<div class="banner__inside">
            <img class="banner__icon_close" loading="lazy"
                src="../static/img/cross-logo.png">
            <img class="banner__img_title" loading="lazy"
                src="${data[i].title_img}"
                width="300" />
            <p>${data[i].text}.</p>
            <div class="banner__bottom">
            <img class="banner__img_bottom" width="200" loading="lazy"
                src="${data[i].image_buttom}"> 
                <a class="btn" href="/synopsis"> Visionnement <span class="btn__icon"><img src="../static/img/118620_play_icon.png" loading="lazy" / ></span> </a>
                </div>
               
        </div>`

        this.closeBtn = document.getElementsByClassName("banner__icon_close")[0]
        gsap.to(".banner", { x: -800, duration: 1.5, display: "flex" })
        gsap.to(".banner__img_title", { opacity: 1, duration: 8 })
        gsap.to(".banner__img_bottom", { y: -325, duration: 3 });

        thumb.classList.add("active");


        if (this.audio[i].currentTime == 0)
            this.audio[i].currentTime = 1;
        this.audio[i].volume = 0.25;
        this.audio[i].play()

        this.closeBtn.addEventListener("click", () => {
            this.removeBanner(i, thumb)
        })


    }
    // retire la banniere et son animation   
    removeBanner(i, thumb) {

        gsap.to(".banner", { x: 0, display: "none" })
        gsap.to(".banner__img_title", { opacity: 0, duration: 1 })
        gsap.to(".banner__img_bottom", { y: 0, duration: 1 });
        this.audio[i].currentTime = 1;
        this.audio[i].pause()
        if (thumb.classList.contains('active')) {
            this.thumbnail[i].classList.remove('active');
        }
        else
            thumb.classList.toggle("active");

    }
    initThumb() {
        var thumbnail = document.getElementsByClassName("animes__thumbnail");
        console.log(thumbnail)
        for (let i = 0; i < data.length; i++) {

            thumbnail[i].addEventListener("click", () => {

                this.startbanner(thumbnail[i], i);
            })


        }
    }
    toggleDropmenu(){
        var dropmenu = document.querySelectorAll('.filter__dropdown');

        dropmenu.forEach(element =>{

            element.addEventListener('click',function(){
            var sibling = element.nextElementSibling;
            debugger;
            sibling.classList.toggle('active')
            })


        })
    }

}