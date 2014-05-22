angular.module('tbh', ['ui.bootstrap']);

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
	$scope.statsViewerCollapsed = true;
	$scope.team  = {
		name: 'Grace, Mary, Anne, Jim',
		members : [
			'Grace K.',
			'Mary K.',
			'Anne M.',
			'Jim R.',
		]
	};
}