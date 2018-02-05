class Autofill {
	
	constructor(con, data=false) {
		var self = this;
		this.con = con;
		this.build();
		this.resize();

		this.input.addEventListener('keyup', function() {self.open(self)});
		this.input.addEventListener('blur', function() {
			setTimeout(function() {
				self.close(self);
			}, 1000);
		});

		if(data) {
			this.setData(data);
		}
	}

	build() {
		let box = document.createElement('span');	
		box.classList += 'autobox';
		box.setAttribute('data-key', this.key);
		this.con.appendChild(box);
		this.con.setAttribute('data-key', this.key);
		this.con.classList += 'autocon';
		let input = this.con.childNodes[1];

		this.input = input;
		this.box = box;
	}

	resize() {
		let width = this.input.offsetWidth;
		let height = this.input.offsetHeight;
		this.box.style.width = `${width - 2}px`;
		this.box.style.top = `${height}px`;
	}

	setData(data) {
		this.data = data;
	}

	open(self) {
		this.box.style.display = 'block';
		let val = this.input.value;
		if(val == '') {
			this.clearMatches();
			this.injectMatches();
			this.close();
			return;
		}
		this.matchData(val);
		this.injectMatches();
	}

	close() {
		this.box.style.display = 'none';
	}

	matchData(val) {
		let length = val.split('').length;
		let matches = {};
		for(var item in this.data) {
			let shrunk = this.data[item].split('').splice(0,length).join('');
			if(shrunk == val) {
				matches[item] = this.data[item];
			}
		}

		this.matches = matches;
	}

	injectMatches() {
		let self = this;
		this.box.innerHTML = '';
		for(let match in this.matches) {
			let item = document.createElement('div');
			item.setAttribute('data-value', match);
			item.innerHTML = this.matches[match];
			item.classList += 'autoresult';
			item.addEventListener('click', function() {
				if(typeof(self.customMethod) == 'function') {
					self.customMethod();
				} else {
					let value = this.innerText;
					self.input.value = value;
				}
				self.close();
			});
			this.box.appendChild(item);
		}
	}

	clearMatches() {
		this.matches = {};
	}


	// Add your own functionality
	// for dropdown selection
	// might rename class and repo
	// cuz i just realized this
	// isn't autofilling anything
	setOnSelection(customMethod) {
		this.customMethod = customMethod;
	}

}