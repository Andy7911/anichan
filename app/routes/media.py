from flask import request,Blueprint,Flask
from model.anime import Anime
from model.medias import Media
from model.genre import Genre
from model.animeGenre import  AnimeGenre
from sqlalchemy.orm import sessionmaker

# from database.db_connect import get_session, get_engine
from database.database import Database
import os;

db = Database()

Base = db.Base()



def get_project_root():
    return os.path.dirname(os.path.abspath(__file__))
def get_relative_path():
    current_file = os.path.abspath(__file__)
    app_directory = os.path.join(os.path.dirname(current_file), 'static')
    
    return os.path.relpath(app_directory, current_file)

app = Flask('__name__')

relative_path_to_app = get_relative_path()
dossier_storage = os.path.join(os.path.dirname(get_project_root()), 'static/img/title')
dossier_gif = os.path.join(os.path.dirname(get_project_root()), 'static/img/gif')
dossier_music = os.path.join(os.path.dirname(get_project_root()), 'static/img/music')
dossier_bottom = os.path.join(os.path.dirname(get_project_root()), 'static/img/bottom')



app.config['UPLOAD_FOLDER'] = dossier_storage
app.config['UPLOAD_GIF'] = dossier_gif
app.config['UPLOAD_MUSIC'] = dossier_music
app.config['UPLOAD_BOTTOM'] = dossier_bottom
mediaRoute = Blueprint("mediaRoute",__name__)
engine = db.get_engine()
# # Lier le modèle à la base de données
Media.metadata.bind = engine
Anime.metadata.bind = engine
Genre.metadata.bind = engine
AnimeGenre.metadata.bind = engine

# # # Créez les tables dans la base de données
Anime.metadata.create_all(engine)

# # # # # Créez les tables dans la base de données
Media.metadata.create_all(engine)
Genre.metadata.create_all(engine)
AnimeGenre.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
@mediaRoute.route('/animes',methods=['POST'])
def createAnime():
    
    new_anime = Anime(title = request.title , description = request.description,popularite = 0 )

    if 'image_title' in request.files:
        file = request.files['image_title']
        file_path = os.path.join(app.config['UPLOAD_FOLDER'],(file.filename))
        file.save(file_path)
        return "kk"

@mediaRoute.route('/upload',methods=['POST'])
def upload():

    if 'image_title' in request.files:
        file = request.files['image_title']
        file_path = os.path.join(app.config['UPLOAD_FOLDER'],(file.filename))
        file.save(file_path)

    if 'image_gif' in request.files:
        file = request.files['image_gif']
        file_path = os.path.join(app.config['UPLOAD_GIF'],(file.filename))
        file.save(file_path)
    if 'music' in request.files:
        file = request.files['music']
        file_path = os.path.join(app.config['UPLOAD_MUSIC'],(file.filename))
        file.save(file_path)
    if 'image_gif' in request.files:
        file = request.files['image_gif']
        file_path = os.path.join(app.config['UPLOAD_BOTTOM'],(file.filename))
        file.save(file_path)

     

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
    if 'image_gif' in request.files:
        file = request.files['image_gif']
        file_path = os.path.join(app.config['UPLOAD_GIF'],(file.filename))
        if os.path.exists(file_path):
            os.remove(file_path)
    if 'music' in request.files:
        file = request.files['music']
        file_path = os.path.join(app.config['UPLOAD_MUSIC'],(file.filename))
        if os.path.exists(file_path):
            os.remove(file_path)
    if 'image_bottom' in request.files:
        file = request.files['image_bottom']
        file_path = os.path.join(app.config['UPLOAD_BOTTOM'],(file.filename))
        if os.path.exists(file_path):
            os.remove(file_path)
    

        return "File remove successfully!"
    else:
        return "Invalid file format!"

# @mediaRoute.route("/test",methods=['POST'])
# def create():
#     if request:

#         new_anime = Anime(title=request.title, description= request.description,)


#     return 'sucesss'


@mediaRoute.route("/test",methods=['POST'])
def test():

        session = db.get_session()
        new_anime = Anime(title='Maxi le titan', description= 'Veut manger tout les humain par gourmandise', genre="Horror")
        session.add(new_anime)
        session.commit()
        print('tentative au mon id apparait:',new_anime.id)
        return "File uploaded successfully!"
   

