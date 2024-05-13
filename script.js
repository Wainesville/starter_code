const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const selection = document.querySelector('suggestions ul li');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(input) {
	var fruits = fruit.map(function(v) {
		return v.toLowerCase();
	  });
	var inputs = input.toLowerCase();
			let results = [];
for(var i=0;i<fruits.length;i++)
	{
		fruits.forEach(function(val){
			if(val.includes(inputs)){
				trueVal = val.charAt(0).toUpperCase()+val.slice(1);
				results.push(trueVal);
			}
		
		});
		return results;	
	}
}

// 

function searchHandler(e) {
    let item = e.currentTarget.value;
	let resArray = [];
	resArray = search(item);
	showSuggestions(resArray,item);
}


function showSuggestions(results, inputVal) {
	while(suggestions.firstChild) suggestions.removeChild(suggestions.firstChild);
	for( let i = 0; i < results.length; i++){
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(results[i]));
		suggestions.appendChild(li);
	}
}

function useSuggestion(e) {
	let item = e.target.innerHTML;
	input.value = item;
	console.log(item);
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
