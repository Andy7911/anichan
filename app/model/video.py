from sqlalchemy import create_engine, Column, Integer, String, Sequence,ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



# Déclarer la classe de base pour les modèles
Base = declarative_base()

class Video(Base):
   __tablename__ = 'video'
   video_id = Column(Integer,primary_key=True)
   title = Column(String, nullable=False)
   url = Column(String,nullable=False)
   text_iframe= Column(String,nullable=False)
   episode_id = Column(Integer, ForeignKey('episode.episode_id'))

 