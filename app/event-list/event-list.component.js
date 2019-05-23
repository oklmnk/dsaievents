'use strict';

angular.
  module('eventList').
  component('eventList', {
    templateUrl: 'event-list/event-list.template.html',
    controller: ['Event',
      function EventListController(Event) {
        this.events = Event.query();
        this.orderProp = 'age';
      }
    ]
  });