//-->for multiple file convert in js

///tsc -init 
//tsc -w 

class Users{
    name='';
    age=0;
    email=''

    constructor(name,age,email){
        this.name =name
        this.email = email
        this.age=age
    }
    displayProperty(){
        console.log(this.age,this.name,this.email)
    }
}

let u1 = new Users('kuldip',12,'kuldip@0611')
u1.displayProperty()