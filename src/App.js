import React, { useState, useEffect } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";  
import { Button } from 'primereact/button';

function ContadorCaracteresPalabras() {
  const [texto, setTexto] = useState('');
  const [cantidadCaracteres, setCantidadCaracteres] = useState(0);
  const [cantidadPalabras, setCantidadPalabras] = useState(0);

  useEffect(() => {
    setCantidadCaracteres(texto.length);
    if (texto.length > 100) {
      setTexto(texto.substring(0, 100));
    alert("llegaste al maximo de 100 caracteres")}
  
    setCantidadPalabras(contarPalabras(texto));
  }, [texto]);

  const contarPalabras = (texto) => {
    const palabras = texto.trim().split(/\s+/);
    return palabras.length;
  };

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div className="card flex justify-content-center">
      <textarea value={texto} onChange={handleChange} />
      <p>Cantidad de caracteres: {cantidadCaracteres}</p>
      <p>Cantidad de palabras: {cantidadPalabras}</p>
      <Button label="Check" icon="pi pi-check" />
    </div>
  );
}

export default ContadorCaracteresPalabras;
