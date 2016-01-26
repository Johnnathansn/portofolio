(function() {
    'use strict';

     // core route block
    angular
    .module('core')
    .controller('contactCtrl', contactCtrl);

    // function for the contact controller
    function contactCtrl(){
        var vm = this;

        // variables, arrays, objects
        vm.date = new Date();
        vm.newMessage = {
            subject: "",
            body   : "",
            date   : ""
        };

        vm.msgView = false;
        vm.messages = [];

        // function list
        vm.sendMsg    = sendMsg;
        vm.previewMsg = previewMsg;
        vm.add        = add;




        // functions code
        function sendMsg() {
            vm.add(vm.newMessage);
            return true;
        }

        function previewMsg() {
            if (vm.msgView == false)
                vm.msgView = true;
            else
                vm.msgView = false;
        }

        function add(newMsg){
            newMsg.date = (vm.date.getFullYear() + '-' + ('0' + (vm.date.getMonth() + 1)).slice(-2) + '-' + ('0' + vm.date.getDate()).slice(-2))
            vm.messages.push(newMsg);
            vm.newMessage = {
                subject: "",
                body   : "",
                date   : ""
            };
            return true;
        }

        function listMsgs() {

        }
    }



})();
