from flask import request,Blueprint,Flask
from model.genre import Genre
from model.animeGenre import  AnimeGenre 
from model.model import Anime,AnimeCategorie, Media ,ImageType
from sqlalchemy.orm import sessionmaker
from config import Config , file_paths
# from database.db_connect import get_session, get_engine
from database.database import Database
import os;


db = Database()

Base = db.Base()


app = Flask('__name__')

mediaRoute = Blueprint("mediaRoute",__name__)
engine = db.get_engine()
# # Lier le modèle à la base de données
Media.metadata.bind = engine
Anime.metadata.bind = engine
Genre.metadata.bind = engine
AnimeGenre.metadata.bind = engine

Parent.metadata.bind = engine
Child.metadata.bind = engine
# # # Créez les tables dans la base de données
Anime.metadata.create_all(engine)
Parent.metadata.create_all(engine)
Child.metadata.create_all(engine)
# # # # # Créez les tables dans la base de données
Media.metadata.create_all(engine)
Genre.metadata.create_all(engine)
AnimeGenre.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
@mediaRoute.route('/api/createAnime',methods=['POST'])
def createAnime():
   
    session = db.get_session()
    if request:
        
        categorie_enum = AnimeCategorie[request.form.get('type')]
        new_anime = Anime(title = request.form.get('title') , description = request.form.get('description'), categorie = categorie_enum  )
        session.add(new_anime)
        session.commit()
    for key, path in file_paths.items():
        if key in request.files:
            file = request.files[key]
            # Assurez-vous que le fichier a un nom non vide
            if file.filename == '':
                continue  # Ignore les fichiers sans nom
            file_path = os.path.join(path, file.filename)
            music_path = os.path.join( '../static', 'img', key, file.filename)
            file.save(file_path)
            image_enum = ImageType[key]
            new_media = Media(filename = file.filename, filepath = music_path, size = file.content_length, type = image_enum, anime = new_anime)
            session.add(new_media)
            session.commit()
            try:
                session.commit()
            except Exception as e:
                session.rollback()
                return f'An error occurred while saving media: {e}', 500
    
    return 'File import sucess'

       

@mediaRoute.route('/upload',methods=['POST'])
def upload():

 for key, path in file_paths.items():
        if key in request.files:
            file = request.files[key]
            # Assurez-vous que le fichier a un nom non vide
            if file.filename == '':
                continue  # Ignore les fichiers sans nom
            file_path = os.path.join(path, file.filename)
            file.save(file_path)
 return "File uploaded successfully!"
       

@mediaRoute.route('/delete',methods=['POST'])
def delete():
 for key, path in file_paths.items():
        if key in request.files:
            file = request.files[key]
            file_path = os.path.join(path, file.filename)
            if os.path.exists(file_path):
                os.remove(file_path)

 return "Files removed successfully!"

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
   

