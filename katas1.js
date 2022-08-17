function oneThroughTwenty(){
let retorno = []
for (let i = 1; i <= 20; i++){
    retorno.push(i)
}
return retorno
}

console.log(oneThroughTwenty())

//---------------------------------------------------------
//call function oneThroughTwenty

function evensToTwenty() {
  let retorno = []
  for (let i = 2; i <= 20; i += 2){
      retorno.push(i)
  }
  return retorno
  }
  console.log(evensToTwenty())



//---------------------------------------------------------
//call function evensToTwenty

function oddsToTwenty() {
  let retorno = []
  for (let i = 1; i <= 20; i += 2){
      retorno.push(i)
  }
  return retorno
  }
  console.log(oddsToTwenty())


//-----------------------------------------------------------

//call function oddsToTwenty

function multiplesOfFive() {
  let retorno = []
  for (let i = 5; i <= 100; i +=5){
      retorno.push(i)
  }
  return retorno
  }
  console.log(multiplesOfFive())


//------------------------------------------------------------
//call function multiplesOfFive

function squareNumbers() {
  let retorno = []
  for (let i = 0; i <= 10; i++){
      retorno.push(i*i)
  }
  return retorno
  }
  console.log(squareNumbers())
    
  //--------------------------------------------------------------

//call function squareNumbers

function countingBackwards() {
    
  let retorno = []
  for (let i = 20; i > 0; i--){
      retorno.push(i)
  }
  return retorno
  }
  console.log(countingBackwards())

//----------------------------------------------------------------
//call function countingBackwards

function evenNumbersBackwards() {
    
  let retorno = []
  for (let i = 10; i > 0; i--){
      retorno.push(i*2)
  }
  return retorno
  }
  console.log(evenNumbersBackwards())

  //----------------------------------------------------------------
//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let retorno = []
  for (let i = 20; i > 0; i--){
      retorno.push(i)
  }
  return retorno
  }
  console.log(oddNumbersBackwards())


 

  //-----------------------------------------------------------------------
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let retorno = []
  for (let i = 100; i > 1; i -=5){
      retorno.push(i)
  }
  return retorno
  }
  console.log(multiplesOfFiveBackwards())

//-------------------------------------------------------------------------
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
  let retorno = []
  for (let i = 10; i >= 1; i--){
      retorno.push(i*i)
  }
  return retorno
  }
  console.log(squareNumbersBackwards())


//call function squareNumbersBackwards
