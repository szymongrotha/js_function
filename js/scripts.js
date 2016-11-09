	var triangle1Area = getTriangleArea(10, 15);
	var triangle2Area = getTriangleArea(4, 8);
	var triangle3Area = getTriangleArea(12, 45);

	function getTriangleArea(a, h) {
		if (a <= 0 || h <= 0) {
			return 'Nieprawidłowe dane'
		} else {
			var triangleArea = a * h / 2; 
			return 'Dane prawidłowe wynik to:' + triangleArea	
		}
	}

	console.log(getTriangleArea(10, 6))
	console.log(triangle1Area)
	console.log(triangle2Area)
	console.log(triangle3Area)
