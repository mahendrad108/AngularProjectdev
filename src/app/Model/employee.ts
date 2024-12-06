export class Employee {
    eid: string;
    firstname: string;
    lastname: string;
    sal: string;
    gender: string;
    id: string;
    constructor(eid:string,firstname:string,lastname:string,sal:string,gender:string,id:string)
    {
 this.eid = eid;
 this.firstname = firstname;
 this.lastname  = lastname;
 this.sal = sal;
 this.gender = gender;
 this.id = id;
    }

    getfullName()
    {
        return this.firstname +this.lastname;
    }
    
}

