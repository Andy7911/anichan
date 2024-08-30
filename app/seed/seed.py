from flask import request,Blueprint,Flask
import sys
import os
from sqlalchemy.orm import sessionmaker
import json
import csv
from datetime import datetime,date

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from model.model import Base, Anime,AnimeCategorie,AnimeGenre,Episode, Schedule ,ImageType,LanguageVersion,LanguagesType,Media,Genre
from database.database import Database;

db = Database();


engine= db.get_engine();

Base.metadata.create_all(engine);
Session = sessionmaker(bind=engine)

def parse_value(data_type, value):
    if value.lower() == 'null':
        return None
    if data_type == int:
        return int(value)
    elif data_type == dict:
        return eval(value)
    elif data_type == datetime:
        return datetime.strptime(value, '%Y-%m-%d')
    elif data_type == AnimeCategorie:
        return AnimeCategorie[value]
    elif data_type == LanguagesType:
        print('tee {LanguagesType[value]}')
        return LanguagesType[value]
    elif data_type == ImageType:
        return ImageType[value]
    elif data_type == list:
        print("traite :{value}") 
        return json.loads(value.replace("'", "\""))    
    elif data_type == datetime:
        return datetime.strptime(value, '%Y-%m-%d %H:%M:%S')
    elif data_type == date:
        return datetime.strptime(value, '%Y-%m-%d').date()
    else:
        return value
    
def seedDatabase():
    session = Session()
    try:
        with open('anime-data.txt', 'r', encoding='utf-8') as file:
            for line in file:
                data = dict(item.split(':') for item in line.strip().split('|'))
                if session.query(Anime).filter_by(id=int(data['id'])).first():
                   continue  # Ignore the duplicate
                new_anime = Anime(
                    id=int(data['id']),
                    title=data['title'],
                    description=data['description'],
                    notation=parse_value(int, data['notation']),
                    categorie=parse_value(AnimeCategorie, data['categorie'])
                )
                session.add(new_anime)
        session.commit()
    except Exception as e:
        session.rollback()
        print(f"Erreur lors de l'insertion des animes : {e}")

    try:
        with open('episode-data.txt', 'r', encoding='utf-8') as file:
            for line in file:
                data = dict(item.split(':') for item in line.strip().split('|'))
                try:
                    if session.query(Episode).filter_by(id=int(data['id'])).first():
                        continue  # Ignore the duplicate

                    new_episode = Episode(
                    id=parse_value(int, data['id']),
                    title=data['title'],
                    season=parse_value(int, data['season']),
                    nb_episode=parse_value(int, data['nb_episode']),
                    release_date=parse_value(date, data['release_date']),
                    anime_id=parse_value(int, data['anime_id'])
                    )
                    session.add(new_episode)
                except Exception as e:
                    print(f"Erreur avec insertion : {e}")
        session.commit()
    except Exception as e:
        session.rollback()
        print(f"Erreur lors de l'insertion des épisodes : {e}")

    try:
        with open( 'language-versions.txt','r', encoding='utf-8') as file:
            for line in file:
             data = dict(item.split(':',1) for item in line.strip().split('|'))
            
             print(f"Traitement de la ligne: {data}")
             print('sdds',AnimeCategorie.regular)

             if session.query(LanguageVersion).filter_by(id=int(data['id'])).first():
                continue  # Ignore the duplicate

             new_language = LanguageVersion(
                    id=parse_value(int,data['id']),
                    language =LanguagesType.VO,
                    url= parse_value(list,data['url']),
                    episode_id = parse_value(int,data['episode_id'])

                )
            session.add(new_language)
        session.commit()    
      
                
    except Exception as e:
        session.rollback()
        print(f"Erreur lors de l'insertion des languages: {e}")

    try:
        with open ('media-data.txt', 'r',encoding='utf-8') as file:
            for line in file:
             data = dict(item.split(':',1) for item in line.strip().split('|'))
             if session.query(Media).filter_by(id = int(data['id'])).first():
                 continue
                 
             new_media = Media(
                 id= parse_value(int,data['id']),
                 filename =(data['filename']),
                 filepath = data['filepath'],
                 size = parse_value(int,data['size']),
                 type =parse_value(ImageType,data['type']),
                 extension = data['extension'],
                 anime_id = data['anime_id'],
                 episode_id = parse_value(int,data['episode_id'])
             ) 
             session.add(new_media)
        session.commit()
    except Exception as e:
        session.rollback()
        print(f"Erreur lors de l'insertion des Medias: {e}")

    try:
        with open('genre-data.txt', 'r',encoding='utf-8') as file:
            for line in file:
                data = dict(item.split(':',1) for item in line.strip().split('|') )
                if session.query(Genre).filter_by(id= int(data['id'])).first():
                    continue
                new_genre = Genre(
                    id=parse_value(int,data['id']),
                    title= data['title']
                 )
                session.add(new_genre);
            session.commit()
    except Exception as e:
        session.rollback()
        print(f"Erreur lors de l'insertion des Genres: {e}")

    try:
        with open('anime-genre.txt','r',encoding='utf-8') as file:
            for line in file:
                data = dict(item.split(':',1) for item in line.strip().split('|'))
                if session.query(AnimeGenre).filter_by(id =int(data['id'])).first():
                    continue
                new_genreAnime = AnimeGenre(
                    id = parse_value(int,data['id']),
                    anime_id =parse_value(int,data['anime_id']),
                    genre_id =parse_value(int,data['genre_id'])

                )
                session.add(new_genreAnime)
            session.commit()
    except Exception as e:
        session.rollback()
        print(f"Erreur lors de l'insertion des GenresAnime: {e}")

    finally:
        session.close()

# Appel de la fonction seedDatabase
seedDatabase()

seedDatabase();

