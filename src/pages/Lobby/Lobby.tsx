import React, { FC, Fragment } from 'react';
import RoomProfile from '@components/RoomProfile/RoomProfile';
import { useCounter } from '@contexts/CounterContext';

const initHumanCount = () => ({
  adult: 0,
  child: 0,
})

const mockRoomData: Room.RoomInfo[] = [
  {
    name: '普通房',
    roomType: 'normal',
    roles: initHumanCount(),
    max: 2
  },
  {
    name: '高級房',
    roomType: 'lux',
    roles: initHumanCount(),
    max: 4
  }
]

const Lobby: FC = () => {
  const { state } = useCounter();
  
  return (
    <div>
      {/* <RoomInfo /> */}
      <RoomProfile rooms={mockRoomData} />
    </div>
  )
};

export default Lobby;