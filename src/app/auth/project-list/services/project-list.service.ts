import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { AthenticationService } from '../../../common/services/athentication.service';
import { HttpService } from '../../../common/services/http.service';

@Injectable()
export class ProjectListService extends HttpService{

    projects: Array<Project> = [];

    constructor(public _http: Http,public _authService: AthenticationService){
      super(_http);
    }

    getAll() : Observable<Array<Project>>{
        const url = `${this.apiBaseURL}/projects`;
        const token  = this._authService.user.api_token;
        return this.get(url,token);
    }

    deleteProject(project: Project) :Observable<Project> {
        const url = `${this.apiBaseURL}/projects/${project.id}`;
        const token  = this._authService.user.api_token;
        return this.delete(url,token);
    }

    public getSingle(id: number): Observable<Project> {
        const url = `${this.apiBaseURL}/projects/${id}`;
        return this.get(url, this._authService.user.api_token);
    }
}
