export interface Room {
  /** ID of room */
  _id: string;
  /** room number */
  number: string;
  /** room timestamp */
  timestamp: string;
}

export interface RoomState {
  rooms: Room[];
}

export interface StudentProps {
  /** ID of student */
  id: string;
  /** room number */
  name: string;
  /** level of student */
  level: string;
}
