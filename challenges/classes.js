// 1. Copy and paste your prototype in here and refactor into class syntax.
class classCuboidMaker {
    constructor(attributes){
    this.length = attributes.length,
    this.width  = attributes.width,
    this.height = attributes.height
  }
  volume(){
    return this.length * this.width * this.height
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}


 let newcuboid = new classCuboidMaker({
    length: 4,
    width : 5,
    height: 5
});





// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(newcuboid.volume()); // 100
 console.log(newcuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends classCuboidMaker{
    constructor(attributes){
        super(attributes)
        this.cubeSide=attributes.cubeSide,
        this.cubeLength = attributes.cubeLength
    }
    cubeVolume(){
        return this.cubeSide * this.cubeSide * this.cubeSide

    }
    cubeSurfaceArea(){
        return this.cubeLength * this.cubeLength * this.cubeLength
    }
}
let newCube= new CubeMaker({
    cubeSide: 5,
    cubeLength: 5
})

console.log(newCube.cubeVolume());
console.log(newCube.cubeSurfaceArea());