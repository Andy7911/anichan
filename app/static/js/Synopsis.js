export default class Synopsis {

    constructor(){
        console.log('synopsis page')
        this.rating();
    }
    
    rating(){
        debugger;
    var rating = document.getElementsByClassName('synopsis_intro__score')[0];
    const ratingContent = rating.innerHTML;
    const ratingScore = parseInt(ratingContent)
    const scoreClass = ratingScore < 40 ? 'bad': ratingScore < 60 ? 'normal':'good';

    rating.classList.add(scoreClass);
    const ratingColor = window.getComputedStyle(rating).backgroundColor;

    const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;
    rating.setAttribute("style", gradient);

    // Wrap the content in a tag to show it above the pseudo element that masks the bar
    rating.innerHTML = `<span>${ratingScore} ${
      ratingContent.indexOf("%") >= 0 ? "<small>%</small>" : ""
    }</span>`;
    console.log('score',ratingScore)

    }
    
    }