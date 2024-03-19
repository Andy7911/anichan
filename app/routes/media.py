from flask import request,Blueprint,Flask
from model.media import Media
from model.anime import Anime
from database.db_connect import get_session, get_engine
import os;
def get_project_root():
    return os.path.dirname(os.path.abspath(__file__))
def get_relative_path():
    current_file = os.path.abspath(__file__)
    app_directory = os.path.join(os.path.dirname(current_file), 'static')
    
    return os.path.relpath(app_directory, current_file)

app = Flask('__name__')

relative_path_to_app = get_relative_path()
dossier_storage = os.path.join(os.path.dirname(get_project_root()), 'static/storage')

print(relative_path_to_app)

app.config['UPLOAD_FOLDER'] = dossier_storage
mediaRoute = Blueprint("mediaRoute",__name__)
engine = get_engine()

# # Lier le modèle à la base de données
Media.metadata.bind = engine

# # Créez les tables dans la base de données
Media.metadata.create_all(engine)
Anime.metadata.bind = engine

# # Créez les tables dans la base de données
Anime.metadata.create_all(engine)
@mediaRoute.route('/upload',methods=['POST'])
def upload():

    if 'image' in request.files:
        file = request.files['image']
        file_path = os.path.join(app.config['UPLOAD_FOLDER'],(file.filename))
        file.save(file_path)

        session = get_session()
        new_media = Media(filename=file.filename, filepath=file_path, size=os.path.getsize(file_path))
        session.add(new_media)
        session.commit()

        return "File uploaded successfully!"
    else:
        return "Invalid file format!"

@mediaRoute.route('/delete',methods=['POST'])
def delete():

    if 'image' in request.files:
        file = request.files['image']
        file_path = os.path.join(app.config['UPLOAD_FOLDER'],(file.filename))
        
        if os.path.exists(file_path):
            os.remove(file_path)

    

        return "File remove successfully!"
    else:
        return "Invalid file format!"
    
@mediaRoute.route("/test",methods=['POST'])

def test():
    if 'image_gif' in request.files:
        file = request.files['image_gif']
        gifPath =  os.path.join(app.config['UPLOAD_FOLDER'],(file.filename))
        file.save(gifPath)
    if "image_bottom" in request.files:
        file = request.files['image_bottom']
        
    
    if(request):
        myRequest = request.form
        session = get_session()
        new_anime = Anime(title=myRequest['title'], description= myRequest['description'], genre="Horror",image_gif=gifPath)
        session.add(new_anime)
        session.commit()

        return "File uploaded successfully!"
    
    else:
        return "Invalid file format!"

