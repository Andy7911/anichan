import Dropzone from "dropzone";
// import "dropzone/dist/dropzone.css";



export default class Dashboard {

  constructor() {
    console.log("dashboard init ")
    this.initDropZone();

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
      url:'/upload/image',
      acceptedFiles:"image/*",
      addRemoveLinks: true, // Ajoute les liens de suppression

      // Événement après le téléchargement réussi
      success: function (file, response) {
        // Ajouter une classe pour identifier le fichier
        file.previewElement.classList.add("dz-success");
        output.innerHTML += `<div>File added: ${file.name} size:${file.size}  </div>`;

      }
    });

    var myDropzone = new Dropzone("#videoDropzone", {
      url:'/upload/image',
      acceptedFiles:"video/*",
      addRemoveLinks: true, // Ajoute les liens de suppression

      // Événement après le téléchargement réussi
      success: function (file, response) {
        // Ajouter une classe pour identifier le fichier
        file.previewElement.classList.add("dz-success");
        output.innerHTML += `<div>File added: ${file.name} size:${file.size}  </div>`;

      }
    });

    var myDropzone = new Dropzone("#musicDropzone", {
      url:'/upload/audio',
      acceptedFiles:"audio/*",
      addRemoveLinks: true, // Ajoute les liens de suppression

      // Événement après le téléchargement réussi
      success: function (file, response) {
        // Ajouter une classe pour identifier le fichier
        file.previewElement.classList.add("dz-success");
        output.innerHTML += `<div>File added: ${file.name} size:${file.size}  </div>`;

      }
    });
    Dropzone.options.myGreatDropzone = { // camelized version of the `id`
      paramName: "file", // The name that will be used to transfer the file
      maxFilesize: 30, // MB
      accept: function (file, done) {
        if (file.name == "justinbieber.jpg") {
          done("Naha, you don't.");
        }
        else { done(); }
      }
    };
    myDropzone.on("removedfile", function (file) {
      // Vous pouvez exécuter des actions supplémentaires ici avant la suppression du fichier
      console.log("File removed: " + file.name);
    });
  }
}