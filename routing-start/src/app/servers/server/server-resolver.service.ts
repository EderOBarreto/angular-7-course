import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable({providedIn: 'root'})
export class ServerResolver implements Resolve<Server> {
    constructor(private serviceService: ServersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Server> | Promise<Server> | Server {
        return this.serviceService.getServer(+route.params['id']);
    }
}
