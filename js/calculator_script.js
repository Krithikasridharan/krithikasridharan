/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//loading the modules for the application
require(
        [
            "dojo/on",
            "dojo/dom",
            "dojo/dom-construct",
            "dojo/dom-style",
            "dojo/dnd/move",
            "dojo/number",
            "dojox/layout/FloatingPane",
            "dijit/form/Button",
            "dijit/form/ValidationTextBox",
            "dojo/_base/array",
            "dojo/domReady!"
        ],
        function (on, dom, domConstruct, domStyle, dndMove, number, FloatingPane, Button, ValidationTextBox, array) {

            //DnD features
            var FloatingPane = dojo.declare(dojox.layout.FloatingPane, {
                postCreate: function () {
                    this.inherited(arguments);
                    this.moveable = new dojo.dnd.move.parentConstrainedMoveable(
                            this.domNode, {
                                handle: this.focusNode,
                                area: "content",
                                within: true

                            }
                    );
                }

            });


            var calc_panel = dom.byId("calc_panel");

            var node = dom.byId('node');
            var pFloatingPane = new FloatingPane({
                title: "Dojo Simple Calculator Application ",
                resizable: true, dockable: true,
                style: "position:absolute;left:40px;width:500px;height:500px",
                id: "pFloatingPane",
            }, node);


            pFloatingPane.startup();

            //creating an array of numbers and operators for the calculator control panel icons
            var operationsButtonArray = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "+", "0", ".", "E", "-", "&#8592;", "AC", "="];

            //creating a textbox for inputting values for operation and as well as displaying the output
            var outBox = new dijit.form.ValidationTextBox(
                    {
                        name: "out",
                        required: "true",
                        propercase: "true",
                        promptMessage: "Enter operations"

                    },
            "outBox"
                    );


            //Styling the OutBox           

            domStyle.set(outBox.domNode,
                    {
                        width: "243px",
                        height: "40px",
                        margin: "0 auto 10px auto",
                        padding: "2px",
                        backgroundColor: "#CFE5FA",
                        fontSize: "1.2em"
                    }
            );


            //traversing through the array with loops for creating an icon(button) with the class btn
            array.forEach(operationsButtonArray, function (val, key) {


                if (val == 'AC' || val == '&#8592;') {

                    //new button instance are created
                    var controlBtn = new Button({
                        label: val,
                        id: val,
                        innerHTML: val,
                        class: "btn allClear"
                    });

                } else if (val == '=') {

                    var controlBtn = new Button({
                        label: val,
                        id: val,
                        innerHTML: val,
                        class: "btn eq"
                    });

                }

                else if (val == 'E')
                {
                    var controlBtn = new Button({
                        label: val,
                        id: val,
                        innerHTML: val,
                        class: "btn exp",
                        Click: "doExponent()"
                    })
                }

                else {

                    var controlBtn = new Button({
                        label: val,
                        id: val,
                        innerHTML: val,
                        class: "btn"
                    });

                }

                //appending these instances to DOM

                calc_panel.appendChild(controlBtn.domNode);

                //onClick events are assigned to each of these buttons

                on(controlBtn, "click", function () {

                    switch (this.id) {
                        case '=':
                            try {

                                var value = eval(outBox.get("value"));


                                if (value == 'Infinity') {

                                    outBox.set("value", "Error: Division by Zero");
                                    clearOutput(1500);


                                } else if (value == NaN) {

                                    outBox.set("value", "ERROR: Not a Number");
                                    clearOutput(1500);

                                } else {

                                    outBox.set("value", value);
                                }
                            }
                            catch (e) {

                                outBox.set("value", "ERROR");
                                console.log(e.toString());
                                clearOutput(2000);
                            }
                            break;

                        case 'AC':
                            outBox.set("value", "");
                            break;

                        case '.':
                            outBox.set("value", outBox.get("value") + ".");
                            break;

                        case '&#8592;':
                            var value = outBox.get("value");
                            outBox.set("value", value.replace(/.$/, ''));
                            break;


                        default:
                            outBox.set("value", outBox.get("value") + this.id);
                    }

                });
                
         
            });


            function clearOutput(t) {


                var time = t || 1000;
                setTimeout(function () {
                    outBox.set("value", "");
                }, time);
            }

            function doExponent() {

                {
                    if (Current.indexOf("e") == -1)
                    {
                        Current = Current + "e0";
                        outBox.set("value", "Current")
                    };
                }


            }

        });