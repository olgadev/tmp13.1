$(function () {
            $("#radialgauge").igRadialGauge({
                height: "400px",
                width: "400px",
                interval: 2,
                labelInterval: 1,
                value: 0,
                centerX: 0.5,
                centerY: 0.5,
                minimumValue: 0,
                maximumValue: 10,
                backingStrokeThickness: 1,
                scaleStartAngle: 120,
                scaleEndAngle: 60,
                scaleStartExtent: 0.70,
                scaleEndExtent: 0.79,
                scaleOversweep: 0,
                tickStartExtent: 0.62,
                tickEndExtent: 0.69,
                minorTickStartExtent: 0.65,
                minorTickEndExtent: 0.69,
                labelExtent: 0.75,
                fontBrush: "white",
                needleShape: "rectangle",
                needleStartExtent: -0.2,
                needleEndExtent: 0.7,
                needlePivotShape: "circleWithHole",
                transitionDuration: 0,
                scaleSweepDirection: "clockwise"
            });

            var isDragging = false;
            // Start the needle drag only on a mousedown on the needle
            document.getElementById("radialgauge").addEventListener("mousedown", function (e) {
                isDragging = true;
            });

            // Drag the needle to the new point only if the point being dragged to is inside the needle
            document.getElementById("radialgauge").addEventListener("mousemove", function (e) {
                dragNeedle(e);
            });

            // Drag the needle to the final new point only if the point being dragged to is inside the needle
            document.getElementById("radialgauge").addEventListener("mouseup", function (e) {
                dragNeedle(e);
                isDragging = false;
            });

            // Function that performs the needle drag to the new point
            function dragNeedle(e) {
                var minimumValue = $("#radialgauge").igRadialGauge("option", "minimumValue");
                var maximumValue = $("#radialgauge").igRadialGauge("option", "maximumValue");

                var startValue = minimumValue <= maximumValue ? minimumValue : maximumValue;
                var endValue = minimumValue > maximumValue ? minimumValue : maximumValue;

                var pointX = e.pageX - $("#radialgauge").offset().left;
                var pointY = e.pageY - $("#radialgauge").offset().top;
                var value = $("#radialgauge").igRadialGauge("getValueForPoint", pointX, pointY);

                var isClickPointValid = true;
                if (!isMobile())
                    isClickPointValid = $("#radialgauge").igRadialGauge("needleContainsPoint", pointX, pointY);

                if (value >= startValue && value <= endValue && isDragging.toString() == "true"
                    && value && !isNaN(value) && isClickPointValid.toString() == "true")
                    $("#radialgauge").igRadialGauge("option", "value", value);
            }

            // Check if the sample is being used in the following mobile devices
            function isMobile() {
                return navigator.userAgent.match(/Android/i) ||
						navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
						navigator.userAgent.match(/IEMobile/i) ||
						navigator.userAgent.match(/BlackBerry/i) ||
						navigator.userAgent.match(/Opera Mini/i) ||
						navigator.userAgent.match(/webOS/i) ||
						navigator.userAgent.match(/Windows Phone/i) ||
						navigator.userAgent.match(/ZuneWP7/i) ? true : false;
            }
        });