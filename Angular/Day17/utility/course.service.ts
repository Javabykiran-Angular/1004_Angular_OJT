export class CourseService{
    course:string[]=["Core java","Advanced java","Html","CSS","JS","MySql","Spring","Spring Boot","Angular 12","Docker","AWS","Jenkings"];

    getCourse(){
        return this.course;
    }

}