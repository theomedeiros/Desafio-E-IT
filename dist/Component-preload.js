/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "com/projetos/desafio/Component-preload",
	"modules": {
		"com/projetos/desafio/controller/App.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\"\n], function(Controller) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"com.projetos.desafio.controller.App\", {\n\n\t\tunidades: {\n\t\t\t0: \"\",\n\t\t\t1: \"I\",\n\t\t\t2: \"II\",\n\t\t\t3: \"III\",\n\t\t\t4: \"IV\",\n\t\t\t5: \"V\",\n\t\t\t6: \"VI\",\n\t\t\t7: \"VII\",\n\t\t\t8: \"VIII\",\n\t\t\t9: \"IX\"\n\t\t},\n\n\t\tdezenas: {\n\t\t\t0: \"\",\n\t\t\t1: \"X\",\n\t\t\t2: \"XX\",\n\t\t\t3: \"XXX\",\n\t\t\t4: \"XL\",\n\t\t\t5: \"L\",\n\t\t\t6: \"LX\",\n\t\t\t7: \"LXX\",\n\t\t\t8: \"LXXX\",\n\t\t\t9: \"XC\"\n\t\t},\n\n\t\tcentenas: {\n\t\t\t0: \"\",\n\t\t\t1: \"C\",\n\t\t\t2: \"CC\",\n\t\t\t3: \"CCC\",\n\t\t\t4: \"CD\",\n\t\t\t5: \"D\",\n\t\t\t6: \"DC\",\n\t\t\t7: \"DCC\",\n\t\t\t8: \"DCCC\",\n\t\t\t9: \"CM\"\n\t\t},\n\n\t\tmilhares: {\n\t\t\t0: \"\",\n\t\t\t1: \"M\",\n\t\t\t2: \"MM\",\n\t\t\t3: \"MMM\",\n\t\t\t4: \"MMMM\",\n\t\t\t5: \"MMMMM\"\n\t\t},\n\n\t\tconverteRomano: function(oValue) {\n\n\t\t\tvar oChar = [],\n\t\t\t\tnumAlg = oValue.length,\n\t\t\t\tretorno = \"\";\n\n\t\t\tswitch (numAlg) {\n\t\t\t\tcase 1:\n\t\t\t\t\toChar.push(oValue.substr(0, 1));\n\t\t\t\t\tretorno = this.unidades[oChar[0]];\n\t\t\t\t\tbreak;\n\t\t\t\tcase 2:\n\t\t\t\t\toChar.push(oValue.substr(0, 1));\n\t\t\t\t\toChar.push(oValue.substr(1, 1));\n\t\t\t\t\tretorno = this.dezenas[oChar[0]] + this.unidades[oChar[1]];\n\t\t\t\t\tbreak;\n\t\t\t\tcase 3:\n\t\t\t\t\toChar.push(oValue.substr(0, 1));\n\t\t\t\t\toChar.push(oValue.substr(1, 1));\n\t\t\t\t\toChar.push(oValue.substr(2, 1));\n\t\t\t\t\tretorno = this.centenas[oChar[0]] + this.dezenas[oChar[1]] + this.unidades[oChar[2]];\n\t\t\t\t\tbreak;\n\t\t\t\tcase 4:\n\t\t\t\t\toChar.push(oValue.substr(0, 1));\n\t\t\t\t\toChar.push(oValue.substr(1, 1));\n\t\t\t\t\toChar.push(oValue.substr(2, 1));\n\t\t\t\t\toChar.push(oValue.substr(3, 1));\n\t\t\t\t\tretorno = this.milhares[oChar[0]] + this.centenas[oChar[1]] + this.dezenas[oChar[2]] + this.unidades[oChar[3]];\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t}\n\n\t\t\toChar = [];\n\t\t\treturn retorno;\n\n\t\t},\n\n\t\tconverteArabico: function(oValue) {\n\n\t\t\tvar oChar = [],\n\t\t\t\tretorno = 0;\n\n\t\t\tfor (var i = 0; i < oValue.length; i++) {\n\t\t\t\tswitch (oValue.substr(i, 1)) {\n\t\t\t\t\tcase \"M\":\n\t\t\t\t\t\tretorno += 1000;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase \"D\":\n\t\t\t\t\t\tretorno += 500;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase \"C\":\n\t\t\t\t\t\tif (oValue.substr(i + 1, 1) === \"D\" || oValue.substr(i + 1, 1) === \"M\") {\n\t\t\t\t\t\t\tretorno -= 100;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tretorno += 100;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase \"L\":\n\t\t\t\t\t\tretorno += 50;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase \"X\":\n\t\t\t\t\t\tif (oValue.substr(i + 1, 1) === \"L\" || oValue.substr(i + 1, 1) === \"C\") {\n\t\t\t\t\t\t\tretorno -= 10;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tretorno += 10;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase \"V\":\n\t\t\t\t\t\tretorno += 5;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase \"I\":\n\t\t\t\t\t\tif (oValue.substr(i + 1, 1) === \"V\" || oValue.substr(i + 1, 1) === \"X\") {\n\t\t\t\t\t\t\tretorno -= 1;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tretorno += 1;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tdefault:\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\treturn retorno;\n\n\t\t},\n\n\t\tonConvert: function(oEvent) {\n\n\t\t\tvar oValue = oEvent.getParameter(\"value\");\n\n\t\t\t/* @type sap.m.Text */\n\t\t\tvar resultado = this.byId(\"resultado\");\n\n\t\t\t/* @type sap.m.ComboBox */\n\t\t\tvar combo = this.byId(\"combo\");\n\t\t\t\n\t\t\t/* @type sap.m.Input */\n\t\t\tvar input = this.byId(\"input\");\n\n\t\t\tvar key = combo.getSelectedKey();\n\n\t\t\tswitch (key) {\n\t\t\t\tcase \"1\":\n\t\t\t\t\tvar retorno = this.converteRomano(oValue);\n\t\t\t\t\tresultado.setText(retorno);\n\t\t\t\t\tinput.setMaxLength(4);\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"2\":\n\t\t\t\t\tvar retorno = this.converteArabico(oValue);\n\t\t\t\t\tresultado.setText(retorno);\n\t\t\t\t\tinput.setMaxLength(0);\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t\t\tresultado.setText(\"Insira a conversão desejada\");\n\t\t\t}\n\n\t\t},\n\n\t\tonChange: function(oEvent) {\n\n\t\t\t/* @type sap.m.Text */\n\t\t\tvar resultado = this.byId(\"resultado\");\n\n\t\t\tif (resultado.getText() === \"Insira a conversão desejada\") {\n\t\t\t\tresultado.setText(\"Insira o algorismo\");\n\t\t\t}\n\n\t\t}\n\n\t});\n});",
		"com/projetos/desafio/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"com/projetos/desafio/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"com.projetos.desafio.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t}\n\t});\n});",
		"com/projetos/desafio/view/App.view.xml": "<mvc:View \n\tcontrollerName=\"com.projetos.desafio.controller.App\"\n\txmlns:html=\"http://www.w3.org/1999/xhtml\" \n\txmlns:mvc=\"sap.ui.core.mvc\"\n\txmlns:core=\"sap.ui.core\"\n\tdisplayBlock=\"true\" \n\txmlns=\"sap.m\"\n\t>\n\t<App>\n\t\t<pages>\n\t\t\t<Page title=\"{i18n>title}\">\n\t\t\t\t<content>\n\t\t\t\t\t<VBox\n\t\t\t\t\t\tjustifyContent=\"Center\"\n\t\t\t\t\t\talignItems=\"Center\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<ComboBox\n\t\t\t\t\t\t\t\tid=\"combo\"\n\t\t\t\t\t\t\t\tplaceholder=\"Converter para\"\n\t\t\t\t\t\t\t\tselectionChange=\"onChange\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t\t\t<core:ListItem\n\t\t\t\t\t\t\t\t\t\ttext=\"Romano\"\n\t\t\t\t\t\t\t\t\t\tkey=\"1\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<core:ListItem\n\t\t\t\t\t\t\t\t\t\ttext=\"Arábico\"\n\t\t\t\t\t\t\t\t\t\tkey=\"2\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</items>\n\t\t\t\t\t\t\t</ComboBox>\n\t\t\t\t\t\t\t<Input\n\t\t\t\t\t\t\t\tid=\"input\"\n\t\t\t\t\t\t\t\tplaceholder=\"Insira o algorismo\"\n\t\t\t\t\t\t\t\tliveChange=\"onConvert\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<Text\n\t\t\t\t\t\t\t\tid=\"resultado\"\n\t\t\t\t\t\t\t\ttext=\"Insira a conversão desejada\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</items>\n\t\t\t\t\t</VBox>\n\t\t\t\t</content>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>",
		"com/projetos/desafio/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n});"
	}
});