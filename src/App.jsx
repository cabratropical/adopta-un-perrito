// src/App.jsx
import React from 'react';
import Header from './assets/components/Header';
import MyCard from './assets/components/MyCard';
import Footer from './assets/components/Footer';
import Tags from './assets/components/Tags';

import './assets/styles/styles.css';  // Importa tus estilos

const App = () => {
  return (
    <div>
      <Header title="Adopta un perrito" />
      <div className="card-container">
        <MyCard
          imageUrl="https://images.pexels.com/photos/3726315/pexels-photo-3726315.jpeg"
          name="Bartolo"
          description="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
          breed="Husky"
          tags={{ text: 'Activo', color: 'primary' }}
        />
        <MyCard
          imageUrl="https://media.istockphoto.com/id/93392743/es/foto/bobtail.jpg?s=1024x1024&w=is&k=20&c=YLuMJuS9-z26sjtMKqd3l2kL-FTJpIzCodCu54CFGbg="
          name="Messi"
          description="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo"
          breed="Bobtail"
          tags={{ text: 'Tag 2', color: 'secondary' }}
        />
        <MyCard
          imageUrl="https://images.pexels.com/photos/12287391/pexels-photo-12287391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          name="Gohan"
          description="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
          breed="Shar Pei"
          tags={{ text: 'Tag 2', color: 'secondary' }}
        />
        <MyCard
          imageUrl="https://images.pexels.com/photos/1000602/pexels-photo-1000602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          name="Princesa"
          description="Es una compañera leal y cariñosa que adora los mimos y los abrazos.
          ¡Ayuda a Princesa a encontrar su final feliz!"
          breed="Beagle"
          tags={{ text: 'Tag 2', color: 'secondary' }}
        />



      </div>
      <Footer />
    </div>
  );
};

export default App;
