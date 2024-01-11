//  x
class Tile {
  private location: string;
  private value: number | null;
  private possibilities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(location: string, value: number | null = null) {
    this.location = location;
    this.value = value;

    if (value) {
      this.possibilities = [value];
    }
  }

  removePossibility(possibility: number) {
    this.possibilities = this.possibilities.filter((p) => p !== possibility);
  }

  insertPossibility(possibility: number) {
    if (!this.possibilities.includes(possibility)) {
      this.possibilities.push(possibility);
    }
  }

  setPossibilities(possibilities: number[]) {
    this.possibilities = possibilities;
  }

  getPossibilities() {
    return this.possibilities;
  }

  setValue(value: number | null) {
    this.value = value;
  }

  getValue() {
    return this.value || " ";
  }

  getLocation() {
    return this.location;
  }

  getSquare() {
    return this.location.split("_")[0];
  }

  getSquareRow() {
    return Number(this.getSquare()[0]);
  }

  getSquareCol() {
    return Number(this.getSquare()[1]);
  }

  getPosition() {
    return this.location.split("_")[1];
  }

  getPositionRow() {
    return Number(this.getPosition()[0]);
  }

  getPositionCol() {
    return Number(this.getPosition()[1]);
  }

  getGlobalRow() {
    const square_row = this.getSquareRow();
    const amount_to_sum = square_row === 2 ? 3 : square_row === 3 ? 6 : 0;

    return amount_to_sum + this.getPositionRow();
  }

  getGlobalCol() {
    const square_row = this.getSquareCol();
    const amount_to_sum = square_row === 2 ? 3 : square_row === 3 ? 6 : 0;

    return amount_to_sum + this.getPositionCol();
  }
}

export { Tile };
