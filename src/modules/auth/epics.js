// eslint-disable-next-line
import {ofType} from 'redux-observable';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/takeUntil";
import 'rxjs/add/observable/dom/ajax';
import "rxjs/add/observable/interval";
import "rxjs/add/observable/timer";

//import 'rxjs';

import * as types from './actionTypes';


export const helloWorld = action$ => action$.ofType(types.HELLO_WORLD)
    .switchMap(() =>
      Observable.timer(1000)// debounce
      .map(() => ({type: types.HELLO_WORLD_END,
        payload: {
          world: 'world',
        }})),
    );

export default [       
helloWorld
];