from sqlalchemy import create_engine, Column, Integer, String, Sequence,ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



# Déclarer la classe de base pour les modèles
Base = declarative_base()

# Définir le modèle User
class Synopsis(Base):
    __tablename__ = 'synopsis'
    synopsis_id = Column(Integer,primary_key=True)
    introImg = Column(String(50), unique=True, nullable=False)
    thumbnail = Column(String, nullable=False)
    description = Column(String,nullable=False)
    anime_id = Column(Integer, ForeignKey('anime.anime_id'))


