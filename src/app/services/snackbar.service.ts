import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  open(message: string, status: 'success' | 'error', action: string = 'Ok') {
    return this.snackbar.open(message, action, {
      // duration: 5000,
      horizontalPosition: 'left',
      panelClass: status,
    });
  }
}
