
import VersionedItemCollection from './VersionedItemCollection'


// --------------------------------------------------------
it( 'can be created', ()=> {
	expect(()=> {
		let v = new VersionedItemCollection()
	}).not.toThrow()
})
// --------------------------------------------------------
it( 'does not include a fake item', ()=> {

	let v = new VersionedItemCollection()
	expect(v.get('fakeitem')).toBeFalsy()

})
// --------------------------------------------------------
it( 'can store an item', ()=> {

	let v = new VersionedItemCollection()
	let item = 'myitem'

	expect( v.put(item, 'AName', '1.2.3') ).toBeTruthy()
	expect( v.get('AName', '1.2.3') ).toEqual(item)

})
// --------------------------------------------------------
it( 'can get the highest version item', ()=> {

	let oldItem = 'olditem'
	let newItem = 'newitem'

	let v1 = new VersionedItemCollection()
	v1.put(oldItem, 'itemName', '1.2.3')
	v1.put(newItem, 'itemName', '2.3.4')

	let v2 = new VersionedItemCollection()
	v2.put(newItem, 'itemName', '2.3.4')
	v2.put(oldItem, 'itemName', '1.2.3')

	expect( v1.get('itemName', 'latest') ).toEqual(newItem)
	expect( v2.get('itemName', 'latest') ).toEqual(newItem)

})
// --------------------------------------------------------
it( 'defaults to the highest version item', ()=> {

	let oldItem = 'olditem'
	let newItem = 'newitem'

	let v1 = new VersionedItemCollection()
	v1.put(oldItem, 'itemName', '1.2.3')
	v1.put(newItem, 'itemName', '2.3.4')

	let v2 = new VersionedItemCollection()
	v2.put(newItem, 'itemName', '2.3.4')
	v2.put(oldItem, 'itemName', '1.2.3')

	expect( v1.get('itemName') ).toEqual(newItem)
	expect( v2.get('itemName') ).toEqual(newItem)

})
// --------------------------------------------------------
it( 'gives non-highest version item if requested', ()=> {

	let oldItem = 'olditem'
	let newItem = 'newitem'

	let v1 = new VersionedItemCollection()
	v1.put(oldItem, 'itemName', '1.2.3')
	v1.put(newItem, 'itemName', '2.3.4')

	let v2 = new VersionedItemCollection()
	v2.put(newItem, 'itemName', '2.3.4')
	v2.put(oldItem, 'itemName', '1.2.3')

	expect( v1.get('itemName', '1.2.3') ).toEqual(oldItem)
	expect( v2.get('itemName', '1.2.3') ).toEqual(oldItem)

})
// --------------------------------------------------------
it( 'gives nothing if version no is incorrect', ()=> {

	let oldItem = 'olditem'
	let newItem = 'newitem'

	let v1 = new VersionedItemCollection()
	v1.put(oldItem, 'itemName', '1.2.3')
	v1.put(newItem, 'itemName', '2.3.4')


	expect( v1.get('itemName', '3.4.5') ).toBeFalsy()

})
// --------------------------------------------------------
it( 'gives nothing if name is incorrect', ()=> {

	let oldItem = 'olditem'
	let newItem = 'newitem'

	let v1 = new VersionedItemCollection()
	v1.put(oldItem, 'itemName1', '1.2.3')
	v1.put(newItem, 'itemName1', '2.3.4')

	expect( v1.get('itemName2', '1.2.3') ).toBeFalsy()

})
// --------------------------------------------------------
it( 'add second item with identical name/version will replace first item', ()=> {

	let oldItem = 'olditem'
	let newItem = 'newitem'

	let v1 = new VersionedItemCollection()
	v1.put(oldItem, 'itemName', '1.2.3')
	expect( v1.get('itemName', '1.2.3') ).toEqual(oldItem)

	v1.put(newItem, 'itemName', '1.2.3')
	expect( v1.get('itemName', '1.2.3') ).toEqual(newItem)
})
// --------------------------------------------------------
