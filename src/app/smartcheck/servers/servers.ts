// import {Rooms} from '../rooms/rooms'
export class Servers {
    id: number;
    name: string;
    ip_address: string;
    cpu: string;
    memory: string;
    storage: string;
    
    constructor(servers) {
      {
        this.id = servers.id || this.getRandomID();
        this.name = servers.name || '';
        this.ip_address = servers.ip_address || '';
        this.cpu = servers.cpu || '';
        this.memory = servers.memory || '';
        this.storage = servers.storage || '';
      }
    }
    public getRandomID(): string {
      const S4 = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return S4() + S4();
    }
  }
  
