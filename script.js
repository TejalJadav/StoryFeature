let story = document.querySelectorAll(".story");

for(i=0;i<story.length;i++){
   story[i].setAttribute("id",`${i}`);
}

story.forEach(function(val){
   val.addEventListener("click",function(){
      let cover = document.querySelector(".cover");
      let top = document.querySelector(".top");
      top.style.display = "none"; 
      cover.style.display = "block";
      let inc = document.querySelector(".increse");
      let no=0;
      let timeline = setInterval(function(){
           no += 19;
           if(no<390){
                 console.log(no)
                 inc.style.width = no +"px" ;
           }
           else{
            clearInterval(timeline);
           }
      },100)

     

      if(val.id == 0){
            cover.style.backgroundImage = `url("https://images.unsplash.com/photo-1551024739-78e9d60c45ca?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fHww&w=500")`;
          
      }
      else  if(val.id == 1){
            cover.style.backgroundImage = `url("https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1922")`;
      }
      else if(val.id == 2){
            cover.style.backgroundImage = `url("https://images.unsplash.com/photo-1631947430066-48c30d57b943?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D")`;
      }
      else if(val.id == 3){
            cover.style.backgroundImage = `url("https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D")`;
      }
      else{
            cover.style.backgroundImage = `url("https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmx8ZW58MHx8MHx8fDA%3D")`;
      }

      setTimeout(function(){
         top.style.display = "flex"; 
         cover.style.display = "none";
      },2000)
   })
})

