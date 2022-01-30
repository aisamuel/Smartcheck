// import {Rooms} from '../rooms/rooms'
export class Home {
    id: number;
    application: string;
    servers_mapped: number;
    last_scan_date: string;
    status: string;
    
    constructor(home) {
      {
        this.id = home.id || this.getRandomID();
        this.application = home.application || '';
        this.servers_mapped = home.servers_mapped || 0;
        this.last_scan_date = home.last_scan_date || '';
        this.status = home.status || '';
      }
    }
    public getRandomID(): string {
      const S4 = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return S4() + S4();
    }
  }
  
