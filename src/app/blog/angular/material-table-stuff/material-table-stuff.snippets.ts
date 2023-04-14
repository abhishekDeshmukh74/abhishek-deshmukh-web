export const dbJsonData = `{
  "heros": [
  {
    "id": 1,
    "name": "Iron Man",
    "fullName": "Tony Stark",
    "placeOfBirth": "New York",
    "publisher": "Marvel Comics"
  },
  .....
  {
    "id": 10,
    "name": "Wolverine",
    "fullName": "Logan",
    "placeOfBirth": "Canada",
    "publisher": "Marvel Comics"
  }
  ]
}`;

export const iHeroInterfaceSnippet = `
  export interface IHero {
    id: number;
    name: string;
    fullName: string;
    placeOfBirth: string;
    publisher: string;
  }`;

export const importsArray = `
  import {
      MatTableModule, MatSortModule, MatFormFieldModule,
      MatInputModule,  MatPaginatorModule
  } from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { HttpClientModule } from '@angular/common/http';

    .....

  imports: [
    ...
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],`;

export const initMatTableSnippet = {
  tsCode: `
  import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
  import { IHero } from './app.interfaces';

  .....

  displayedColumns = ['id', 'name', 'fullName', 'placeOfBirth', 'publisher'];
  dataSource = new MatTableDataSource<IHero>();

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/heros')
      .subscribe((heros: IHero[]) => {
        this.dataSource.data = heros;
       });
  }`,
  htmlCode: `
  <div class="container">
    <h2>Angular Material - Pagination, Sort, Filter</h2>
    <div class="content">

      <table mat-table [dataSource]="dataSource" class="table">

        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef> Id </th>
          <td mat-cell *matCellDef="let rowObj"> {{rowObj.id}} </td>
        </ng-container>

        <ng-container matColumnDef="name">
           <th mat-header-cell *matHeaderCellDef> Name </th>
           <td mat-cell *matCellDef="let rowObj"> {{rowObj.name}} </td>
         </ng-container>

         <ng-container matColumnDef="fullName">
            <th mat-header-cell *matHeaderCellDef> Full name </th>
            <td mat-cell *matCellDef="let rowObj"> {{rowObj.fullName}} </td>
         </ng-container>

        <ng-container matColumnDef="placeOfBirth">
            <th mat-header-cell *matHeaderCellDef> Place Of Birth </th>
            <td mat-cell *matCellDef="let rowObj"> {{rowObj.placeOfBirth}} </td>
         </ng-container>

        <ng-container matColumnDef="publisher">
           <th mat-header-cell *matHeaderCellDef> Publisher </th>
           <td mat-cell *matCellDef="let rowObj"> {{rowObj.publisher}} </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>
  </div>`,
  cssCode: `
  .container {
    width: 60%;
    margin: 0 auto;
    .content {
      padding: 1rem;
      border: 1px solid rgb(10, 10, 10) !important;
      border-radius: 0.1rem;
    }
  }
  .table {
    width: 100%;
  }
  .filter {
    width: 100%;
  }
  p {
    text-align: center;
  }`
};

export const initMatPaginatorStart = `<mat-paginator #paginator [pageIndex]="0" [pageSize]="5" [pageSizeOptions]="[2, 3, 5]"></mat-paginator>`;

export const initMatPaginatorViewChild = `@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;`;

export const initMatPaginatorViewChildWithoutStatic = `@ViewChild(MatPaginator) paginator: MatPaginator;`;

export const initMatPaginator = {
  tsCode: `
  import { Component, ViewChild, OnInit } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
  import { IHero } from './app.interfaces';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })

  export class AppComponent implements OnInit {

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    displayedColumns = ['id', 'name', 'fullName', 'placeOfBirth', 'publisher'];
    dataSource = new MatTableDataSource<IHero>();

    constructor(
      private httpClient: HttpClient
    ) { }

    ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.httpClient.get('http://localhost:3000/heros')
        .subscribe((heros: IHero[]) => {
          this.dataSource.data = heros;
        });
    }
  }`,
  htmlCode: `
  <div class="container">
    <h2>Angular Material - Pagination, Sort, Filter</h2>
    <div class="content">

    <table mat-table [dataSource]="dataSource" class="table">

    .....

    </table>

    <mat-paginator #paginator [pageIndex]="0" [pageSize]="5" [pageSizeOptions]="[2, 3, 5]">
    </mat-paginator>

    </div>
  </div>`,
  cssCode: ``
};

export const initMatSortViewChild = `@ViewChild(MatSort, { static: true }) sort: MatSort;`;

export const initMatSortViewChildWithoutStatic = `@ViewChild(MatSort) sort: MatSort;`;

export const initMatSort = {
  tsCode: `
  displayedColumns = ['id', 'name', 'fullName', 'placeOfBirth', 'publisher'];
  dataSource = new MatTableDataSource<IHero>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.httpClient.get('http://localhost:3000/heros')
      .subscribe((heros: IHero[]) => {
        this.dataSource.data = heros;
    });
  }`,
  htmlCode: `
  <table mat-table matSort [dataSource]="dataSource" class="table">

    <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> Id </th>
        <td mat-cell *matCellDef="let rowObj"> {{rowObj.id}} </td>
    </ng-container>

    .....

    <ng-container matColumnDef="publisher">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> Publisher </th>
        <td mat-cell *matCellDef="let rowObj"> {{rowObj.publisher}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>`,
  cssCode: ``
};

export const filterInputFieldSnippet = `<mat-form-field class="filter">
  <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
</mat-form-field>`;

export const filterInputValueSnippet = `applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}`;

export const initMatFilter = {
  tsCode: `
  import { Component, ViewChild, OnInit } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
  import { IHero } from './app.interfaces';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })

  export class AppComponent implements OnInit {

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    displayedColumns = ['id', 'name', 'fullName', 'placeOfBirth', 'publisher'];
    dataSource = new MatTableDataSource<IHero>();

    constructor(
      private httpClient: HttpClient
    ) { }

    ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.httpClient.get('http://localhost:3000/heros')
        .subscribe((heros: IHero[]) => {
          this.dataSource.data = heros;
        });
    }

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }`,
  htmlCode: `
  <div class="container">

    <h2>Angular Material - Pagination, Sort, Filter</h2>

    <div class="content">
      <mat-form-field class="filter">
        <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
      </mat-form-field>

      <table mat-table matSort [dataSource]="dataSource" class="table">

        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Id </th>
          <td mat-cell *matCellDef="let rowObj"> {{rowObj.id}} </td>
        </ng-container>

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
          <td mat-cell *matCellDef="let rowObj"> {{rowObj.name}} </td>
        </ng-container>

        <ng-container matColumnDef="fullName">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Full name </th>
          <td mat-cell *matCellDef="let rowObj"> {{rowObj.fullName}} </td>
        </ng-container>

        <ng-container matColumnDef="placeOfBirth">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Place Of Birth </th>
          <td mat-cell *matCellDef="let rowObj"> {{rowObj.placeOfBirth}} </td>
        </ng-container>

        <ng-container matColumnDef="publisher">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Publisher </th>
          <td mat-cell *matCellDef="let rowObj"> {{rowObj.publisher}} </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>

      <mat-paginator #paginator [pageIndex]="0" [pageSize]="5" [pageSizeOptions]="[2, 3, 5]">
      </mat-paginator>

    </div>
  </div>`,
  cssCode: `
  .container {
    width: 60%;
    margin: 0 auto;
      .content {
        padding: 1rem;
        border: 1px solid rgb(10, 10, 10) !important;
        border-radius: 0.1rem;
      }
  }
  .table {
    width: 100%;
  }
  .filter {
    width: 100%;
  }`
};
