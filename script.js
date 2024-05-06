const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function lowerCased(fruit){
const newFruit = [];
return fruit
.toLowerCase()
.filter(function(val){
	return newFruit.indexOf(val);
})

}

function search(input) {
	let results = [];
	var newFruit = fruit.map(function(v) {
		return v.toLowerCase();
	  });
for(var i=0;i<fruit.length;i++)
	{
		results.push(newFruit[i])
	}
	
	return results;
	
}

function searchHandler(e) {
    let item = e.currentTarget.value;
	let resArray = [];
	resArray = search(item);
	showSuggestions(resArray,item);
}


function showSuggestions(results, inputVal) {
console.log("test",results)
}

function useSuggestion(e) {
	e.document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
	}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);