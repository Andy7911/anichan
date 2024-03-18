var data =[{
    "id":0,
    "thumbnail":"../static/img/maxresdefault.jpeg",
    "title_img":"../static/img/ToArise_Logo-2.webp",
    "text":"Depuis trois siècles, la planète Dhana est asservie par sa voisine, la planète Rena. Ses habitants sont réduits à l'esclavage primaire par les Réniens. Le joueur incarne Alphen. Amnésique et insensible à la douleur, sa vie va basculer lors de sa rencontre avec Shionne, dont le fait de la toucher provoque une extrême douleur.",
    "image_gif":"../static/img/TALESOFARISE.gif",
    'audio':'../static/img/arise.MP3',
    "image_buttom":"../static/storage/shionne_vymer.webp",

},
{
    "id":1,
    "thumbnail":"../static/img/claymore.jpeg",
    "title_img":"../static/img/Claymore_(manga)_logo_2.png",
    "text":"Les Claymores sont des guerrières mi-humaines mi-démons auxquelles font appel les villageois pour se protéger de monstres tels que les démons. Craintes et redoutées, on les distingue à leurs yeux argentés et à l'épée gigantesque qu'elles portent sur le dos, d'où leurs appellations par les humains de « sorcières aux yeux d'argent » ou bien de « Claymore » (le nom du type d'épée qu'elles utilisent",
    "image_gif":"../static/img/Claymore_AMV.gif",
    'audio':'../static/img/claymore-short.MP3',
    "image_buttom":"../static/img/claymore_clarvector.png",


},
{
    "id":2,
    "thumbnail":"../static/img/tokyo-thumb.jpeg",
    "title_img":"../static/img/title-tokyo.png",
    "text":"Après être remonté douze ans en arrière, à l'époque où il était au secondaire (les meilleures années de sa vie), Takemichi réécrit l'histoire en faisant des choix différents afin de sauver sa chérie dans le futur.",
    "image_gif":"../static/img/tokyo-revenfer.gif",
    'audio':'../static/img/babycry.MP3',
    "image_buttom":"../static/img/tokyo_revengers_f0vnb4-375w-2x.png",


},
{
    "id":3,
    "thumbnail":"../static/img/stein-gate-thumb.jpeg",
    "title_img":"../static/img/stein-gate-title.png",
    "text":"Après être remonté douze ans en arrière, à l'époque où il était au secondaire (les meilleures années de sa vie), Takemichi réécrit l'histoire en faisant des choix différents afin de sauver sa chérie dans le futur.",
    "image_gif":"../static/img/SteinsGate.gif",
    'audio':'../static/img/stein-gate-short.MP3',
    "image_buttom":"../static/img/kurisu-makise-steins-gate-bottom.png",


},  {
    "id":4,
    "thumbnail":"../static/img/Psycho-Pass-Wallpaper.jpeg",
    "title_img":"../static/img/psychopass-loco.png",
    "text":"En 2112, au Japon, Sibyl, un système informatique, a transformé la société en monde parfait. Grâce aux caméras, drones et scanneurs omniprésents, Sibyl est capable d'analyser et quantifier la santé mentale et morale des citoyens (ce qui donne le 'Psycho-Pass') et ainsi d'identifier les personnes susceptibles de commettre un crime.",
    "image_gif":"../static/img/psychopass.gif",
    'audio':'../static/img/psycho-pass.MP3',
    "image_buttom":"../static/img/psycho-padd-bottom.png",


},
{
    "id":4,
    "thumbnail":"../static/img/made_in_abyss_thumb.jpeg",
    "title_img":"../static/img/made_logo.webp",
    "text":"La cité entoure un étrange et immense gouffre, communément appelé « l’Abysse ». L’Abysse recèle des artefacts et des vestiges d’une ancienne civilisation disparue, et est de fait un lieu prisé par les caverniers pour l’excavation de ces objets pouvant être vendus à l’étranger.",
    "image_gif":"../static/img/MadeInAbyssAMV-HanezeveCaradhina-ezgif.com-optimize.gif",
    'audio':'../static/img/Made-in-abyss.MP3',
    "image_buttom":"../static/img/reg_official.png",


}

]    
import swiper from 'swiper';
  
  export default class HomePage {

    constructor() {
        console.log('Module Anime initialized'); 
        this.thumbnail = document.getElementsByClassName("animes__thumbnail");  
         this.audio = document.getElementsByClassName("animes__audioPlayer");
         

        this.populateThumb()  
        this.initThumb()
        this.startbanner()
     this.removeBanner()
        console.log('audio',audio)
     
        
    }
    // Peupler les images thumbnail de chaque anime
    populateThumb() {
        var animeWrap = document.getElementsByClassName("animes")[0]
        for (let i =0;i< data.length;i++){

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
    startbanner(thumb,i){

        for(let i=0; i < this.thumbnail.length;i++){
           
            if(this.thumbnail[i].classList.contains('active')){
                this.thumbnail[i].classList.remove('active');
                this.audio[i].currentTime=1;
                this.audio[i].pause();
                this.removeBanner(i,thumb)
            }
        }
        let banner = document.getElementsByClassName("banner")[0]
        banner.innerHTML=""
        banner.innerHTML +=`<img class="banner__gif" loading="lazy" src="${data[i].image_gif}" width="800" height="700">`
        banner.innerHTML+= `<div class="banner__inside">
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
            gsap.to(".banner",{x:-800,duration:1.5,display:"flex"})
            gsap.to(".banner__img_title",{opacity:1,duration:8})
            gsap.to(".banner__img_bottom", {y: -325,duration: 3});
       
            thumb.classList.add("active");
   
       
          if(this.audio[i].currentTime == 0)
            this.audio[i].currentTime=1;
            this.audio[i].volume = 0.25;
            this.audio[i].play()
        
            this.closeBtn.addEventListener("click",()=>{
                debugger;
                this.removeBanner(i,thumb)
            })
      
    
        }
        // retire la banniere et son animation   
        removeBanner(i,thumb){
            debugger;
            gsap.to(".banner",{x:0,display:"none"})
            gsap.to(".banner__img_title",{opacity:0,duration:1})
            gsap.to(".banner__img_bottom", {y: 0,duration: 1});
            this.audio[i].currentTime=1;
            this.audio[i].pause()
            if(thumb.classList.contains('active')){
                this.thumbnail[i].classList.remove('active');
            }
            else
            thumb.classList.toggle("active");
        
         }
        initThumb(){
            var thumbnail = document.getElementsByClassName("animes__thumbnail");
                console.log(thumbnail)
        for(let i = 0; i< data.length;i++){
   
            thumbnail[i].addEventListener("click",()=>{
        
                this.startbanner(thumbnail[i],i);
            })
        
            
        }}
    
   }