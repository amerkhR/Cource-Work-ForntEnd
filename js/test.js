function check() {
	var yes = 0;
	var no = 0;
	var otvet = "";
	var choice;
	for (var v = 1; v <= 12; v++) {
		var q = document.forms['quiz'].elements['vopros' + v];
		for (var i = 0; i < q.length; i++) {
			if (q[i].checked) {
				choice = q[i].value;
			}
		}
		if (choice == "yes") { yes++; }
		if (choice == "no") { no++; }
	}
	switch (true) {
		case (yes < 5): otvet = "У вас плохой уровень английского. Вам предстоит многому научиться"; break;
		case ((yes >= 5) & (yes < 9)): otvet = "Вы неплохо знаете английский, но есть чему поучиться"; break;
		case (yes >= 9): otvet = "У вас хороший уровень английского"; break;
		//default: otvet = "Все очень плохо"; break;
	}
	alert(otvet);
}