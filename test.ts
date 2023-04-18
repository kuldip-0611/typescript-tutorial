//-->for multiple file convert in js

///tsc -init 
//tsc -w 

class user{
    private name = ""
    
    setName(name){
        this.name = name
    }
    getName(){
        console.log(this.name)
    }

    private getNameLength(){
        console.log(this.name.length)
    }

}

let u1 = new user();
u1.setName('kuldip');
u1.getName();