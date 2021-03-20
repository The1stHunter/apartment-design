let map;
function initMap() {
	map = new ymaps.Map("yandexmap", {
		center: [59.938635, 30.323118],
		zoom: 18
	});

	let marker = new ymaps.Placemark([59.938635, 30.323118], {
		hintContent: 'Расположение',
		balloonContent: 'Это наша организация'
	});
	map.geoObjects.add(marker);
}
ymaps.ready(initMap);

