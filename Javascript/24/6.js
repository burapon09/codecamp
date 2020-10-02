function draw(n){

let num = "";

let up = 1 ;


        for(let col = 1; col<=n ; col++){

            for(let col2 = 0 ; col2<n ; col2++){
                
               num = num + up;
               up++
            }

            console.log(num);

            num = "";
    
        }




}