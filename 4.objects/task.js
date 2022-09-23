function Student(name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student1 = new Student ("Olga", "female", 19);
let student2 = new Student ("Egor", "male", 18);
let student3 = new Student ("Emma", "female", 20);

Student.prototype.setSubject = function(subjectName){
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...marks){
  if(this.marks === undefined){ 
    this.marks = marks;
  } else {
    this.marks.push = [...marks];
  }
}

Student.prototype.getAverage = function(){
  return (this.marks.reduce((sum, mark) => sum + mark) / this.marks.length);
}

Student.prototype.exclude = function(reason){
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}
