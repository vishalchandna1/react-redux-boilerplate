function ExampleHOC(Component1, Component2) {
  const number = Math.random();
  if(number > 0.5) {
    return Component2;
  } 
    return Component1;
  
}

export default ExampleHOC;
