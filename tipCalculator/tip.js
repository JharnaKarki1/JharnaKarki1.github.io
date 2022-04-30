function calcTip() {
	var totalElem = document.getElementById('total');
	var subtotal = document.getElementById('subtotal').value;
    var tip = document.getElementById('tip').value;
    
	var total = eval(subtotal) + eval(subtotal*tip/100);
	totalElem.innerHTML = '$' + total;
}