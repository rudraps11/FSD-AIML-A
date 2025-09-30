 async function loadRecipes() {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();
      const recipes = data.recipes || [];
      const tbody = document.querySelector("#recipeTable tbody");

      recipes.forEach((recipe, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${recipe.name}</td>
          <td><img src="${recipe.image}" alt="${recipe.name}"></td>
          <td>${recipe.rating} ⭐</td>
          <td>₹${recipe.id * 10}</td>
          <td><button onclick="addToCart('${recipe.name}')">Add to Cart</button></td>
        `;

        tbody.appendChild(tr);
      });
    }

    function addToCart(name) {
      alert(`${name} added to cart!`);
    }

    loadRecipes();