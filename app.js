function showFoodItems() {
    const searchFood = document.getElementById("search-for-food").value;
    const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`;
    fetch(apiURL)
        .then(res => res.json())
        .then(data => foodItems(data))
        .catch(error => {
            document.getElementById("error-message").innerText = "Foods Not Found";

        })
}

function foodItems(data) {
    const foodIList = document.getElementById("food-items");
    const foodItems = data.meals;
    for (let i = 0; i < foodItems.length; i++) {
        const foodName = foodItems[i].strMeal;
        const foodImg = foodItems[i].strMealThumb;
        const perFoodBox = document.createElement("div");
        perFoodBox.className = "per-food-box"
        const foodInfo = `
            <img src='${foodImg}'>
            <h2>${foodName}</h2>
            <button class="details-btn" onclick="showDetails('${foodName}')">Details</button>
        ` ;
        perFoodBox.innerHTML = foodInfo;
        foodIList.appendChild(perFoodBox);

    }
}

function showDetails(foodName){
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => details(data) )

}

function details (data){
    const foodDetails = document.getElementById('food-details-box');
    const food = data.meals;
    for (let i = 0; i < food.length; i++) {
        const foodName = food[i].strMeal;
        const foodImg = food[i].strMealThumb;
        const foodDetailsInfo = `
        <img src='${foodImg}'>
        <h2>${foodName}</h2>
        <h4>Ingredient</h4>
        <p>a. ${food[i].strIngredient1}</p>
        <p>b. ${food[i].strIngredient2}</p>
        <p>c. ${food[i].strIngredient3}</p>
        <p>d. ${food[i].strIngredient4}</p>
        <p>e. ${food[i].strIngredient5}</p>
        <p>f. ${food[i].strIngredient6}</p>
        <p>g. ${food[i].strIngredient7}</p>
        `;
        foodDetails.innerHTML = foodDetailsInfo;
        
    }
}