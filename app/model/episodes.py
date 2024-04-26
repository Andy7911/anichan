from sqlalchemy import create_engine, Column, Integer, String, Sequence,ForeignKey,Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



# Déclarer la classe de base pour les modèles
Base = declarative_base()

class Episodes(Base):
   __tablename__ = 'episodes'
   episode_id = Column(Integer,primary_key=True)
   title = Column(String, nullable=False)
   season = Column(Integer,default=0)
   nb_episode = Column(Integer,default=0)
   release_date =Column(Date,nullable=True)
   thumbnail = Column(Integer,ForeignKey('images.image_id'))
   anime_id = Column(Integer, ForeignKey('anime.anime_id'))
 