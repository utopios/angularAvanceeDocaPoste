import { Injectable } from "@angular/core";

@Injectable()
export class PluginService {
    getDashBoardService() : Array<string> {
        return ["plugin1", "plugin2"]
    }
}