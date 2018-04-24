function forLoop(array){
  for(let index = 0; index < 25; index++){
    if(index === 1){
      array.push(`"I am ${index} strange loop."`);
    }
    else{
      array.push(`I am ${index} strange loops.`);
    }
  }
  return array;
}
