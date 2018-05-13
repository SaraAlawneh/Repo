import { Component, OnInit, Pipe } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import { serializePath } from '@angular/router/src/url_tree';


class Person {
  firstName: string;
  lastName: string;
  id: number;
}
@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html'
})
export class Search2Component implements OnInit {
  
  persons: Person[] = [];
  searchPerson: Person[];
  
  deletePerson(index) {
    this.persons.splice(index, 1);
  }
  
  constructor(private http: Http) { }

  ngOnInit(): void {

    
    this.http.get('https://angular-datatables-demo-server.herokuapp.com')
      .map(this.extractData)
      .subscribe(persons => {
        this.searchPerson = this.persons = persons;
       
        
        
      });
    

  }
  search(query: string){
    this.searchPerson = (query) ? this.persons.filter(person => person.firstName.toLowerCase().includes(query.toLowerCase()) ||  person.lastName.toLowerCase().includes(query.toLowerCase())) : this.persons ;
  }
  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}

