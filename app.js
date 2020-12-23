(function () {
    'use strict';

    angular.module('app', [])
        .controller('buy', buy)
        .controller('bought', bought)
        .service('items', items);

    buy.$inject = ['items'];
    function buy(service) {
        var controller = this;
        controller.toBuyItems = service.getToBuyItems();

        controller.addToBought = function (itemIndex) { 
            service.addBoughtItem(itemIndex);
        }
    };

    bought.$inject = ['items'];
    function bought(service) {
        var controller = this;
        controller.boughtItems = service.getBoughtItems();
    };

    function items() {
        var service = this;

        var boughtItems = [];

        var toBuyItems = [
            new Item("Dark Souls", 3),
            new Item("Assassin's Creed", 12),
            new Item("Diablo", 4),
            new Item("Skyrim", 10),
            new Item("Mafia", 6),
            new Item("Dishonored", 3)
        ];

        service.addBoughtItem = function (shopItemId) {
            boughtItems.push(toBuyItems[shopItemId]);
            toBuyItems.splice(shopItemId, 1);
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    };


    class Item {
        constructor(name, amount) {
            this.name = name;
            this.amount = amount;
        };
    };

})();