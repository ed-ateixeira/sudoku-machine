import {
  TBigRow,
  TInitialMatrix,
  TMatrix,
  TSmallRow,
  TSquare,
} from "../interfaces";
import { initialMatrix } from "../mock";
import { Tile } from "./Tile";

class SudokuMachine {
  private initial: TInitialMatrix;
  private matrix: TMatrix;

  constructor(initial: TInitialMatrix = initialMatrix) {
    this.initial = initial;
    this.matrix = this.gen();
  }

  private gen() {
    const matrix: TMatrix = [];
    const initial = this.initial;
    initial.forEach((i) => console.log(i));

    for (let matrix_row_index = 1; matrix_row_index < 4; matrix_row_index++) {
      const matrix_row: TBigRow = [];

      for (let square_index = 1; square_index < 4; square_index++) {
        const square: TSquare = [];

        for (
          let square_row_index = 1;
          square_row_index < 4;
          square_row_index++
        ) {
          const square_row: TSmallRow = [];

          for (let row_tile_index = 1; row_tile_index < 4; row_tile_index++) {
            const tile_location = `${matrix_row_index}${square_index}_${square_row_index}${row_tile_index}`;
            const tile = new Tile(
              tile_location,
              // Number(
              //   `${matrix_row_index}${square_index}${square_row_index}${row_tile_index}`
              // )
              initial[matrix_row_index - 1][square_index - 1][
                square_row_index - 1
              ][row_tile_index - 1]
            );

            square_row.push(tile);
          }

          square.push(square_row);
        }

        matrix_row.push(square);
      }

      matrix.push(matrix_row);
    }

    return matrix;
  }

  private findTileByLocation(location: string) {
    const big_row = Number(location[0]) - 1;
    const square = Number(location[1]) - 1;
    const row = Number(location[3]) - 1;
    const tile = Number(location[4]) - 1;

    return this.matrix[big_row][square][row][tile];
  }

  updateTilesPossibilities() {
    const tiles = this.matrix.flat(3);

    for (const tile of tiles) {
      const tile_row = tile.getGlobalRow();
      const tile_col = tile.getGlobalCol();
      const tile_square = tile.getSquare();
      const tile_location = tile.getLocation();

      console.log("\n\nLocation: " + tile_location);

      const tilesFromRow = tiles.filter(
        (t) =>
          t.getLocation() !== tile_location && t.getGlobalRow() === tile_row
      );

      const tilesFromCol = tiles.filter(
        (t) =>
          t.getLocation() !== tile_location && t.getGlobalCol() === tile_col
      );

      const tilesFromSquare = tiles.filter(
        (t) =>
          t.getLocation() !== tile_location && t.getSquare() === tile_square
      );

      console.log("Linha: ", tilesFromRow);
      console.log("Coluna: ", tilesFromCol);
      console.log("Matriz: ", tilesFromSquare);
    }
  }

  // private updateTilePossibilities(tileLocation: string) {
  //   const tileInMatrix = this.findTileByLocation(tileLocation);
  //   // tileInMatrix.setValue();
  // }

  resolve() {}

  getMatrix() {
    for (const big_row of this.matrix) {
      for (const square of big_row) {
        console.log(
          square.map((small_row) =>
            small_row.map((tile) => String(tile.getValue()))
          )
        );
      }
    }
  }
}

export { SudokuMachine };
