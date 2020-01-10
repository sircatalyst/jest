const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database initialized ...');
// const closeDatabase = () => console.log('Database initialized ...');

const nameCheck = () => console.log('Checking Name ...');
describe('Checking Names', () => {
    beforeEach(() => nameCheck());
    
    test('User is Temitope ', () => {
        const user = 'Temitope';
        expect(user).toBe('Temitope');
    });
    test('User is Tee ', () => {
        const user = 'Tee';
        expect(user).toBe('Tee');
    });
});

test('Add 2 + 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});

test('Add 2 + 2 to Not equal 5', () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

// check for truthy and falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTrusty matches anything that an if statement treats as true
// toBeFalsy matches anything hat an if statement treats as false

// to be Null
test('Should be null', () => {
	expect(functions.isNull()).toBeNull();
});

// To be falsy
test('Should be falsy', () => {
	expect(functions.checkValue(null)).toBeFalsy();
	expect(functions.checkValue(0)).toBeFalsy();
	expect(functions.checkValue(undefined)).toBeFalsy();
});

test('Should be null', () => {
	expect(functions.isNull()).toBeNull();
});

// to Equal
test('User should be Temitope Bamidele object', () => {
	expect(functions.createUser()).toEqual({
		firstName: 'Temitope',
		lastName: 'Bamidele',
	});
});

// less than and greater than
test('Should be under 1600', () => {
	const load1 = 800;
	const load2 = 800;
	expect(load1 + load1).toBeLessThan(1608);
	expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// regex
test('There is no I in team', () => {
	expect('teami').not.toMatch(/I/);
});

// Arrays
test('Admin should be in username', () => {
	usernames = ['John', 'Karem', 'admin'];
	expect(usernames).toContain('admin');
});

//Working with async data
test('User fetched name should be Leanne Graham', () => {
	return functions.fetchUser().then(data => {
		expect(data.name).toEqual('Leanne Graham');
	});
});

// Async Await
// test('User fetched name should be Leanne Graham', async () => {
// 	const data = await functions.fetchUser();
// 	expect(data.name).toEqual('Leanne Graham');
// });
