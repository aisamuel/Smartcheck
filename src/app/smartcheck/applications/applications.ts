// import {Rooms} from '../rooms/rooms'
export class Applications {
    id: number;
    name: string;
    type: string;
    dcsc: string;
    port: string;
    end_port: string;
    host_server: string;
      
    constructor(applications) {
      {
        this.id = applications.id || this.getRandomID();
        this.name = applications.name || '';
        this.type = applications.type || '';
        this.dcsc = applications.dcsc || '';
        this.port = applications.port || '';
        this.host_server = applications.host_server || '';
      }
    }
    public getRandomID(): string {
      const S4 = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return S4() + S4();
    }
  }
  
