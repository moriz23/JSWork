class Course {
  #price;
  
  get price(){
    return '$' + this.#price;
  }
  set price(value){
    if(value < 0){
      throw 'Invalid value!';
    }
    this.#price = value;
  }
  constructor(courseTitle, courseLength, coursePrice){
    this.title = courseTitle;
    this.length = courseLength;
    this.price = coursePrice;
  }

  courseCalculate(){
    const total = this.#price / this.length;
    return total;
  }

  courseSummary(summary){
    this.courseSummary = summary;
    const courseDesc = `
      Title:${this.title}
      Length:${this.length}
      Price:${this.price}
      Summary:${this.courseSummary}
      `
    return courseDesc;
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, exerciseCount){
    super(title, length, price);
    this.numOfExercises = exerciseCount;
  }

}

class TheoreticalCourse extends Course {
  // constructor(title, length, price,){
  //   super(title, length, price,);
  //   this.publish();
  // } not needed

  publish(){
    console.log("Publishing....");
  }

}

const history = new Course("History", 12, 500.00);
const physics = new Course("Physics 101", 12, 300.00);
const javaScript = new PracticalCourse("JavaScript", 44, 100.00, 34);
const react = new TheoreticalCourse("React", 50, 79.99);

console.log(history);
console.log(history.courseCalculate());
console.log(history.courseSummary("This course is about US History from 1776-1900."));
console.log(physics);
console.log(physics.courseCalculate());
console.log(physics.courseSummary("This course is about physics and basics law of motion."));
console.log(javaScript);
console.log(javaScript.courseSummary("Course about Javascript"))
console.log(react);
react.publish();
