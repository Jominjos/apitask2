

async function apical(){

    let para = document.getElementById('definition')

    try{
        let word =document.getElementById('word').value
     const res= await   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
     const resp= await res.json()
    // await console.log(resp[0]);
     let definition =await resp[0].meanings[0].definitions[0].definition;
     
        if(para){
            para.innerText=definition


        }
else{
    let def =document.createElement('p')
    def.innerText=definition;
    def.id="definition"
    let parent = document.getElementById('container')
    parent.appendChild(def)

}
    
     

    }
    catch{
        let  err ="sorry word not found"
        if(para){
            para.innerText=err


        }
        else{

            let error =document.createElement('p')
           
            error.innerText=err;
            error.id="definition"
            let parent = document.getElementById('container')
           parent.appendChild(error)
            
            //console.log('word not found');
        }
      
    }
}


function formsubmitted(e){
   e.preventDefault()
    
  
    apical();
}