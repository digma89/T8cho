angular.module('example').controller('sliderCtrl', ['$scope', '$routeParams', '$location',
    function($scope, $routeParams, $location) {
        var projectId = $routeParams.projectId;
        $scope.isActive = function(route) {
            return route === $location.path();
        };

        $scope.myInterval = 4000;
        $scope.noWrapSlides = true;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        if (projectId == 1001) {
            $scope.addSlide = function() {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: 'images/slider/Proyecto1/1-1.jpg',
                    id: currIndex++
                },
                    {
                        image: 'images/slider/Proyecto1/1-2.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto1/1-3.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto1/1-4.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto1/1-5.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto1/1-6.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto1/1-7.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto1/1-8.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto1/1-9.jpg',
                        id: currIndex++
                    }
                );
            };

        } else if (projectId == 1002) {
            $scope.addSlide = function() {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: 'images/slider/Proyecto2/2-1.jpg',
                    id: currIndex++
                },
                    {
                        image: 'images/slider/Proyecto2/2-2.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto2/2-3.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto2/2-4.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto2/2-5.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto2/2-6.jpg',
                        id: currIndex++
                    }
                );
            };
        } else if (projectId == 1003) {
            $scope.addSlide = function() {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: 'images/slider/Proyecto3/3-1.jpg',
                    id: currIndex++
                },
                    {
                        image: 'images/slider/Proyecto3/3-2.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto3/3-3.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto3/3-4.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto3/3-5.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto3/3-6.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto3/3-7.jpg',
                        id: currIndex++
                    }
                );
            };
        } else if (projectId == 1004) {
            $scope.addSlide = function() {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: 'images/slider/Proyecto4/4-1.jpg',
                    id: currIndex++
                },
                    {
                        image: 'images/slider/Proyecto4/4-2.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto4/4-3.jpg',
                        id: currIndex++
                    }
                );
            };
        } else if (projectId == 1005) {
            $scope.addSlide = function() {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: 'images/slider/Proyecto5/5-1.jpg',
                    id: currIndex++
                },
                    {
                        image: 'images/slider/Proyecto5/5-2.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto5/5-3.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto5/5-4.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto5/5-5.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto5/5-6.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto5/5-7.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto5/5-8.jpg',
                        id: currIndex++
                    }
                );
            };

        } else if (projectId == 1006) {
            $scope.addSlide = function() {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: 'images/slider/Proyecto6/6-1.jpg',
                    id: currIndex++
                },
                    {
                        image: 'images/slider/Proyecto6/6-2.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto6/6-3.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto6/6-4.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto6/6-5.jpg',
                        id: currIndex++
                    }
                );
            };
        }else if (projectId == 1007) {
            $scope.addSlide = function() {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: 'images/slider/Proyecto7/7-1.jpg',
                    id: currIndex++
                },
                    {
                        image: 'images/slider/Proyecto7/7-2.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto7/7-3.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto7/7-4.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto7/7-5.jpg',
                        id: currIndex++
                    }
                );
            };
        }else if (projectId == 1008){
        $scope.addSlide = function() {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: 'images/slider/Proyecto8/8-1.jpg',
                    id: currIndex++
                },
                    {
                        image: 'images/slider/Proyecto8/8-2.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto8/8-3.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto8/8-4.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto8/8-5.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto8/8-6.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto8/8-7.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto8/8-8.jpg',
                        id: currIndex++
                    },
                    {
                        image: 'images/slider/Proyecto8/8-9.jpg',
                        id: currIndex++
                    }
                );
            };

        }

        for (var i = 0; i < 1; i++) {
            $scope.addSlide();
        }

    },
]);