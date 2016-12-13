sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.projetos.desafio.controller.App", {

		unidades: {
			0: "",
			1: "I",
			2: "II",
			3: "III",
			4: "IV",
			5: "V",
			6: "VI",
			7: "VII",
			8: "VIII",
			9: "IX"
		},

		dezenas: {
			0: "",
			1: "X",
			2: "XX",
			3: "XXX",
			4: "XL",
			5: "L",
			6: "LX",
			7: "LXX",
			8: "LXXX",
			9: "XC"
		},

		centenas: {
			0: "",
			1: "C",
			2: "CC",
			3: "CCC",
			4: "CD",
			5: "D",
			6: "DC",
			7: "DCC",
			8: "DCCC",
			9: "CM"
		},

		milhares: {
			0: "",
			1: "M",
			2: "MM",
			3: "MMM",
			4: "MMMM",
			5: "MMMMM"
		},

		converteRomano: function(oValue) {

			var oChar = [],
				numAlg = oValue.length,
				retorno = "";

			switch (numAlg) {
				case 1:
					oChar.push(oValue.substr(0, 1));
					retorno = this.unidades[oChar[0]];
					break;
				case 2:
					oChar.push(oValue.substr(0, 1));
					oChar.push(oValue.substr(1, 1));
					retorno = this.dezenas[oChar[0]] + this.unidades[oChar[1]];
					break;
				case 3:
					oChar.push(oValue.substr(0, 1));
					oChar.push(oValue.substr(1, 1));
					oChar.push(oValue.substr(2, 1));
					retorno = this.centenas[oChar[0]] + this.dezenas[oChar[1]] + this.unidades[oChar[2]];
					break;
				case 4:
					oChar.push(oValue.substr(0, 1));
					oChar.push(oValue.substr(1, 1));
					oChar.push(oValue.substr(2, 1));
					oChar.push(oValue.substr(3, 1));
					retorno = this.milhares[oChar[0]] + this.centenas[oChar[1]] + this.dezenas[oChar[2]] + this.unidades[oChar[3]];
					break;
				default:
			}

			oChar = [];
			return retorno;

		},

		converteArabico: function(oValue) {

			var oChar = [],
				retorno = 0;

			for (var i = 0; i < oValue.length; i++) {
				switch (oValue.substr(i, 1)) {
					case "M":
						retorno += 1000;
						break;
					case "D":
						retorno += 500;
						break;
					case "C":
						if (oValue.substr(i + 1, 1) === "D" || oValue.substr(i + 1, 1) === "M") {
							retorno -= 100;
						} else {
							retorno += 100;
						}
						break;
					case "L":
						retorno += 50;
						break;
					case "X":
						if (oValue.substr(i + 1, 1) === "L" || oValue.substr(i + 1, 1) === "C") {
							retorno -= 10;
						} else {
							retorno += 10;
						}
						break;
					case "V":
						retorno += 5;
						break;
					case "I":
						if (oValue.substr(i + 1, 1) === "V" || oValue.substr(i + 1, 1) === "X") {
							retorno -= 1;
						} else {
							retorno += 1;
						}
						break;
					default:
				}
			}
			
			return retorno;

		},

		onConvert: function(oEvent) {

			var oValue = oEvent.getParameter("value");

			/* @type sap.m.Text */
			var resultado = this.byId("resultado");

			/* @type sap.m.ComboBox */
			var combo = this.byId("combo");
			
			/* @type sap.m.Input */
			var input = this.byId("input");

			var key = combo.getSelectedKey();

			switch (key) {
				case "1":
					var retorno = this.converteRomano(oValue);
					resultado.setText(retorno);
					input.setMaxLength(4);
					break;
				case "2":
					var retorno = this.converteArabico(oValue);
					resultado.setText(retorno);
					input.setMaxLength(0);
					break;
				default:
					resultado.setText("Insira a conversão desejada");
			}

		},

		onChange: function(oEvent) {

			/* @type sap.m.Text */
			var resultado = this.byId("resultado");

			if (resultado.getText() === "Insira a conversão desejada") {
				resultado.setText("Insira o algorismo");
			}

		}

	});
});