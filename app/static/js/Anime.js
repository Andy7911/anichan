import Dropzone from "dropzone";
// import "dropzone/dist/dropzone.css";



export default class Anime {

  constructor() {
    console.log("Anime init ")
    // this.initDropZone();
    this.list = document.querySelectorAll(".navigation li");
    this.toggle = document.querySelector(".toggle");
    this.navigation = document.querySelector(".navigation");
    this.main = document.querySelector(".main");
    this.activeLink();
    this.mouseOver();
    this.toggleClass();
this.inputSelect();
this.initDropZone();
  }
// add hovered class to selected list item
   
    inputSelect(){
      new MultiSelectTag('chosen-select') 
    }

activeLink() {
  
  this.list.forEach((item) => {
    item.classList.remove("hovered");
  });
  // this.classList.add("hovered");
}
mouseOver(){
this.list.forEach((item) => item.addEventListener("mouseover", this.activeLink()));
}

// Menu Toggle

toggleClass(){
  let main = document.querySelector(".main");

let navigation = document.querySelector(".navigation");
this.toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
}; 
}

  initDropZone() {
    // Dropzone for Images
    // var imageDropzone = new Dropzone("#imageDropzone", { acceptedFiles: 'image/*' });

    // // Dropzone for Videos
    // var videoDropzone = new Dropzone("#videoDropzone", { acceptedFiles: 'video/*' });

    // // Dropzone for Music
    // var musicDropzone = new Dropzone("#musicDropzone", { acceptedFiles: 'audio/*' });

    const output = document.querySelector("#output");

    Dropzone.autoDiscover = false;

    var myDropzone = new Dropzone("#imageDropzone", {
      url:"/upload",
      acceptedFiles:"image/*",
      addRemoveLinks: true, // Ajoute les liens de suppression
      maxFiles:1,
      paramName:'image',
      // Événement après le téléchargement réussi
      success: function (file, response) {
        // Ajouter une classe pour identifier le fichier
        file.previewElement.classList.add("dz-success");
        output.innerHTML += `<div>File added: ${file.name} size:${file.size}  </div>`;

      }
    });

    // var myDropzone = new Dropzone("#videoDropzone", {
    //   url:'/upload/image',
    //   acceptedFiles:"video/*",
    //   addRemoveLinks: true, // Ajoute les liens de suppression

    //   // Événement après le téléchargement réussi
    //   success: function (file, response) {
    //     // Ajouter une classe pour identifier le fichier
    //     file.previewElement.classList.add("dz-success");
    //     output.innerHTML += `<div>File added: ${file.name} size:${file.size}  </div>`;

    //   }
    // });

    // var myDropzone = new Dropzone("#musicDropzone", {
    //   url:'/upload/audio',
    //   acceptedFiles:"audio/*",
    //   addRemoveLinks: true, // Ajoute les liens de suppression

    //   // Événement après le téléchargement réussi
    //   success: function (file, response) {
    //     // Ajouter une classe pour identifier le fichier
    //     file.previewElement.classList.add("dz-success");
    //     output.innerHTML += `<div>File added: ${file.name} size:${file.size}  </div>`;

    //   }
    // });
    Dropzone.options.myGreatDropzone = { // camelized version of the `id`
      paramName: "file", // The name that will be used to transfer the file
      maxFilesize: 30, // MB
      maxFiles:1,
      accept: function (file, done) {
        if (file.name == "justinbieber.jpg") {
          done("Naha, you don't.");
        }
        else { done(); }
      }
    };
    myDropzone.on("removedfile", function (file) {
      // Vous pouvez exécuter des actions supplémentaires ici avant la suppression du fichier
      debugger;
      const formData = new FormData();
      formData.append('image', file);

      const options = {
        method: 'POST',
        body: formData // Utilisez l'objet FormData comme corps de la requête
      };
      fetch('/delete', options)
  .then(data => {
    console.log('Le fichier a été envoyé avec succès', data);
  })
  .catch(error => {
    console.error('Erreur:', error);
  });

      console.log("File removed: " + file.name);
    });
  }
}