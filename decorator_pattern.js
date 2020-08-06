class Rectangle {
	constructor() {
		
	}
	
	draw() {
		console.log('Shape: Rectangle');
	}
}

class Circle {
	constructor() {
		
	}
	
	draw() {
		console.log('Shape: Circle');
	}
}

class ShapeDecorator {
	constructor(decoratedShape) {
		this.decoratedShape = decoratedShape;
	}
	
	draw() {
		decoratedShape.draw();
	}
}

class RedShapeDecorator extends ShapeDecorator {
	constructor(decoratedShape) {
		super(decoratedShape);
		this.decoratedShape = decoratedShape;
	}
	
	draw() {
		this.decoratedShape.draw();
		this.setRedBorder(this.decoratedShape);
	}
	
	setRedBorder(decoratedShape) {
		console.log('Border Color: Red');
	}
}

const circle = new Circle();
const redCircle = new RedShapeDecorator(new Circle());
const redRectangle = new RedShapeDecorator(new Rectangle());

console.log('Circle with normal border');
circle.draw();

console.log('Circle of red border');
redCircle.draw();

console.log('Rectangle of red border');
redRectangle.draw();