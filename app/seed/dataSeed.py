from database.database import Database;

from model.genre import Genre;

db = Database()

def genre():
    Genres = [Genre(title="Fantasy"),Genre(title="Fantasy"),]


    session = db.get_session()