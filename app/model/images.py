from sqlalchemy import create_engine, Column, Integer, String, Sequence
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



# Déclarer la classe de base pour les modèles
Base = declarative_base()

# Définir le modèle User
class Media(Base):
    __tablename__ = 'media'
    id = Column(Integer,primary_key=True)
    filename = Column(String(50), unique=True, nullable=False)
    filepath = Column(String, nullable=False)
    size = Column(Integer)
