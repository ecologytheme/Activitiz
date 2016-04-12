/*
 * Smart Demo Switcher v2.0
 * http://www.smartplugins.info/plugin/javascript/smart-demo-switcher//
 * 
 * Copyright 2008 - 2014 Milan Petrovic (email: milan@gdragon.info)
 *
 * http://www.dev4press.com
 * http://www.millan.rs
 *
 */

var smartDemoSwitcherObj;

;(function ($, window, document, undefined) {
    smartDemoSwitcher.Loader = smartDemoSwitcher.Load.extend({
        display: {
            
        },
        cookies: {
            
        },
        stylesheets: {
            main: {
                type: 'box',
                boxFactor: .7,
                boxShape: "sqaure",
                columns: 4,
                selector: "#main-style",
                default: "styles/red.css",
                title: true,
                titleContent: "<h5>Color &nbsp; Scheme :</h5><br />",
                list: [
                    {file: "styles/red.css", name: "Red", colors: ["#f62459"]},
                    {file: "styles/blue.css", name: "Blue", colors: ["#2980b9"]},
                    {file: "styles/green.css", name: "Green", colors: ["#27ae60"]},
                    {file: "styles/yellow.css", name: "Yellow", colors: ["#e5c41a"]},
                    {file: "styles/purple.css", name: "Purple", colors: ["#8e44ad"]},
                    {file: "styles/orange.css", name: "Orange", colors: ["#f39c12"]},
                    {file: "styles/slate.css", name: "Slate", colors: ["#6b798f"]},
                    {file: "styles/megenda.css", name: "Megenda", colors: ["#f50079"]}

                ],
                onSwitch: null
            }
        },
        variants: {
            textcolor: {
                type: 'box',
                boxFactor: 1,
                title: true,
                titleContent: "<span>NOTE: Pre Defined Colors. You can change colors very easily</span>",
                columns: 0,
                selector: "",
                default: "",
                list: [
                ],
                onSwitch: null
            },
            linkcolor: {
                type: 'box',
                boxFactor: 1,
                title: true,
                titleContent: "<br /><h5>Template &nbsp; Layout :</h5><a href='' class='tl' >Parallax Background</a><a href='' class='tl' >Color Background</a><a href='' class='tl' >SignUp Form</a><a href='' class='tl' >MailChimp Form</a><br />",
                columns: 0,
                selector: "",
                default: "",
                list: [
                ],
                onSwitch: null
            }
        }
    });

    $(document).ready(function() {
        smartDemoSwitcherObj = new smartDemoSwitcher.Core();
    });
})(jQuery, window, document);
