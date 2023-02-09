export interface User {
  id: number;
  name: string;
  email: string;
  department: string;
  created?: string; // format: '2022-07-10T22:56:28.951Z'
}

export interface EditableUser extends User {
  isEditable: boolean;
}
