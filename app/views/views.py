from flask import Blueprint,render_template,request,jsonify,send_from_directory
from database.database import Database
from sqlalchemy import select
from model.model import Media ,Anime, AnimeGenre,Genre
import json
db = Database()
engine = db.get_engine()
session = db.get_session()
blueprint = Blueprint("blueprint",__name__)

@blueprint.route('/')
def index():


      
    #   result = session.query(Anime, Genre.title.label("GenreName")).join(AnimeGenre, Anime.id == AnimeGenre.anime_id).join(Genre, Genre.id == AnimeGenre.genre_id).filter(Anime.categorie == 'vedette').all()
    #   anime_list = []

    #   for anime, genre_name in result:  
    #     anime_list.append({
    #         "title":anime.title,
    #         "genres": [genre.title for genre in genre_name]
    #     })
    #     print(f"Anime Title: {anime.title}, Genre Name: {genre_name}")
        # Requête pour obtenir les animes et leurs genres associés
    # Structure les résultats pour le template Jinja
          session = db.get_session()
        

          animes = session.query(Anime).join(AnimeGenre).join(Genre).filter(Anime.categorie == 'vedette').all()
          anime_list = []
          for anime in animes:
           genres = session.query(Genre).join(AnimeGenre).filter(AnimeGenre.anime_id == anime.id).all()
        #    result = session.execute(genres)
          
           medias = session.query(Media).filter(Media.anime_id == anime.id).all()
           anime_list.append({
            "anime_id":anime.id,
            "anime_name": anime.title,
            "notation":anime.notation,
            "genres": [genre.title for genre in genres],
            "medias": [{"filepath": media.filepath, "type": media.type.value} for media in medias]
        })

          return render_template('index.html', animes=anime_list)

    #   return render_template('index.html',names=["james","maxi","jimmy"],getVedette =result)

@blueprint.route('/dashbord')
def dashbord():
    active_page = 'dashbord'
    return render_template('dashbord.html',active_page=active_page)

@blueprint.route('/', defaults={'path': ''})
@blueprint.route('/<path:path>')
def catch_all(path):
    current_url=request.path
    return render_template('preact.html',url=current_url)


@blueprint.route('/dashbord/anime')
def anime():
    session = db.get_session()
    toutes_les_lignes = session.query(Genre).all()
    for ligne in toutes_les_lignes:
        print('test',ligne)
    active_page = 'anime'
    return render_template('anime.html',active_page=active_page,data_genre = toutes_les_lignes)
    

@blueprint.route('/register',methods=['POST'])
def create():
    data = request.form.to_dict()
    return jsonify(data)

# @blueprint.route('/watch/<int:anime_id>')
# def watch(anime_id):
#     return render_template('watching.html',anime_id= anime_id)

@blueprint.route('/synopsis')
def synopsie():
    return render_template('synopsis.html')

@blueprint.route('/admin')
def admin():
    return render_template('admin.html')

@blueprint.route('/store')
def store():
    return render_template('store.html')

@blueprint.route('/login')
def login():
    return render_template('login.html')

@blueprint.route('/dashbord/episode')
def addEpisode():
    return render_template('add-episode.html')