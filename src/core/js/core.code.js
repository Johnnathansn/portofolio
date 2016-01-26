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

        vm.showList = false;
        vm.msgView  = false;
        vm.messages = [];

        // function list
        vm.sendMsg     = sendMsg;
        vm.previewMsg  = previewMsg;
        vm.add         = add;
        vm.showMsgList = showMsgList;




        // functions code

        // remake send to interact with the backend
        // will save the mesage list to DB
        function sendMsg() {
            vm.add(vm.newMessage);
            return true;
        }

        // show message preview
        function previewMsg() {
            if (vm.msgView == false)
                vm.msgView = true;
            else
                vm.msgView = false;
        }

        // show messages based on count
        function showMsgList(){
            if( vm.messages.length > 0 )
                vm.showList = true;
            else
                vm.showList = false;
        }

        // adds message to the list
        function add(newMsg){
            if( newMsg.subject == "" || newMsg.body == "" )
                    return false;

            newMsg.date = (vm.date.getFullYear() + '-' + ('0' + (vm.date.getMonth() + 1)).slice(-2) + '-' + ('0' + vm.date.getDate()).slice(-2))
            vm.messages.push(newMsg);
            vm.newMessage = {
                subject: "",
                body   : "",
                date   : ""
            };
            vm.showMsgList();
            return true;
        }

        // work in progress
        function listMsgs() {

        }
    }



})();
