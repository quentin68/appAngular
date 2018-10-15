interface User{
  id?:number;
  pseudo:string;
  avatar?:string;
  login?:string;
  password?:string;
  status:boolean;
}

interface Credential{
  login:string;
  password:string;
}

interface Channel{
  id?:number;
  name:string;
}

interface Message{
  id?:number;
  text:string;
  userId?:number;
  channeId?:number;
  user?:User
}
