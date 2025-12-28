import { Component, OnInit } from '@angular/core';

import { ANGULAR_DATA } from '@shared/data';
import { angularBlogCardList } from '../angular.post-list';
import {
  dbJsonData, filterInputFieldSnippet, filterInputValueSnippet, importsArray, initMatFilter,
  initMatPaginator, initMatPaginatorStart, initMatPaginatorViewChild,
  initMatPaginatorViewChildWithoutStatic, initMatSort, initMatSortViewChild,
  initMatSortViewChildWithoutStatic, initMatTableSnippet, iHeroInterfaceSnippet
} from './material-table-stuff.snippets';

@Component({
  selector: 'app-material-table-stuff',
  templateUrl: './material-table-stuff.component.html',
  styleUrls: ['./material-table-stuff.component.scss'],
  standalone: false
})

export class MaterialTableStuffComponent implements OnInit {

  readonly angularBlogCardList = angularBlogCardList;

  readonly title = ANGULAR_DATA.MATERIAL_TABLE.TITLE;
  readonly date = ANGULAR_DATA.MATERIAL_TABLE.DATE;
  readonly hashtags = ANGULAR_DATA.MATERIAL_TABLE.HASHTAGS;
  readonly shareText = ANGULAR_DATA.MATERIAL_TABLE.SHARE_TEXT;
  readonly image = ANGULAR_DATA.MATERIAL_TABLE.META.IMAGE;

  readonly dbJsonData = dbJsonData;
  readonly iHeroInterfaceSnippet = iHeroInterfaceSnippet;
  readonly importsArray = importsArray;
  readonly initMatTableSnippet = initMatTableSnippet;
  readonly initMatPaginator = initMatPaginator;
  readonly initMatSort = initMatSort;
  readonly initMatFilter = initMatFilter;
  readonly initMatPaginatorStart = initMatPaginatorStart;
  readonly initMatPaginatorViewChild = initMatPaginatorViewChild;
  readonly initMatPaginatorViewChildWithoutStatic = initMatPaginatorViewChildWithoutStatic;
  readonly initMatSortViewChild = initMatSortViewChild;
  readonly initMatSortViewChildWithoutStatic = initMatSortViewChildWithoutStatic;
  readonly filterInputFieldSnippet = filterInputFieldSnippet;
  readonly filterInputValueSnippet = filterInputValueSnippet;

  ngOnInit() { }

}
