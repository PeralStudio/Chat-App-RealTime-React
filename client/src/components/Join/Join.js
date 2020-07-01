import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Crear Sala</h1>
        <div>
          <input placeholder="NickName" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Nombre Sala" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Entrar</button>
        </Link>
        
        <h6 className="textsub">¡Ingresa el nombre de usuario y el nombre de la sala que quieras y comparte con tus amigos con los que quieras chatear!</h6>
      </div>
    </div>
  );
}