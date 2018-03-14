import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import Backendless from 'backendless';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { LiteralArray } from '@angular/compiler';

const APP_ID: string = '';
const API_KEY: string = '';
Backendless.serverURL = 'https://api.backendless.com';

Backendless.initApp(APP_ID, API_KEY);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'app works!';

  message: string;

  error = null;

  loading = null;

  comunicados: Array<object>;

  constructor(private dataService: DataService) { }

  saveTestObject(): void {
    this.loading = true;

    this.dataService.saveTestObject()
      .then(object => {
        this.message = 'A data object has been saved in Backendless. Check \'TestTable\' in Backendless Console.';
        this.loading = false;
      })
      .catch(error => {
        this.error = error;
        this.loading = false;
      });
  }

  getComunicados(): void {
    const self = this;
    this.dataService.getComunicados()
      .then( function( comunicadosArray: Array<object> ) {
        console.log( comunicadosArray, "retornados " + comunicadosArray.length + " comunicados" );
        self.comunicados = comunicadosArray;
      });
  }

  ngOnInit(): void {
    //this.saveTestObject();
    this.getComunicados();
  }
}