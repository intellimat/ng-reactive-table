export interface User {
  id: number;
  name: string;
  email: string;
  department: string;
  created?: string; // format: '2022-07-10T22:56:28.951Z'
}

export type RequestBodyUser = Omit<User, 'id'>;

export interface EditableUser extends User {
  isEditable: boolean;
}
