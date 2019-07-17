
import compareVersions from 'compare-versions'

class VersionedItemCollection {
	// ----------------------------------------------------
	constructor() {
		// TODO: init from another collection?
		this.collection = {} 
	}
	// ----------------------------------------------------
	/*
		gets the stored item at the requested version.
		returns false if there's no such item + version
		returns the item if it is in the collection
	*/
	get(itemName, itemVersion='latest') {
		// get all items named that
		const nameList = this.collection[itemName] || false

		// maybe we don't have any of that item
		if (! nameList) {
			return false
		}

		// maybe we have that item in the version requested
		if (nameList[itemVersion]) {
			return nameList[itemVersion]
		}

		// maybe they asked for the latest one?
		if (itemVersion.toLowerCase() === 'latest') {
			const sortedList = Object.keys(nameList).sort(compareVersions) 
			const latestVersion = sortedList[sortedList.length - 1]
			return nameList[latestVersion]
		}

		// otherwise they asked for a version we don't have
		return false
		
	}
	// ----------------------------------------------------
	/*
		stores the item with the name and version provided.
		will replace existing item if there was one.
		returns false if item is the first of its name/ver;
		returns true if an older item was replaced.
	*/
	put(item, itemName, itemVersion) {
		if (! this.collection[itemName] ) {
			this.collection[itemName] = {}
		}

		if (! this.collection[itemName][itemVersion] ) {
			this.collection[itemName][itemVersion] = item
			return true
		} else {
			this.collection[itemName][itemVersion] = item
			return false
		}
	}
	// ----------------------------------------------------

}

export default VersionedItemCollection