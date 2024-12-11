let timeout = null;
function searchItems() {
  const searchContainer = document.querySelectorAll(".menu-items");
  searchContainer.forEach((container) => {
    const items = container.querySelectorAll(".menu-card");
    let newItems = [...items];
    newItems.map((item) => {
      const itemName = item.querySelector("h4").innerText.toLowerCase();
     
     if (itemName.includes(query.toLowerCase())) {
        item.style.display = "block";
        console.log("sjbd")
      } else {
        item.style.display = "none";
        console.log("fghj")
      }
    });
  });

}
document.querySelector(".search-input").addEventListener("input", (event) => {
  const query = event.target.value;
  console.log("query",query);
 
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      searchItems(query);
    }, 2000);
  
});