const databaseUri:string = process.env.DBURI!


export function connectionString(){
    if(databaseUri){
        return databaseUri
    }
    else{
        console.log("Not database url")
    }
}