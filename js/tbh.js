var tbh = angular.module('tbh', [ 'ngRoute', 'ui.bootstrap', 'ngDragDrop']);
tbh.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    	when('/teams', {
        templateUrl: 'partials/team.html',
        controller: 'TeamCtrl'
      }).
      when('/residents', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/residents/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/floors', {
        templateUrl: 'partials/floor.html',
        controller: 'FloorCtrl'
      }).
      otherwise({
        redirectTo: '/floors'
      });
  }]).directive('navMenu', function($location) {
  return function(scope, element, attrs) {
    var links = element.find('a'),
        onClass = attrs.navMenu || 'active',
        routePattern,
        link,
        url,
        currentLink,
        urlMap = {},
        i;

    if (!$location.$$html5) {
      routePattern = /^#[^/]*/;
    }

    for (i = 0; i < links.length; i++) {
      link = angular.element(links[i]);
      url = link.attr('href');

      if ($location.$$html5) {
        urlMap[url] = link;
      } else {
        urlMap[url.replace(routePattern, '')] = link;
      }
    }

    scope.$on('$routeChangeStart', function() {
      var pathLink = urlMap[$location.path()];

      if (pathLink) {
        if (currentLink) {
          currentLink.parent().removeClass(onClass);
        }
        currentLink = pathLink;
        currentLink.parent().addClass(onClass);
      }
    });
  };
});

function FloorCtrl($scope) {
	$scope.residents = [
		{status: 'ok', name:'Margaret B.'},
		{status: 'ok', name:'Harold A.'},
		{status: 'ok', name:'Kumar J.'},
		{status: 'ok', name:'Regina O.'},
		{status: 'ok', name:'Peter H.'},
		{status: 'ok', name:'Carmen P.'},
		{status: 'ok', name:'Gabriel M.'},
		{status: 'ok', name:'Imogen H.'},
		{status: 'ok', name:'Elli G.'},
		{status: 'ok', name:'Beatrice P.'},
		{status: 'ok', name:'Alexander K.'},
		{status: 'ok', name:'Arun M.'},
		{status: 'ok', name:'Felix J.'},
		{status: 'ok', name:'Adam B.'},
		{status: 'ok', name:'Hanako W.'},
		{status: 'ok', name:'Thomas H.'},
		{status: 'ok', name:'Elizabeth M.'},
	];

	$scope.residents2 = $scope.residents.slice(0);
	shuffle($scope.residents2);
	$scope.residents3 = $scope.residents.slice(0);
	shuffle($scope.residents3);

	$scope.statsViewerCollapsed = true;

	$scope.teams = [

		'Jasmine, Diana, Jorge, Iris',
		//'Jasmine', 'Diana', 'Jorge', 'Iris',
		'Greta, Tom, Daniel, Chirley',
		'Irene, Mary, Anne, Jim',
		//'Blanca-Rosa, Mary, Anne, Jim',
		
		//'Greta, Tom, Daniel, Chirley'
	];
}

function TeamCtrl($scope) {
	$scope.cnas = [
		{name: 'Mary K.', onDuty:true}, 
		{name: 'Anne M.', onDuty:true}, 
		{name: 'Jim R.', onDuty:true},
		{name: 'Diana P.', onDuty:true}, 
		{name: 'Jorge D.', onDuty:true}, 
		{name: 'Iris L.', onDuty:true},
		{name: 'Tom J.', onDuty:true}, 
		{name: 'Daniel M.', onDuty:true}, 
		{name: 'Grace K.', onDuty:true},

	];
	$scope.teams = [
		{name : 'Jasmine D.', members:[]},
		{name : 'Irene A.', members:[]},
		{name : 'Greta A.', members:[]}
	];


	$scope.dropSuccessHandler = function($event,$index){
		$scope.cnas.splice($index,1);
	};

	$scope.onDrop = function($event,$data,$team){
		$team.push($data);
	};

	$scope.toggleOnDuty = function($member) {
		$member.onDuty = !$member.onDuty;
	}
}

function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
