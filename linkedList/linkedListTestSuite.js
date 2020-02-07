const cls = require('./linkedList');
let Jasmine = require('jasmine');
let jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

describe('LinkedList', function() {

	beforeEach(()=>{
		console.info('test starts');
	});
	afterEach(() => {
		console.info('test finishes');
	});

	describe('size method', function(){
		it('Its size should be 0', function() {
			let LL = new cls.LinkedList();

			expect(LL.size()).toBe(0);
		});

		it('Its size should be 4', function() {
			let LL = new cls.LinkedList();
			let nodeOne = new cls.Node('a');
			let nodeTwo = new cls.Node('b');
			let nodeThree = new cls.Node('c');
			let nodeFour = new cls.Node('d');

			LL.insertIntoBeginning(nodeOne);
			LL.insertIntoBeginning(nodeTwo);
			LL.insertIntoBeginning(nodeThree);
			LL.insertIntoBeginning(nodeFour);
			expect(LL.size()).toEqual(4);
		});
	});

	describe('delete method', function() {
		it('should delete its only node.', function() {
			let LL = new cls.LinkedList();
			let nodeOne = new cls.Node('aa');

			LL.insertIntoBeginning(nodeOne);
			expect(LL.size()).toEqual(1);
			expect(LL.delete('aa')).toBe('aa');
			expect(LL.size()).toEqual(0);
		});

		it('should return false when trying to delete from an empty list', function() {
			let LL = new cls.LinkedList();

			expect(LL.delete('aa')).toBe(false);
		});

		it('should delete the head node from a multiple-node list', function() {
			let LL = new cls.LinkedList();
			let nodeOne = new cls.Node('head');
			let nodeTwo = new cls.Node('aa');
			let nodeThree = new cls.Node('bb');	

			LL.insertIntoBeginning(nodeThree);
			LL.insertIntoBeginning(nodeTwo);
			LL.insertIntoBeginning(nodeOne);
			expect(LL.delete('head')).toBe('head');
			expect(LL.size()).toEqual(2);
		});

		it('should delete the tail node from a multiple-node list', function() {
			let LL = new cls.LinkedList();
			let nodeOne = new cls.Node('aa');
			let nodeTwo = new cls.Node('bb');
			let nodeThree = new cls.Node('tail');	

			LL.insertIntoBeginning(nodeThree);
			LL.insertIntoBeginning(nodeTwo);
			LL.insertIntoBeginning(nodeOne);
			console.info(LL.toArray());
			expect(LL.delete('tail')).toBe('tail');
			expect(LL.size()).toEqual(2);
		});

		it('should delete a node in the middle from a multiple-node list', function() {
			let LL = new cls.LinkedList();
			let nodeOne = new cls.Node('aa');
			let nodeTwo = new cls.Node('middle');
			let nodeThree = new cls.Node('cc');	

			LL.insertIntoBeginning(nodeThree);
			LL.insertIntoBeginning(nodeTwo);
			LL.insertIntoBeginning(nodeOne);
			expect(LL.delete('middle')).toBe('middle');
			expect(LL.size()).toEqual(2);
		});
	});

	describe('insertIntoBeginning method', function() {
		it('should work when the list is empty', function() {
			let value = 'aa';
			let LL = new cls.LinkedList();
			let nodeOne = new cls.Node(value);

			LL.insertIntoBeginning(nodeOne);
			expect(LL.toArray().length).toBe(1);
			expect(LL.toArray()[0]).toEqual(value);
		});
		it('should work when the list is not empty', function() {
			let value = 'a';
			let LL = new cls.LinkedList();
			let nodeOne = new cls.Node(value);
			let nodeTwo = new cls.Node(value);
			let valueArray = [value, value];

			LL.insertIntoBeginning(nodeOne);
			LL.insertIntoBeginning(nodeTwo);
			expect(LL.toArray().length).toBe(2);
			expect(LL.toArray()).toEqual(valueArray);
		});
	});

	describe('insertAt method', function() {
		it('should work when insert at index 0', function() {
			let LL = new cls.LinkedList();
			let valueOne = 'a';
			let valueTwo = 'b';
			let nodeOne = new cls.Node('a');
			let nodeTwo = new cls.Node('b');
			let valueArray = [valueOne];

			LL.insertAt(nodeOne, 0);
			expect(LL.toArray().length).toBe(1);
			expect(LL.toArray()).toEqual(valueArray);
			LL.insertAt(nodeTwo, 0);
			expect(LL.toArray().length).toBe(2);
			valueArray.unshift(valueTwo);
			expect(LL.toArray()).toEqual(valueArray);
		});
	});

	describe('indexOf method', function() {
		it('should return 0', function() {
			let LL = new cls.LinkedList();
			let nodeOne = new cls.Node('a');
			let nodeTwo = new cls.Node('b');

			LL.insertIntoBeginning(nodeTwo);
			LL.insertIntoBeginning(nodeOne);
			expect(LL.indexOf('a')).toEqual(0);		
		});

		it('should return 1', function() {
			let LL = new cls.LinkedList();
			let nodeOne = new cls.Node('a');
			let nodeTwo = new cls.Node('b');

			LL.insertIntoBeginning(nodeTwo);
			LL.insertIntoBeginning(nodeOne);
			expect(LL.indexOf('b')).toEqual(1);	
		});

		it('should return 2', function() {
			let LL = new cls.LinkedList();
			let nodeOne = new cls.Node('a');
			let nodeTwo = new cls.Node('b');
			let nodeThree = new cls.Node('c');

			LL.insertIntoBeginning(nodeThree);
			LL.insertIntoBeginning(nodeTwo);
			LL.insertIntoBeginning(nodeOne);
			expect(LL.indexOf('c')).toEqual(2);	
		});
	});
});

jasmine.execute();
