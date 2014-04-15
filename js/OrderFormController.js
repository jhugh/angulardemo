function OrderFormController($scope) {

    $scope.services =[ 
    {
        name: "Web Development",
        price: 300,
        active: true
    },{
        name: "Design",
        price: 400,
        active: false
    },{
        name: "Integration",
        price: 300,
        active: true
    },{
        name: "Training",
        price: 200,
        active: true
    } 
    ];

    $scope.toggleActive = function(s) {
        s.active = !s.active
    };
    
    $scope.total = function() {
        var total =0;
        angular.forEach($scope.services, function(s) {
            if (s.active) {
                total += s.price;
            }
        });
        return total;
    };
    
}