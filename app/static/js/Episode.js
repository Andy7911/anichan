import Dropzone from "dropzone";


export default class Episode {

    constructor() {
        this.inputSelect();
        this.button = document.getElementsByClassName("episode__input_add")[0];
        this.inputList = document.getElementsByClassName("episode__input_list")[0]
        this.list = document.querySelectorAll(".navigation li");
        this.toggle = document.querySelector(".toggle");
        this.navigation = document.querySelector(".navigation");
        this.action();
        this.initDropZone();
        this.activeLink();
        this.toggleClass();


    }
    activeLink() {

        this.list.forEach((item) => {
          item.classList.remove("hovered");
        });
        // this.classList.add("hovered");
      }
    toggleClass() {
        let main = document.querySelector(".main");
    
        let navigation = document.querySelector(".navigation");
        this.toggle.onclick = function () {
          navigation.classList.toggle("active");
          main.classList.toggle("active");
        };
      }
    addInput() {
        console.log("click")
        let input = document.createElement('input');

        input.type =  "text"
        input.placeholder = "Entrer le lien"
        input.classList.add("input-base", "input-full__field")

        this.inputList.appendChild(input);
    }
    action() {
        this.button.addEventListener("click", this.addInput.bind(this));
    }
    submit(){
        const allInput = this.inputList.querySelectorAll('input[type="text"]');
    }
    inputSelect() {
        new MultiSelectTag('chosen-select')
    }
    initDropZone(){
        var myDropzonethumb = new Dropzone("#thumbDropzone", {
            url: "/upload",
            acceptedFiles: "image/*",
            addRemoveLinks: true, // Ajoute les liens de suppression
            maxFiles: 1,
           resizeHeight:212,
           resizeWidth:370,
            paramName: 'image_thumb',
            // Événement après le téléchargement réussi
            success: function (file, response) {
              // Ajouter une classe pour identifier le fichier
              file.previewElement.classList.add("dz-success");
              output.innerHTML += `<div>File added: ${file.name} size:${file.size}  </div>`;
            
      
              this.file_title
      
            }
          });
    }
}