import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { socket } from './utils/socket';

function App() {

  const [connected, setConnected] = useState<boolean>(false);
  const [room, setRoom] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onRoomChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRoom(value);
  }

  const onJoinButtonHandler = () => {
    socket.emit('join', room);
    setConnected(true);
  } 

  let effectFlag = true;
  useEffect(() => {

    if (effectFlag) {
      effectFlag = false;
      return;
    }

    const onConnect = () => {
      console.log(socket.id + ' Socket Connected!!');
    }

    const onDisconnect = () => {
      console.log('Socket Disconnected!!');
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

  }, []);

  return (
    <div>
      {!connected ? (
      <div>
        <input value={room} onChange={onRoomChangeHandler} />
        <button onClick={onJoinButtonHandler}>조인</button>
      </div>
      ) : (
      <div></div>
      )}
    </div>
  );
}

export default App;
