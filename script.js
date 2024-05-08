const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


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
				val.charAt(0).toUpperCase()+val.slice(1);
				results.push(val);
			}
		
	});
	return results;
	
	
}
}

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
		// var hr = document.createElement('hr');
		li.appendChild(document.createTextNode(results[i]));
		suggestions.appendChild(li);
		// suggestions.appendChild(hr);
	}
}

function useSuggestion(e) {
	let item = e.currentTarget.value;
	let freshArray = [];
	input = item;
	showSuggestions(freshArray,item);
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);