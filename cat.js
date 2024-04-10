const cat = document.getElementById("cat");
cat.addEventListener("click", () => {
  let count = 0; // Initialize a counter variable

  // Increment count on each click
  count++; 

  const wynik = document.getElementById("wynik");
  wynik.innerHTML = count;
});