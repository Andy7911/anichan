from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URI = 'sqlite:////Users/andersonbeauvais/Desktop/anime.db'



engine = create_engine(DATABASE_URI, echo=True)

# Créer une session SQLAlchemy
Session = sessionmaker(bind=engine)
session = Session()

# Exporter le moteur et la session pour les utiliser dans d'autres parties de l'application
def get_engine():
    return engine

def get_session():
    return session