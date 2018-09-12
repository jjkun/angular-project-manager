import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

import { map } from "rxjs/operators";

@Injectable()
export class ProjectListService {

    projects: Array<Project> = [];

    constructor(private _http: Http){
    }

    getAll() : Observable<Array<Project>>{
        const url = 'http://172.104.91.187/projects';
        const headers = new Headers({'Content-Type':'application/json'});
        const options = new RequestOptions({headers:headers});
        return this._http.get(url,options).pipe(
            map((response) => {
                return  response.json()
            }
        ));
        //next()
        //error()
        //onFinished
        //Http Request Open connection ---> Server
        //UI <--- Response
    }

    deleteProject(project: Project) :Observable<Project> {
        const url = `http://172.104.91.187/projects/${project.id}`;
        const headers = new Headers({'Content-Type':'application/json'});
        const options = new RequestOptions({headers:headers});
        return this._http.delete(url,options).pipe(
        map((response) => {
            console.log(response);
            return  response.json()
        }
        ));
    }
}