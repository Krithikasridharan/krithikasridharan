<%-- 
    Document   : index
    Created on : Apr 23, 2016, 7:19:57 PM
    Author     : krithikasridharan
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!DOCTYPE>
<html>
    <head>

        <title>Dojo Simple Calculator Application</title>
        
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dojox/layout/resources/ResizeHandle.css" />
        <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dijit/themes/tundra/tundra.css" >
        
        <script src="//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dojo/dojo.js"
        data-dojo-config="async: true"></script>


    </head>
    <body class="tundra">		
        <div class="container">

            <div id="node">
                        <div id="resizeHandle" data-dojo-type="dojox.layout.ResizeHandle" data-dojo-props="targetId:'node'"></div>

                <div id="calc">
                    
                    <input id="outBox"/>

                    <div id="calc_panel">
                        
                    </div>
                </div>
            </div>
            <a class ="test" href="QUnit/calculator_qunit_test.jsp">Calculator Unit tests</a>
        </div>

        <script>
            dojoConfig = {parseOnLoad: true}
        </script>
        <script src="js/calculator_script.js"></script>
        
    </body>
    
    
</html>