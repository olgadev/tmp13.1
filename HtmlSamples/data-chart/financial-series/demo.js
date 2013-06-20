$(function () {
            var data1 = [{ "DateString": "1/2/2010", "Open": 1000, "High": 1019.75, "Low": 967.75, "Close": 995 }, { "DateString": "1/3/2010", "Open": 995, "High": 1016.75, "Low": 975, "Close": 1004 }, { "DateString": "1/4/2010", "Open": 1004, "High": 1024.75, "Low": 975, "Close": 1017 }, { "DateString": "1/5/2010", "Open": 1017, "High": 1043, "Low": 980.75, "Close": 1000 }, { "DateString": "1/6/2010", "Open": 1000, "High": 1015, "Low": 977.5, "Close": 996 }, { "DateString": "1/7/2010", "Open": 996, "High": 1018.5, "Low": 968.75, "Close": 1001 }, { "DateString": "1/8/2010", "Open": 1001, "High": 1029.75, "Low": 977.5, "Close": 978 }, { "DateString": "1/9/2010", "Open": 978, "High": 1014.25, "Low": 953, "Close": 1004 }, { "DateString": "1/10/2010", "Open": 1004, "High": 1041.25, "Low": 982.5, "Close": 1040 }, { "DateString": "1/11/2010", "Open": 1040, "High": 1062.5, "Low": 1011.75, "Close": 1022 }, { "DateString": "1/12/2010", "Open": 1022, "High": 1045.25, "Low": 1002.75, "Close": 1026 }, { "DateString": "1/13/2010", "Open": 1026, "High": 1049.5, "Low": 1009.25, "Close": 1038 }, { "DateString": "1/14/2010", "Open": 1038, "High": 1069.75, "Low": 1011.25, "Close": 1025 }, { "DateString": "1/15/2010", "Open": 1025, "High": 1043.5, "Low": 1002.75, "Close": 1005 }, { "DateString": "1/16/2010", "Open": 1005, "High": 1041, "Low": 975.75, "Close": 1015 }, { "DateString": "1/17/2010", "Open": 1015, "High": 1043.5, "Low": 973.75, "Close": 1009 }, { "DateString": "1/18/2010", "Open": 1009, "High": 1041, "Low": 993, "Close": 1014 }, { "DateString": "1/19/2010", "Open": 1014, "High": 1037.75, "Low": 990.75, "Close": 1015 }, { "DateString": "1/20/2010", "Open": 1015, "High": 1028.25, "Low": 975.25, "Close": 1012 }, { "DateString": "1/21/2010", "Open": 1012, "High": 1029.5, "Low": 979.5, "Close": 998 }, { "DateString": "1/22/2010", "Open": 998, "High": 1018.75, "Low": 973, "Close": 993 }, { "DateString": "1/23/2010", "Open": 993, "High": 1016, "Low": 962.5, "Close": 972 }, { "DateString": "1/24/2010", "Open": 972, "High": 991.5, "Low": 952.75, "Close": 989 }, { "DateString": "1/25/2010", "Open": 989, "High": 1001, "Low": 973.25, "Close": 994 }, { "DateString": "1/26/2010", "Open": 994, "High": 1035.25, "Low": 968, "Close": 971 }, { "DateString": "1/27/2010", "Open": 971, "High": 995, "Low": 944.5, "Close": 988 }, { "DateString": "1/28/2010", "Open": 988, "High": 1016, "Low": 964.75, "Close": 1006 }, { "DateString": "1/29/2010", "Open": 1006, "High": 1026.75, "Low": 973.25, "Close": 984 }, { "DateString": "1/30/2010", "Open": 984, "High": 998.75, "Low": 964, "Close": 970 }, { "DateString": "1/31/2010", "Open": 970, "High": 995, "Low": 946, "Close": 951 }, { "DateString": "2/1/2010", "Open": 951, "High": 970, "Low": 917.5, "Close": 959 }, { "DateString": "2/2/2010", "Open": 959, "High": 993, "Low": 935.5, "Close": 976 }, { "DateString": "2/3/2010", "Open": 976, "High": 1004.75, "Low": 950.5, "Close": 984 }, { "DateString": "2/4/2010", "Open": 984, "High": 1017.75, "Low": 967.25, "Close": 1009 }, { "DateString": "2/5/2010", "Open": 1009, "High": 1045.5, "Low": 988.75, "Close": 1036 }, { "DateString": "2/6/2010", "Open": 1036, "High": 1063.5, "Low": 1006.75, "Close": 1008 }, { "DateString": "2/7/2010", "Open": 1008, "High": 1038.25, "Low": 988.75, "Close": 1026 }, { "DateString": "2/8/2010", "Open": 1026, "High": 1050.5, "Low": 1001, "Close": 1046 }, { "DateString": "2/9/2010", "Open": 1046, "High": 1078.75, "Low": 1013, "Close": 1039 }, { "DateString": "2/10/2010", "Open": 1039, "High": 1081.25, "Low": 1005.75, "Close": 1032 }, { "DateString": "2/11/2010", "Open": 1032, "High": 1054.75, "Low": 1007.5, "Close": 1015 }, { "DateString": "2/12/2010", "Open": 1015, "High": 1034.25, "Low": 979, "Close": 1031 }, { "DateString": "2/13/2010", "Open": 1031, "High": 1052, "Low": 1004, "Close": 1026 }, { "DateString": "2/14/2010", "Open": 1026, "High": 1055.5, "Low": 1003, "Close": 1042 }, { "DateString": "2/15/2010", "Open": 1042, "High": 1057.75, "Low": 1021, "Close": 1049 }, { "DateString": "2/16/2010", "Open": 1049, "High": 1078.25, "Low": 1022.75, "Close": 1032 }, { "DateString": "2/17/2010", "Open": 1032, "High": 1060.5, "Low": 1001.5, "Close": 1048 }, { "DateString": "2/18/2010", "Open": 1048, "High": 1062.5, "Low": 1036, "Close": 1037 }, { "DateString": "2/19/2010", "Open": 1037, "High": 1055.75, "Low": 1013.5, "Close": 1030 }, { "DateString": "2/20/2010", "Open": 1030, "High": 1051.75, "Low": 997.75, "Close": 1041 }];
            var data2 = [{ "DateString": "1/2/2010", "Open": 1000, "High": 1029.25, "Low": 968.75, "Close": 983, "Volume": 2007.5 }, { "DateString": "1/3/2010", "Open": 983, "High": 1004.75, "Low": 949.75, "Close": 977, "Volume": 1995.75 }, { "DateString": "1/4/2010", "Open": 977, "High": 993.75, "Low": 960.25, "Close": 962, "Volume": 1973.75 }, { "DateString": "1/5/2010", "Open": 962, "High": 988.5, "Low": 940, "Close": 964, "Volume": 1976.75 }, { "DateString": "1/6/2010", "Open": 964, "High": 991.25, "Low": 944, "Close": 986, "Volume": 1982.5 }, { "DateString": "1/7/2010", "Open": 986, "High": 1008.5, "Low": 961.5, "Close": 996, "Volume": 2011.75 }, { "DateString": "1/8/2010", "Open": 996, "High": 1022.75, "Low": 966.25, "Close": 1014, "Volume": 2021.25 }, { "DateString": "1/9/2010", "Open": 1014, "High": 1033.5, "Low": 978.25, "Close": 1016, "Volume": 1991.5 }, { "DateString": "1/10/2010", "Open": 1016, "High": 1049, "Low": 983.5, "Close": 998, "Volume": 2011 }, { "DateString": "1/11/2010", "Open": 998, "High": 1025.5, "Low": 970.25, "Close": 988, "Volume": 1992.75 }, { "DateString": "1/12/2010", "Open": 988, "High": 1017.5, "Low": 957, "Close": 1008, "Volume": 1984.5 }, { "DateString": "1/13/2010", "Open": 1008, "High": 1037, "Low": 975.5, "Close": 988, "Volume": 1968.25 }, { "DateString": "1/14/2010", "Open": 988, "High": 1011.5, "Low": 961.25, "Close": 983, "Volume": 1977.25 }, { "DateString": "1/15/2010", "Open": 983, "High": 1003.75, "Low": 960.75, "Close": 967, "Volume": 1986.5 }, { "DateString": "1/16/2010", "Open": 967, "High": 1002.75, "Low": 936.75, "Close": 994, "Volume": 1984.25 }, { "DateString": "1/17/2010", "Open": 994, "High": 1009.75, "Low": 975, "Close": 1006, "Volume": 1983.25 }, { "DateString": "1/18/2010", "Open": 1006, "High": 1037, "Low": 980.25, "Close": 1018, "Volume": 1980.25 }, { "DateString": "1/19/2010", "Open": 1018, "High": 1045, "Low": 991, "Close": 1016, "Volume": 1957.75 }, { "DateString": "1/20/2010", "Open": 1016, "High": 1049.25, "Low": 981.25, "Close": 1029, "Volume": 1952 }, { "DateString": "1/21/2010", "Open": 1029, "High": 1039, "Low": 984.75, "Close": 999, "Volume": 1958.75 }, { "DateString": "1/22/2010", "Open": 999, "High": 1028.25, "Low": 968.75, "Close": 996, "Volume": 1965.75 }, { "DateString": "1/23/2010", "Open": 996, "High": 1020.75, "Low": 970, "Close": 980, "Volume": 1985 }, { "DateString": "1/24/2010", "Open": 980, "High": 1011, "Low": 949.75, "Close": 1010, "Volume": 1984.75 }, { "DateString": "1/25/2010", "Open": 1010, "High": 1025.5, "Low": 991.25, "Close": 1012, "Volume": 1978.5 }, { "DateString": "1/26/2010", "Open": 1012, "High": 1025, "Low": 972.5, "Close": 1001, "Volume": 1978.75 }, { "DateString": "1/27/2010", "Open": 1001, "High": 1014.25, "Low": 966.75, "Close": 971, "Volume": 1968.75 }, { "DateString": "1/28/2010", "Open": 971, "High": 984.5, "Low": 946, "Close": 984, "Volume": 1956.25 }, { "DateString": "1/29/2010", "Open": 984, "High": 1016.25, "Low": 964.25, "Close": 967, "Volume": 1957 }, { "DateString": "1/30/2010", "Open": 967, "High": 977.5, "Low": 948.25, "Close": 965, "Volume": 1920.75 }, { "DateString": "1/31/2010", "Open": 965, "High": 992.75, "Low": 927.25, "Close": 930, "Volume": 1904.25 }, { "DateString": "2/1/2010", "Open": 930, "High": 956, "Low": 903, "Close": 951, "Volume": 1916.75 }, { "DateString": "2/2/2010", "Open": 951, "High": 972.25, "Low": 934.5, "Close": 971, "Volume": 1912.75 }, { "DateString": "2/3/2010", "Open": 971, "High": 992.5, "Low": 950.75, "Close": 967, "Volume": 1920.5 }, { "DateString": "2/4/2010", "Open": 967, "High": 1000.25, "Low": 949.25, "Close": 950, "Volume": 1935.5 }, { "DateString": "2/5/2010", "Open": 950, "High": 968.25, "Low": 923.25, "Close": 933, "Volume": 1923.5 }, { "DateString": "2/6/2010", "Open": 933, "High": 965.75, "Low": 907, "Close": 910, "Volume": 1926.5 }, { "DateString": "2/7/2010", "Open": 910, "High": 931.75, "Low": 891, "Close": 924, "Volume": 1937.25 }, { "DateString": "2/8/2010", "Open": 924, "High": 951.25, "Low": 903.5, "Close": 915, "Volume": 1946.75 }, { "DateString": "2/9/2010", "Open": 915, "High": 944.25, "Low": 877.75, "Close": 940, "Volume": 1966 }, { "DateString": "2/10/2010", "Open": 940, "High": 959.5, "Low": 914.25, "Close": 933, "Volume": 1976.25 }, { "DateString": "2/11/2010", "Open": 933, "High": 966.5, "Low": 908.75, "Close": 909, "Volume": 1991.5 }, { "DateString": "2/12/2010", "Open": 909, "High": 930.75, "Low": 897.25, "Close": 919, "Volume": 1972.5 }, { "DateString": "2/13/2010", "Open": 919, "High": 947, "Low": 900.25, "Close": 929, "Volume": 1963.5 }, { "DateString": "2/14/2010", "Open": 929, "High": 955.25, "Low": 911.5, "Close": 933, "Volume": 1961 }, { "DateString": "2/15/2010", "Open": 933, "High": 958.5, "Low": 899.5, "Close": 939, "Volume": 1957.5 }, { "DateString": "2/16/2010", "Open": 939, "High": 970.25, "Low": 907.75, "Close": 963, "Volume": 1935.5 }, { "DateString": "2/17/2010", "Open": 963, "High": 987.25, "Low": 937.5, "Close": 959, "Volume": 1944.75 }, { "DateString": "2/18/2010", "Open": 959, "High": 975, "Low": 934.75, "Close": 970, "Volume": 1965 }, { "DateString": "2/19/2010", "Open": 970, "High": 991, "Low": 946.25, "Close": 967, "Volume": 1953.5 }, { "DateString": "2/20/2010", "Open": 967, "High": 994.5, "Low": 946, "Close": 986, "Volume": 1953.25 }]

            $("#candlestickChart").igDataChart({
                width: "500px",
                height: "500px",
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    dataSource: data1,
                    label: "Label",
                    labelVisibility: "collapsed"
                }, {
                    name: "yAxis",
                    type: "numericY",
                    labelVisibility: "collapsed"
                }],
                series: [{
                    name: "series1",
                    dataSource: data1,
                    title: "$$(Chart_lbl_priceSeries)",
                    type: "financial",
                    displayType: "candlestick",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    openMemberPath: "Open",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    closeMemberPath: "Close",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate",
                    thickness: 2,
                    trendLineBrush: "rgba(68, 172, 214, .8)",
                    trendLineThickness: 5,
                    trendLineType: "exponentialAverage",
                    negativeBrush: "rgba(198, 45, 54, .8)"
                }, {
                    name: "series2",
                    dataSource: data2,
                    title: "$$(Chart_lbl_priceSeries)",
                    type: "financial",
                    displayType: "candlestick",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    openMemberPath: "Open",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    closeMemberPath: "Close",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate",
                    thickness: 2,
                    trendLineBrush: "rgba(73, 73, 73, .8)",
                    trendLineThickness: 5,
                    trendLineType: "exponentialAverage",
                    negativeBrush: "rgba(198, 45, 54, .8)"
                }],
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate"
            });

            $("#ohlcChart").igDataChart({
                width: "500px",
                height: "500px",
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    dataSource: data1,
                    label: "Label",
                    labelVisibility: "collapsed"
                }, {
                    name: "yAxis",
                    type: "numericY",
                    labelVisibility: "collapsed"
                }],
                series: [{
                    name: "series1",
                    dataSource: data1,
                    title: "$$(Chart_lbl_priceSeries)",
                    type: "financial",
                    displayType: "ohlc",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    openMemberPath: "Open",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    closeMemberPath: "Close",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate",
                    thickness: 2,
                    trendLineBrush: "rgba(68, 172, 214, .8)",
                    trendLineThickness: 5,
                    trendLineType: "exponentialAverage",
                    negativeBrush: "rgba(198, 45, 54, .8)"
                }, {
                    name: "series2",
                    dataSource: data2,
                    title: "$$(Chart_lbl_priceSeries)",
                    type: "financial",
                    displayType: "ohlc",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    openMemberPath: "Open",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    closeMemberPath: "Close",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate",
                    thickness: 2,
                    trendLineBrush: "rgba(73, 73, 73, .8)",
                    trendLineThickness: 5,
                    trendLineType: "exponentialAverage",
                    negativeBrush: "rgba(198, 45, 54, .8)"
                }],
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate"
            });
        });