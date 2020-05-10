let images =[
    'pic3.jpg',
    'pic2.jpg',
    'portfoliopic.jpg',
    'portfoliopic21.jpg',
    
    ];
    let i=1;
    function prev(){
       i--;
        let img =document.getElementById("slider");
        
        if(i<0){
            i=images.length-1;
        }
        img.src=images[i];
    }
    
    function next(){
    i++;
        let img =document.getElementById("slider");
        if(i>=images.length){
            i=0;
        }
        img.src=images[i];
    }