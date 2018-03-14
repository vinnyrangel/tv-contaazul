import { Injectable } from '@angular/core';
import Backendless from 'backendless';

@Injectable()
export class DataService {
  saveTestObject(): Promise<object> {
    return Backendless.Data.of('TestTable').save({ foo: 'bar' })
  }

  getComunicados(): Promise<object> {
    var comunicadosStorage = Backendless.Persistence.of( "comunicados" );
    return comunicadosStorage.find();
    
    /*
    var comunicadosStorage = Backendless.Data.of( "comunicados" );
    var queryBuilder = Backendless.DataQueryBuilder.create();

    // set where clause
    queryBuilder.setWhereClause( "ativo = TRUE" );
    
    // request related objects for the columns
    // queryBuilder.setRelated( [ "posicao", "imagem" ] );
    
    // request sorting
    queryBuilder.setSortBy( [ "posicao" ] );
    
    // set offset and page size
    queryBuilder.setPageSize( 20 );
    queryBuilder.setOffset( 40 );

    return comunicadosStorage.find( queryBuilder );
    */
  }
}
