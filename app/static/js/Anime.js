import Dropzone from "dropzone";
// import "dropzone/dist/dropzone.css";
import axios from "axios";


export default class Anime {

  constructor() {
    console.log("Anime init ")
    // this.initDropZone();
    this.list = document.querySelectorAll(".navigation li");
    this.toggle = document.querySelector(".toggle");
    this.navigation = document.querySelector(".navigation");
    this.main = document.querySelector(".main");
    this.formulaire = document.getElementById('formulaire');
    this.activeLink();
    this.mouseOver();
    this.toggleClass();
    this.inputSelect();
    this.initDropZone();
    this.file_title = null;
    this.file_music;
    this.file_gif = null;
    this.file_bottom = null;
    this.onClickEven();
    this.getMultiSelecte();
    this.uploadedFiles = {};
    this.onFileUploadSuccess(this);
    this.count = 1;
  }
  getMultiSelecte() {
    var selectElement = document.getElementById("chosen-select");
     var selectedValues = Array.from(selectElement.selectedOptions).map(option => option.value)
     console.log(selectedValues);
  }
  // add hovered class to selected list item
  onSend(event){
    event.preventDefault();
    debugger;
    var selectElement = document.getElementById("chosen-select");
    var selectedValues = Array.from(selectElement.selectedOptions).map(option => option.value)
    console.log(selectedValues);
    
    this.count++;
    Object.keys(this.uploadedFiles).forEach(fileName => {
    ('files',this.uploadedFiles[fileName]) 
    });
    var radioCat = document.querySelector('input[name="categorie"]:checked');
    var title = document.getElementById('title');
    var description = document.getElementById('description');
    console.log("radioCat", radioCat.value);
    console.log("title", title.value);
    console.log("description", description.value);
    const formData = new FormData();
    formData.append("title",title.value);
    formData.append("description",description.value)
    // formData.append('image', file);
    // formData.append("image_title", this.file_title);
    Object.keys(this.uploadedFiles).forEach(fileName => {
      formData.append('files',this.uploadedFiles[fileName]) 
      });
    formData.append("music",this.file_music)
    formData.append("type",radioCat.value)
    for( var option of selectedValues){
    formData.append("genre[]", option);
  }

    const options = {
      method : "Post",
      body : formData
    }
  axios.post('/api/createAnime',formData,{
   
   
  }).then(()=>console.log('ss')).catch(error=> console.log(error))
}
  onClickEven() {
    this.formulaire.addEventListener("submit", this.onSend.bind(this))

    
  }

  onFileUploadSuccess(file, response) {
    // Stocker le fichier ou les informations du fichier
   
    this.count++;
    this.uploadedFiles[file.name] = file;

    // Mettre à jour l'interface utilisateur ou effectuer d'autres actions
    console.log(`File added: ${file.name}, size: ${file.size}`);
}

  onSubmit() {
    const formData = new FormData();
    formData.append('image', file);
    formData.append("image_title", this.file_title);
    formData.append("music",this.file_music)
    

    const options = {
      method: 'POST',
      body: formData // Utilisez l'objet FormData comme corps de la requête
    };
    fetch('/create', options)
      .then(data => console.log("sucess anime create", data))
      .catch(error => console.log('james nothing compile', error))



  }
  inputSelect() {
    new MultiSelectTag('chosen-select')
  }

  activeLink() {

    this.list.forEach((item) => {
      item.classList.remove("hovered");
    });
    // this.classList.add("hovered");
  }
  mouseOver() {
    this.list.forEach((item) => item.addEventListener("mouseover", this.activeLink()));
  }

  // Menu Toggle

  toggleClass() {
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
    var that = this;
    var myDropzoneImg = new Dropzone("#imageDropzone", {
      url: "/upload",
      acceptedFiles: "image/*",
      addRemoveLinks: true, // Ajoute les liens de suppression
      maxFiles: 1,
      paramName: 'image_title',
      // Événement après le téléchargement réussi
      success: function (file, response) {
        // Ajouter une classe pour identifier le fichier
        file.previewElement.classList.add("dz-success");
        output.innerHTML += `<div>File added: ${file.name} size:${file.size}  </div>`;
        debugger

        that.file_title

      }
    });
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


    var myDropzoneGif = new Dropzone("#videoDropzone", {
      url: '/upload',
      acceptedFiles: 'image/gif',
      addRemoveLinks: true, // Ajoute les liens de suppression
      paramName: "image_gif",
      // Événement après le téléchargement réussi
      success: function (file, response) {
        // Ajouter une classe pour identifier le fichier
        file.previewElement.classList.add("dz-success");
        output.innerHTML += `<div>File added: ${file.name} size:${file.size}  </div>`;
        this.file_gif
      }
    });

    var myDropzoneMusic = new Dropzone("#musicDropzone", {
      url: '/upload',
      acceptedFiles: "audio/*",
      addRemoveLinks: true, // Ajoute les liens de suppression
      paramName: "music",
      // Événement après le téléchargement réussi
      success: (file, response) => {
        // Ajouter une classe pour identifier le fichier
        debugger;
        file.previewElement.classList.add("dz-success");
        output.innerHTML += `<div>File added: ${file.name} size:${file.size}  </div>`;
        this.file_music = file;
      }
    });
    var myDropzoneBottom = new Dropzone("#bottomDropzone", {
      url: '/upload',
      acceptedFiles: "image/*",
      addRemoveLinks: true, // Ajoute les liens de suppression
      paramName: "imageBottom",
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
      maxFiles: 1,
      accept: function (file, done) {
        if (file.name == "justinbieber.jpg") {
          done("Naha, you don't.");
        }
        else { done(); }
      }
    };
    myDropzoneImg.on("removedfile", function (file) {

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
    myDropzoneGif.on("removedfile", function (file) {
      // Vous pouvez exécuter des actions supplémentaires ici avant la suppression du fichier
      debugger;

      const formData = new FormData();
      formData.append('image_gif', file);

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
    myDropzoneMusic.on("removedfile", function (file) {
      // Vous pouvez exécuter des actions supplémentaires ici avant la suppression du fichier
      debugger;

      const formData = new FormData();
      formData.append('music', file);

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
    myDropzoneBottom.on("removedfile", function (file) {
      // Vous pouvez exécuter des actions supplémentaires ici avant la suppression du fichier
      debugger;

      const formData = new FormData();
      formData.append('image_bottom', file);

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

    myDropzonethumb.on("removedfile", function (file) {
      // Vous pouvez exécuter des actions supplémentaires ici avant la suppression du fichier
      debugger;

      const formData = new FormData();
      formData.append('image_bottom', file);

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