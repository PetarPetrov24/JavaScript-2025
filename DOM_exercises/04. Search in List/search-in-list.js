function solve() {
   let towns = document.querySelectorAll('#towns li');
   let resultField = document.getElementById('result');
   let searchText = document.getElementById('searchText').value.trim().toLowerCase();

   let matchCount = 0;

   towns.forEach(town => {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';
   });

   towns.forEach(town => {
      if (town.textContent.toLowerCase().includes(searchText) && searchText !== '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matchCount++;
      }
   });

   resultField.textContent = `${matchCount} matches found`
}