$(function () {
            
            $("#radialgauge").igRadialGauge({
                width: "500px",
                height: "500px",
                backingBrush: "#FFFFFF",
                backingOutline: "#FFFFFF",
                scaleBrush: "#333333",
                fontBrush: "#000000",
                transitionDuration: 2000,
                minimumValue: 0,
                maximumValue: 10,
                value: 1,
                ranges: [{
                    name: "range1",
                    startValue: 0,
                    endValue: 3,
                    outerStartExtent: .6,
                    outerEndExtent: .66,
                    brush: "#A4bA29 "
                }, {
                    name: "range2",
                    startValue: 3,
                    endValue: 7,
                    outerStartExtent: .66,
                    outerEndExtent: .72,
                    brush: "#FDBD48 "
                }, {
                    name: "range3",
                    startValue: 7,
                    endValue: 10,
                    outerStartExtent: .72,
                    outerEndExtent: .78,
                    brush: "#D3404B "
                }]
            });
            $("#gaugeSettings").change(function (e) {
                var setting = $(this).val();
                if (setting == "setting1")
                    setting1();
                else if (setting == "setting2")
                    setting2();
                else if (setting == "setting3")
                    setting3();
            });

           function setting1 () {
                    $("#radialgauge").igRadialGauge({
                        formatLabel: null,
                        alignLabel: null,
                        transitionDuration: 2000,
                        minimumValue: 0,
                        maximumValue: 10,
                        labelInterval: NaN,
                        needleEndExtent: NaN,
                        scaleStartAngle: 135,
                        scaleEndAngle: 45,
                        scaleEndExtent: .57,
                        needleBrush: null,
                        needleOutline: null,
                        backingBrush: "#FFFFFF",
                        scaleBrush: "#333",
                        tickBrush: null,
                        minorTickBrush: null,
                        backingOutline: "#FFFFFF",
                        needlePivotShape: "circleOverlay",
                        needleShape: "needle",
                        needlePivotWidthRatio: .2,
                        fontBrush: "black",
                        value: 1
                    });

                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", remove: true }]);
                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range2", remove: true }]);
                    $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range3", remove: true }]);

                    $("#radialgauge").igRadialGauge("option", "ranges", [{
                        name: "range1",
                        startValue: 0,
                        endValue: 3,
                        outerStartExtent: .6,
                        outerEndExtent: .66,
                        brush: "#A4bA29 "
                    }, {
                        name: "range2",
                        startValue: 3,
                        endValue: 7,
                        outerStartExtent: .66,
                        outerEndExtent: .72,
                        brush: "#FDBD48 "
                    }, {
                        name: "range3",
                        startValue: 7,
                        endValue: 10,
                        outerStartExtent: .72,
                        outerEndExtent: .78,
                        brush: "#D3404B "
                    }]);
            }
           
           function setting2 () {
                $("#radialgauge").igRadialGauge({
                    formatLabel: null,
                    alignLabel: null,
                    needleShape: "needleWithBulb",
                    needlePivotShape: "circleWithHole",
                    backingBrush: "#ecedef",
                    scaleBrush: "#44ACD6",
                    scaleEndExtent: .8,
                    tickBrush: "white",
                    minorTickBrush: "white",
                    needlePivotWidthRatio: .2,
                    fontBrush: "white",
                    value: 8,
                    scaleStartAngle: 180,
                    scaleEndAngle: 0,
                    minimumValue: 0,
                    maximumValue: 10,
                    labelInterval: NaN,
                    needleEndExtent: .78,
                    needleBrush: "#494949",
                    needleOutline: "#333333"
                });

                $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", remove: true }]);
                $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range2", remove: true }]);
                $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range3", remove: true }]);

                $("#radialgauge").igRadialGauge("option", "ranges", [{
                    name: "range1",
                    startValue: 0,
                    endValue: 5,
                    outerStartExtent: .7,
                    outerEndExtent: .7,
                    brush: "#A4bA29"
                }, {
                    name: "range2",
                    startValue: 5,
                    endValue: 9,
                    outerStartExtent: .7,
                    outerEndExtent: .7,
                    brush: "#FDBD48"
                }, {
                    name: "range3",
                    startValue: 9,
                    endValue: 10,
                    outerStartExtent: .7,
                    outerEndExtent: .7,
                    brush: "#D3404B"
                }]);
            }
            
           function setting3 () {
                $("#radialgauge").igRadialGauge({
                    needleBrush: "rgba(40,40,40, 1)",
                    needleOutline: "rgba(40,40,40, 1)",
                    tickBrush: "transparent",
                    scaleBrush: "transparent",
                    backingBrush: "transparent",
                    backingOutline: "transparent",
                    minimumValue: 0.00,
                    maximumValue: 5.00,
                    value: 2.30,
                    scaleStartAngle: 200,
                    scaleEndAngle: -20,

                    needleEndExtent: 1,
                    needleShape: "triangle",
                    needlePivotShape: "circle",
                    needlePivotWidthRatio: .1,
                    minorTickBrush: "transparent",
                    labelInterval: 5,
                    formatLabel: function (ui, args) {
                        args.label = args.value.toFixed(2);
                    },
                    alignLabel: function (ui, args) {
                        args.offsetY = 10;
                    },
                    fontBrush: "black"
                });

                $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range1", remove: true }]);
                $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range2", remove: true }]);
                $("#radialgauge").igRadialGauge("option", "ranges", [{ name: "range3", remove: true }]);

                $("#radialgauge").igRadialGauge("option", "ranges", [{
                    name: "range1",
                    startValue: 0,
                    endValue: 2.3,
                    outerStartExtent: 1,
                    outerEndExtent: 1,
                    innerStartExtent: .3,
                    innerEndExtent: .3,
                    brush: "rgba(240,71,64, 1)"
                }, {
                    name: "range2",
                    startValue: 2.30,
                    endValue: 5,
                    outerStartExtent: 1,
                    outerEndExtent: 1,
                    innerStartExtent: .3,
                    innerEndExtent: .3,
                    brush: "rgba(224,224,224, 1)"
                }]);
            }
        });