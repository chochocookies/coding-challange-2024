// Description:
// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); // should == 2
// helper.itemCount(); // should == 6
// helper.pageItemCount(0); // should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); // should == 1 (zero based index)
// helper.pageIndex(2); // should == 0
// helper.pageIndex(20); // should == -1
// helper.pageIndex(-10); // should == -1

class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
	}
	itemCount() {
	// returns the number of items within the entire collection
	}
	pageCount() {
	// returns the number of pages
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
	}
}

class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection; // Store the collection
        this.itemsPerPage = itemsPerPage; // Store the number of items per page
    }

    itemCount() {
        // Returns the number of items within the entire collection
        return this.collection.length;
    }

    pageCount() {
        // Returns the number of pages
        return Math.ceil(this.itemCount() / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        // Returns the number of items on the current page
        // This method should return -1 for pageIndex values that are out of range
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1; // Invalid page index
        }
        
        // Calculate the number of items on the given page
        const totalItems = this.itemCount();
        const itemsOnLastPage = totalItems % this.itemsPerPage;
        
        if (pageIndex === this.pageCount() - 1) {
            return itemsOnLastPage === 0 ? this.itemsPerPage : itemsOnLastPage;
        }

        return this.itemsPerPage; // Full page
    }

    pageIndex(itemIndex) {
        // Determines what page an item is on
        // This method should return -1 for itemIndex values that are out of range
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1; // Invalid item index
        }
        
        return Math.floor(itemIndex / this.itemsPerPage); // Calculate the page index
    }
}

//other solution
class PaginationHelper {
	constructor(collection, itemsPerPage) {
	    this.collection = collection;
      this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
	  return this.collection.length;
	}
	pageCount() {
	  return parseInt(this.collection.length/this.itemsPerPage)+(this.collection.length%this.itemsPerPage>0?1:0);
	}
	pageItemCount(pageIndex) {
    return this.pageCount()<=pageIndex || pageIndex < 0? -1 : (this.pageCount()-1!=pageIndex ? this.itemsPerPage : (this.collection.length%this.itemsPerPage>0?this.collection.length%this.itemsPerPage:this.itemsPerPage));
	}
	pageIndex(itemIndex) {
	  return itemIndex < 0 || itemIndex >= this.itemCount() ? -1 : parseInt(itemIndex/this.itemsPerPage);
	}
}