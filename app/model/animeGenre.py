from sqlalchemy import create_engine,Column,Integer,ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from model.anime import Anime
from model.genre import Genre


Base = declarative_base()


class AnimeGenre(Base):
    __tablename__ = 'anime_genre'
    id = Column(Integer,primary_key=True)
    anime_id = Column(Integer,ForeignKey(Anime.id))
    id_genre = Column(Integer,ForeignKey(Genre.id))