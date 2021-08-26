

async function getBookDetails() {
    const data = await fetch("https://anapioficeandfire.com/api/books/?page=1&pageSize=50");
    const booksListArr = await data.json();
    const header = document.createElement("div");
    const date = new Date();
     header.innerHTML = `<h2> Book Catelogue Number of Books ${booksListArr.length}</h2> ` +  date;
    document.body.append(header);
   
    let  id = 0;
    let  bookid = 1;
    for (var book of booksListArr) {
      let j = book.name;
      const info = document.createElement("div");
     
      info.className = "container";
      info.innerHTML = `
      
    <div class="text container">
        <p class="displaycontentHeader"> S.No&nbsp;&nbsp;&nbsp;:  ${bookid}</p>
        <p class="displaycontentHeader"> Book Name&nbsp;&nbsp;&nbsp;:  ${book.name}</p>
        <p  class="displaycontent">ISBN Name&nbsp;&nbsp;&nbsp;: ${book.isbn}</p>
        <p class="displaycontent">Number Of Pages &nbsp;&nbsp;&nbsp;: ${book.numberOfPages}</p>
        <p class="displaycontent">Publisher&nbsp;&nbsp;&nbsp;: ${book.publisher}</p>
        <p class="displaycontent">Published On&nbsp;&nbsp;&nbsp;: ${book.released}</p>
        <p id="authours${id}" class="displaycontent">Author Name&nbsp;&nbsp;&nbsp;: ${book.authors}</p>
        
    </div>
    `;
    bookid++;
    document.body.append(info);
    const characterHeader = document.createElement("div");
      characterHeader.innerHTML = `<p id="characters${id}" class="displaycontentHeader">Characters</p>`;
      document.getElementById("authours"+ id).appendChild(characterHeader);
      for ( i = 0; i <5; i++) {
      const characterSection = document.createElement("div");
      console.log(book.name +  " " +book.characters[i]);
      const charactersData = await fetch(book.characters[i]);
      const charactersArray = await charactersData.json();
      console.log(book.name +  " " +charactersArray.name);
      console.log(book.name +  " " +charactersArray.name);
  
      //document.getElementById("authours"+ id).appendChild(``);
     
      characterSection.innerHTML = `
      <div>
       <p class="displaycontent">Character Name&nbsp;&nbsp;&nbsp;: ${charactersArray.name}</p>
      </div>`;
      if ( charactersArray.name != "") {
      //document.getElementById("characters"+ id ).appendChild(characterSection);
      document.getElementById("characters"+ id ).appendChild(characterSection);
      } 
      }
     id++;   
    
 
    }
   }
   
      getBookDetails();
