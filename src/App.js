import calculadoraLogo from './imagenes/4645203.png'
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {

  const [numClics,setNumClics]= useState(0);

  const manejarClick=()=>{
   setNumClics (numClics + 1);
  }

  const reiniciarContador=()=>{
    setNumClics(0);
  }

 return(
   <div className='app'>
     <div className='calculadora-logo-contenedor'>
        <img
        className='calculadora-logo'
        src={calculadoraLogo}
        alt= 'logo'/>
        <p>caluAlan</p>
      
     </div>
     <div className='contenedor-principal'>
       <Contador numClics={numClics} />
       <Boton
       texto='Clic'
       esBotonDeClick={true}
       manejarClick={manejarClick} />
       <Boton
       texto='Reiniciar'
       esBotonDeClick={false}
       manejarClick={reiniciarContador} />
        </div>
    </div>
 )
}

export default App;
