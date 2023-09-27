/* 
FREE MEAL: 
    CATEGORIES: https://www.themealdb.com/api/json/v1/1/list.php?c=list
    


*/

export const getFetchInfo = async() => {

    const freeMealCategories = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"

    const response = await fetch(freeMealCategories);
    

    const data = await response.json();
    const {meals} = data;
    

    return meals
    
    
    
}