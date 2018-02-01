class Autofill {
	
	constructor(con) {
		var self = this;
		this.con = con;
		this.build();
		this.resize();

		this.input.addEventListener('keyup', function() {self.open(self)});
		this.input.addEventListener('blur', function() {self.close(self)});
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
		let input = document.querySelector('.autocon input');
		let width = input.offsetWidth;
		let height = input.offsetHeight;
		this.box.style.width = `${width - 2}px`;
		this.box.style.top = `${height}px`;
	}

	setData(data) {
		this.data = data;
	}

	open(self) {
		this.box.style.display = 'block';
		let val = this.input.value;
		this.matchData(val);
	}

	close(self) {
		self.box.style.display = 'none';
	}

	matchData(val) {
		let length = val.split('').length;
		for(var item in this.data) {
			// match input to items in data
			// and list out in this.box
		}
	}

}