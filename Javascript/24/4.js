function draw(n){
    let num = '';

    for(let col = 1;col<=n;col++){
        for(let col2 = 0 ;col2<n;col2++){
           num = num+col
        }
      
      console.log(num);
      num = "";
    }
}