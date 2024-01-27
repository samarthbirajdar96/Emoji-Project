const form = document.getElementById("search-bar"); // accessed the form.

form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent the default action.

    const value = document.getElementById("search").value;
    
    console.log(value);

    displaySearchResults(value);
   
  
});


const displaySearchResults = (value = "") => {
    const filteredEmoji = emojiList.filter((e) => {
        // 'e' accesses data of emojiList

        if (e.description.indexOf(value) != -1) {
            return true;
        }

        if (e.aliases.some((elem) => elem.startsWith(value))) {
            return true;
        }

        if (e.tags.some(elem => elem.startsWith(value))) {
            return true;
        }
      
    });

    // TABLE BODY:
    const parent = document.getElementById("search_result_container");
    parent.innerHTML = ""; // string concatenation

    filteredEmoji.forEach((e) => {

        // Dynamic creation:
        const new_row = document.createElement("tr");
        const new_emoji = document.createElement("td");
        const new_aliases = document.createElement("td");
        const new_desc = document.createElement("td");

        // Insert data in the dynamically created element
        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases.join(", ").replaceAll('_', " ");
        new_desc.innerText = e.description;

        new_emoji.classList.add("emoji");
        new_aliases.classList.add("aliases");
        new_desc.classList.add("desc");

    

        // Append the new elements to the row:

        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_desc);

        parent.appendChild(new_row);
        
    });
}

window.onload = () => displaySearchResults();
document.getElementById("search").addEventListener("keyup", (e) => displaySearchResults(e.target.value));



