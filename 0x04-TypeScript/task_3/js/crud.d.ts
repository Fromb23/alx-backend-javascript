import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): RowID;
export function deleteRow(row: RowElement): void;
export function updateRow(row:RowID, row:  RowElement): RowID;
