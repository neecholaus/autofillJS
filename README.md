## AutofillJS
##### Provide user with matching suggestions as they type

What you need:
```html
<div id="autofill-container">
	<input type="text" id="autofill" />
</div>
```
The surrounding `div` tag needs to be around your text input. The ID's are needed.

Grab the autofill-container and save as a variable.
```js
var el = document.getElementById('autofill-container');
```

Initialize autofill by doing:
```js
var autofill = new Autofill(el);
```

Matching suggesstions will appear under the input box if there are any matches given to autofill. The data passed to autofill needs to be a JSON object and can be passed by either of the following.
```js
new Autofill(el, data);
```
The second paramater is an optional one used by the constructor to pass data on initialization. If you don't have the data at the time of initialization or want to add it seperately you can add it like this once you have a new Autofill() saved as a var.
```js
autofill.setData(data);
```

By default, when an item in the dropdown is clicked, it will inject the text in to the input. If you want to replace that functionality with your own do the following.
```js
autofill.setOnSelection(myFunction);
```

