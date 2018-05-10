var submit;
var form;
var body;

var mapContainer; //parent
var containerMapInfo; //children

var idArray = ['Africa-info', 'Asia-info', 'Europe-info', 'Australia-info', 'North-America-info', 'South-America-info'];

window.onload = function(e) {
    submit = document.getElementById('input-submit');
    form = document.getElementById('form');
    body = document.body;
    mapContainer = document.getElementsByClassName('map-container')[0]; //parent
    containerMapInfo = document.getElementsByClassName('container-map-info')[0]; //children

    function mouseCoords(e) {
        var x = e.clientX;
        var y = e.clientY;
        return { x: x, y: y };
    }

    body.onmousemove = function(e) {
        var b = submit.getBoundingClientRect();

        var coordinates = mouseCoords(e);
        var x = coordinates.x;
        var y = coordinates.y;

        submit.classList.remove('my-hover');

        if (x > b.left && x < b.right && y > b.top && y < b.bottom) {
            submit.classList.add('my-hover');
        }
    }

    MapContainer('Asia Tourism', 'Asia-info', '20px', '380px', false);
    MapContainer('Europe Tourism', 'Europe-info', '10px', '180px', false);
    MapContainer('Australia Tourism', 'Australia-info', '225px', '505px', false);
    MapContainer('North America Tourism', 'North-America-info', '10px', '305px', true);
    MapContainer('South America Tourism', 'South-America-info', '190px', '420px', true);

    mapContainer.onclick = function(e) {
        hideContinentInfo(e);
    }

    document.getElementById('Asia').onclick = function(e) {
        hideContinentInfo(e);
        showContinentInfo(e, 'Asia-info');
        event.stopPropagation()
    }

    document.getElementById('Europe').onclick = function(e) {
        hideContinentInfo(e);
        showContinentInfo(e, 'Europe-info');
        event.stopPropagation()
    }

    document.getElementById('Africa').onclick = function(e) {
        hideContinentInfo(e);
        showContinentInfo(e, 'Africa-info');
        event.stopPropagation()
    }

    document.getElementById('Australia').onclick = function(e) {
        hideContinentInfo(e);
        showContinentInfo(e, 'Australia-info');
        event.stopPropagation()
    }

    document.getElementById('South-America').onclick = function(e) {
        hideContinentInfo(e);
        showContinentInfo(e, 'South-America-info');
        event.stopPropagation()
    }

    document.getElementById('North-America').onclick = function(e) {
        hideContinentInfo(e);
        showContinentInfo(e, 'North-America-info');
        event.stopPropagation()
    }

    function showContinentInfo(e, id) {
        document.getElementById(id).style.display = 'block';
        document.getElementById(id).style.zIndex = '100';
    }

    function hideContinentInfo(e) {
        for (let i = 0; i < idArray.length; i++) {
            document.getElementById(idArray[i]).style.display = 'none';
            document.getElementById(idArray[i]).style.zIndex = '';
        }
    }

    function MapContainer(placeInfo, id, top, left, arrowLeft) {
        var clone = containerMapInfo.cloneNode(true);
        clone.querySelector('.continent').innerHTML = placeInfo;
        clone.style.top = top;
        clone.style.left = left;
        clone.id = id;
        if (arrowLeft === true) {
            clone.classList.remove('arrow-right');
            clone.classList.add('arrow-left');
        }
        mapContainer.appendChild(clone);
    }
}