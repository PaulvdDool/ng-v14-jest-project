# Project

## Minimal reproduction
This repository is a minimal reproduction of an issue I'm running into with Jest where it doesn't work in an Angular library project, but it does work in normal/non-library Angular project.
The app is an Angular v14 project with the same overall structure and configuration as the larger project that is also not showing the error.

## Error to reproduce
When running unit tests in the library that is giving issues, a class initialisation is throwing an error.
```
TypeError: Cannot read properties of undefined (reading 'initialLoadingStatus')
```

The error happens in the `StoreService` file embedded in that project.
```angular2html
import { Injectable } from "@angular/core";

export enum Status {
  IDLE,
  PENDING,
  DONE,
  ERROR
}

export interface StoreState {
  loadingStatus: LoadingStatus;
}

export interface LoadingStatus {
  loading: Status;
}

@Injectable()
export class StoreService {
  static readonly initialLoadingStatus: LoadingStatus = {
    loading: Status.IDLE
  }

  static readonly initialState: StoreState = {
    loadingStatus: StoreService.initialLoadingStatus
  }

  constructor() {}

  setLoadingStatus( { key, status }: { key: string, status: Status }, state: StoreState ): StoreState {
    return {
      ...state,
      loadingStatus: {
        ...state.loadingStatus,
        [key]: status
      }
    }
  }
}
```
This project contains the same exact service file and test and does not throw the error.

## How to install app and run tests
1. Check out this repository
2. Run `npm install`
3. Run `npm run test`

