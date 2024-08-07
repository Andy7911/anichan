from sqlalchemy import create_engine, Integer, Column,Enum, String, ForeignKey,Date,Sequence,JSON,UniqueConstraint
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

Base = declarative_base()
import enum




class AnimeCategorie(enum.Enum):
    vedette = 'vedette'
    regular = 'regular'
    recommended = 'recommended'
   

class Anime(Base):
   __tablename__ = 'animes'
   id = Column(Integer,primary_key=True)
   title = Column(String(50), nullable=False)
   description = Column(String(700),nullable=False)
   notation = Column(Integer,default=30)
   categorie = Column(Enum(AnimeCategorie,native_enum=False, create_type=False ))
   medias = relationship("Media", back_populates="anime")
   episodes = relationship("Episode", back_populates="anime")
   schedules = relationship("Schedule", back_populates="anime")


class ImageType(enum.Enum):
    background_gif = 'background_gif'
    music = 'music'
    imageTitle = 'imageTitle'
    imageBottom = 'imageBottom'
    thumbnail = "thumbnail"
    manga = "manga"
    
class LanguagesType(enum.Enum):
    VF = 'VF'
    VO = 'VO'
# Enum pour les jours de la semaine
class DayOfWeek(enum.Enum):
    MONDAY = "Lundi"
    TUESDAY = "Mardi"
    WEDNESDAY = "Mercredi"
    THURSDAY = "Jeudi"
    FRIDAY = "Vendredi"
    SATURDAY = "Samedi"
    SUNDAY = "Dimanche"

# Enum pour les saisons
class Season(enum.Enum):
    WINTER = "Hiver"
    SPRING = "Printemps"
    SUMMER = "Ete"
    FALL = "Automne"

# Définir le modèle media
class Media(Base):
    __tablename__ = 'medias'
    id = Column(Integer,primary_key=True)
    filename = Column(String(50), unique=True, nullable=False)
    filepath = Column(String, nullable=False)
    size = Column(Integer, nullable=True)
    type = Column(Enum(ImageType),nullable=True)
    extension = Column(String(10), nullable=False) 
    anime_id = Column(Integer,ForeignKey('animes.id')) 
    episode_id = Column(Integer,ForeignKey('episodes.id')) 
    anime = relationship("Anime", back_populates="medias", foreign_keys=[anime_id])
    episode = relationship("Episode", back_populates="medias", foreign_keys=[episode_id])

class Episode(Base):
   __tablename__ = 'episodes'
   id = Column(Integer,primary_key=True)
   title = Column(String, nullable=False)
   season = Column(Integer,default=0)
   nb_episode = Column(Integer,default=0)
   release_date =Column(Date,nullable=True)
   anime_id = Column(Integer, ForeignKey('animes.id'))
   anime = relationship("Anime", back_populates="episodes")
   schedules = relationship("Schedule", back_populates="episode")
   medias = relationship("Media", back_populates="episode", foreign_keys="[Media.episode_id]")
   language_versions = relationship('LanguageVersion', back_populates='episode')

class Schedule(Base):
    __tablename__ = 'schedules'
    id = Column(Integer, Sequence('schedule_id_seq'), primary_key=True)
    anime_id = Column(Integer, ForeignKey('animes.id'), nullable=True)
    episode_id = Column(Integer, ForeignKey('episodes.id'), nullable=True)
    season = Column(Enum(Season))
    day_of_week = Column(Enum(DayOfWeek))
    time = Column(String(5))  # Par exemple, "18:00"
    anime = relationship("Anime", back_populates="schedules")
    episode = relationship("Episode", back_populates="schedules")
  

class Genre(Base):
  __tablename__ = 'genres'
  id = Column(Integer,primary_key=True)
  title = Column(String,nullable=True)

class AnimeGenre(Base):
    __tablename__ = 'anime_genres'
    id = Column(Integer,primary_key=True)
    anime_id = Column(Integer,ForeignKey(Anime.id))
    id_genre = Column(Integer,ForeignKey(Genre.id))  

class LanguageVersion(Base):
    __tablename__ = 'language_versions'
    id = Column(Integer,primary_key=True)
    episode_id = Column(Integer, ForeignKey('episodes.id'))
    language = Column(Enum(LanguagesType),nullable=True)
    url = Column(JSON)
    episode = relationship('Episode',back_populates='language_versions')
    __table_args__ =(UniqueConstraint( 'episode_id','language',name='_episode_language_uc'),)
