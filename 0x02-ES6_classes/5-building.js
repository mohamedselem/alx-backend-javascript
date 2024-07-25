// Define the class name Building
export default class Building {
  // Constructor function that takes a parameter named sqft
  constructor(sqft) {
    // Set the _sqft property to equal value of sqft
    this._sqft = sqft;

    // Check if current class is not the Building class 
    // and if the evacuation Warning Message property is not defined in the current class
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      // Throw an error if the above condition is true
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  // Getter function for the sqft property
  get sqft() {
    return this._sqft;
  }
}
