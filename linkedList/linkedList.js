class Node {
	constructor(value) {
		this.value = value;
		this.nextNode = null;
	}
}

class LinkedList {
	constructor() {
		this.headNode = null;
	}
	insertIntoBeginning(newNode) {
		if (this.headNode !== null) {
			newNode.nextNode = this.headNode;
			this.headNode = newNode;
		}
		else {
			this.headNode = newNode;
		}
	}
	insertAt(newNode, index){
		let currentNode = this.headNode;
		let previousNode = null;
		let i = 0;

		if(index === 0){
			newNode.nextNode = this.headNode;
			this.headNode = newNode;
			return newNode.value;
		}
		else {
			while((currentNode!==null) && (i<index)) {
				previousNode = currentNode;
				currentNode = currentNode.nextNode;
				i++;
			}
			if (currentNode == null) {
				return false;
			}
			previousNode.nextNode = newNode;
			newNode.nextNode = currentNode;
			return newNode.value;
		}
	}
	printList() {
		let currentNode = null;

		if (this.headNode !== null) {
			currentNode = this.headNode;
			while(currentNode!==null) {
				console.log(currentNode.value);
				currentNode = currentNode.nextNode;
			}
		}
		else {
			console.log('The list is empty');
		}
	}
	deleteAt(index) {
		if (index < 0) {return false;}
		let currentNode = this.headNode;
		let previousNode = null;

		if (index === 0) {  //delete the head node
			let temp = null;

			temp = this.headNode.value;
			this.headNode = this.headNode.nextNode;
			return temp;
		}

		else {
			let i = 0;
			while ((currentNode!==null)&&(i<index)) {
				previousNode = currentNode;
				currentNode = currentNode.nextNode;
				i++;
			}
			if (currentNode!==null) {
				let temp = null;

				temp = currentNode.value;
				previousNode.nextNode = currentNode.nextNode;
				return temp;
			}
		}
	}
	delete(value) {
		let i = this.indexOf(value);
		let temp = this.deleteAt(i);
		
		return temp;
	}
	indexOf(value) {
		let currentNode = this.headNode;
		let i = -1;

		if (this.headNode !== null) {
			i = 0;
		}

		while(currentNode!==null) {
			if (currentNode.value === value) {
				return i;
			}
			currentNode = currentNode.nextNode;
			i++;
		}
		return i;
	}
	size() {
		let currentNode = this.headNode;
		let i = 0;

		while(currentNode!==null) {
			currentNode = currentNode.nextNode;
			i++;
		}
		return i;
	}
	toArray() {
		let currentNode = this.headNode;
		let valueArray = [];

		while(currentNode !== null) {
			valueArray.push(currentNode.value);
			currentNode = currentNode.nextNode;
		}
		return valueArray;
	}
}

module.exports = {
	Node: Node,
	LinkedList: LinkedList
};