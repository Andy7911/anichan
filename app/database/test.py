from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Déclaration de la base pour les modèles SQLAlchemy
Base = declarative_base()

# Définition du modèle de la table "utilisateurs"
class Anime(Base):
    __tablename__ = 'Anime'

    id = Column(Integer, primary_key=True)
    title = Column(String)
    description = Column(String)
   

# Création du moteur SQLAlchemy
engine = create_engine('postgresql://postgres:poisson7911@localhost:5432/postgres')

# Création de toutes les tables déclarées
Base.metadata.create_all(engine)

# Création d'une session SQLAlchemy
Session = sessionmaker(bind=engine)
session = Session()

try:
    # Données à insérer
    data_to_insert = [
        Anime(title='James Maxi', description='anime qui parle de james un américain'),
        Anime(title='sécurité', description='Rien se secure '),
        Anime(title='Metro', description='lorem ipsum de james maxi qui aime manger des fruits')
    ]

    # Ajout des données à la session
    session.add_all(data_to_insert)

    # Commit des modifications
    session.commit()

    print("Données insérées avec succès.")
except Exception as e:
    print("Erreur lors de l'insertion des données:", e)
finally:
    # Fermeture de la session
    session.close()
