//  x x x    x x x    x x x
//  x x x    x x x    x x x
//  x x x    x x x    x x x
//
//  x x x    x x x    x x x
//  x x x    x x x    x x x
//  x x x    x x x    x x x
//
//  x x x    x x x    x x x
//  x x x    x x x    x x x

import { Tile } from "../classes/Tile";

//  x x x    x x x    x x x
export type TMatrix = TBigRow[];

//  x x x    x x x    x x x
//  x x x    x x x    x x x
//  x x x    x x x    x x x
export type TBigRow = TSquare[];

//  x x x
//  x x x
//  x x x
//
//  x x x
//  x x x
//  x x x
//
//  x x x
//  x x x
//  x x x
export type TBigCol = TSquare[];

//  x x x
//  x x x
//  x x x
export type TSquare = TSmallRow[];

//  x x x
export type TSmallRow = Tile[];

//  x
//  x
//  x
export type TSmallCol = Tile[];

export type TInitialMatrix = (number | null)[][][][];
