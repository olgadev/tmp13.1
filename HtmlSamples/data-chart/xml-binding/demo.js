$(function () {
                        
            //Sample XML Data
            var xmlDoc = '<DailyPrice>' +
                '<Day Date="1/1/2010" Open="1000" High="1019.75" Low="967.75" Close="995" />' +
                '<Day Date="1/2/2010" Open="995" High="1016.75" Low="975" Close="1004" />' +
                '<Day Date="1/3/2010" Open="925.5" High="1000.25" Low="912.75" Close="999.25" />' +
                '<Day Date="1/4/2010" Open="940.25" High="1040.25" Low="920.75" Close="975.25" />' +
                '<Day Date="1/5/2010" Open="1020.5" High="1060.25" Low="999.75" Close="1050.25" />' +
            '</DailyPrice>';

            //Binding to XML requires a schema to define data fields
            var xmlSchema = new $.ig.DataSchema("xml",
                { 
                    //searchField serves as the base node(s) for the XPaths
                    searchField: "//Day", 
                    fields: [
                        { name: "Date", xpath: "./@Date", type: "date" },
                        { name: "Open", xpath: "./@Open" },
                        { name: "Close", xpath: "./@Close" },
                        { name: "High", xpath: "./@High" },
                        { name: "Low", xpath: "./@Low" },
                    ]
                }
            );

            //This creates an Infragistics datasource from the XML 
            //and the Schema which can be consumed by the grid.
            var ds = new $.ig.DataSource({
                type: "xml",
                dataSource: xmlDoc,
                schema: xmlSchema 
            });
            ds.dataBind();

            $("#chart").igDataChart({
                width: "700px",
                height: "400px",
                axes: [
                    {
                        name: "xAxis",
                        type: "categoryDateTimeX",
                        dateTimeMemberPath: "Date",
                        dataSource: ds, //$.ig.DataSource defined above
                        label: "Date",
                        labelVisibility: "collapsed"
                    },
                    {
                        name: "yAxis",
                        type: "numericY",
                        labelVisibility: "visible"
                    }
                ],
                series: [
                    {
                        name: "series",
                        dataSource: ds, //$.ig.DataSource defined above
                        title: "Price Series",
                        type: "financial",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        openMemberPath: "Open",
                        highMemberPath: "High",
                        lowMemberPath: "Low",
                        closeMemberPath: "Close",
                        trendLineBrush: "rgba(68, 172, 214, .8)",
                        trendLineType: "exponentialAverage"
                    }
                ]
            });

        });