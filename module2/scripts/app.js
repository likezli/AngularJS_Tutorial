(function() {
	'use strict';

	// define a new angular module ShoppingListCheckOff with 2 controllers and 1 service
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckoffService', ShoppingListCheckoffService);

	// ToBuyController
	ToBuyController.$inject = ['ShoppingListCheckoffService'];
	function ToBuyController(ShoppingListCheckoffService) {
		// assign this object to variable buyCtrl
		var buyCtrl = this;

		// get the to buy list from service
		buyCtrl.items = ShoppingListCheckoffService.getItems();

		// calls the buyItem method in service
		buyCtrl.buyItem = function(itemIndex) {
			ShoppingListCheckoffService.buyItem(itemIndex);
		}
	}

	// AlreadyBoughtController
	AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];
	function AlreadyBoughtController(ShoppingListCheckoffService) {
		// assign this object to variable boughtCtrl
		var boughtCtrl = this;

		// get the alreay bought list from service
		boughtCtrl.items = ShoppingListCheckoffService.getBoughtItems();
	}

	// ShoppingListCheckoffService
	function ShoppingListCheckoffService() {
		// assign this object to variable service
		var service = this;

		// initialize array with at least 5 elements for to buy list
		// item properties name and quantity
		var items = [
			{ name : 'mangos', quantity : 10},
			{ name : 'pineapples', quantity: 7},
			{ name : 'watermelons', quantity: 5},
			{ name : 'peaches', quantity: 6},
			{ name : 'bananas', quantity: 3},
			{ name : 'apples', quantity: 8}
		];

		// initialize empty array for bought items
		var boughtItems = [];

		// method that removes item from to buy and add this to already bought
		service.buyItem = function(itemIndex) {
			boughtItems.push(items[itemIndex]);
			items.splice(itemIndex,1);
		}

		// returns the to buy items
		service.getItems = function() {
			return items;
		};

		// returns the alreay bought items
		service.getBoughtItems = function() {
			return boughtItems;
		}
	}
})();