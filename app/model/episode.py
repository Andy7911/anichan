from sqlalchemy import create_engine, Column, Integer, String, Sequence,ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



# Déclarer la classe de base pour les modèles
Base = declarative_base()

class Episode(Base):
   __tablename__ = 'episode'
   episode_id = Column(Integer,primary_key=True)
   title = Column(String, nullable=False)
   description = Column(String,nullable=False)
   thumbnail = Column(String,nullable=False)
   anime_id = Column(Integer, ForeignKey('anime.anime_id'))
 