from sqlalchemy import create_engine, Integer, Column,Enum, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

Base = declarative_base()
import enum




class AnimeCategorie(enum.Enum):
    vedette = 'vedette'
    regular = 'regular'
    recommended = 'recommended'
   

class Anime(Base):
   __tablename__ = 'anime'
   id = Column(Integer,primary_key=True)
   title = Column(String(50), nullable=False)
   description = Column(String(300),nullable=False)
   notation = Column(Integer,default=30)
   categorie = Column(Enum(AnimeCategorie,native_enum=False, create_type=False ))
   medias = relationship("Media", back_populates="anime")


class ImageType(enum.Enum):
    background_gif = 'background_gif'
    music = 'music'
    imageTitle = 'imageTitle'
    imageBottom = 'imageBottom'
    thumbnail = "thumbnail"
    manga = " manga"


# Définir le modèle User
class Media(Base):
    __tablename__ = 'medias'
    id = Column(Integer,primary_key=True)
    filename = Column(String(50), unique=True, nullable=False)
    filepath = Column(String, nullable=False)
    size = Column(Integer, nullable=True)
    type = Column(Enum(ImageType))
    anime_id = Column(Integer,ForeignKey('anime.id')) 
    anime = relationship("Anime", back_populates="medias")

