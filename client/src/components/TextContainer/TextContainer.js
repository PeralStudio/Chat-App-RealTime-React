import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
    <h1 className="txtCol">Chat App Real-Time React <span role="img" aria-label="emoji">💬</span></h1>
    <h4 className="created">Creado con React, Express, Node.js y Socket.IO</h4>


      <h5>Comparte tu nombre de sala para permitir que tus amigos se unan al chat</h5>
      <h5>"Expresa más escribiendo emoticonos que se conviertan en emojis <span role="img" aria-label="emoji">❤️"</span></h5>
      <h5>¡Pruébalo ahora mismo! <span role="img" aria-label="emoji">⬅️</span></h5>
     

      
    </div>
    {
      users
        ? (
          <div>
           <h1 className="divider"><b> Personas conectadas:</b></h1>
            <div className="activeContainer">
              <h4>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h4>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;