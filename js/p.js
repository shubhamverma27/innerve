/**
 *  @fileoverview Pearson correlation score algorithm.
 *  @author matt.west@kojilabs.com (Matt West)
 *  @license Copyright 2013 Matt West.
 *  Licensed under MIT (http://opensource.org/licenses/MIT).
 */


/**
 *  Calculate the person correlation score between two items in a dataset.
 *
 *  @param  {object}  prefs The dataset containing data about both items that
 *                    are being compared.
 *  @param  {string}  p1 Item one for comparison.
 *  @param  {string}  p2 Item two for comparison.
 *  @return {float}  The pearson correlation score.
 */
function pearsonCorrelation(prefs, p1, p2) {
  var si = [];

  for (var key in prefs[p1]) {
    if (prefs[p2][key]) si.push(key);
  }

  var n = si.length;

  if (n == 0) return 0;

  var sum1 = 0;
  for (var i = 0; i < si.length; i++) sum1 += prefs[p1][si[i]];

  var sum2 = 0;
  for (var i = 0; i < si.length; i++) sum2 += prefs[p2][si[i]];

  var sum1Sq = 0;
  for (var i = 0; i < si.length; i++) {
    sum1Sq += Math.pow(prefs[p1][si[i]], 2);
  }

  var sum2Sq = 0;
  for (var i = 0; i < si.length; i++) {
    sum2Sq += Math.pow(prefs[p2][si[i]], 2);
  }

  var pSum = 0;
  for (var i = 0; i < si.length; i++) {
    pSum += prefs[p1][si[i]] * prefs[p2][si[i]];
  }

  var num = pSum - (sum1 * sum2 / n);
  var den = Math.sqrt((sum1Sq - Math.pow(sum1, 2) / n) *
      (sum2Sq - Math.pow(sum2, 2) / n));

  if (den == 0) return 0;

  return num / den;
}









           var x=0;
        var y=0;
            var z=0;
            var time;
            var res=0;
          
  var dataString = "";
                var dataString2 = "";
                var dataString3 = "";
  var arr=[];
  var i=0;
  var xyarr=[];
  var yzarr=[];
  var zxarr=[];



  var stop=setInterval(function(){
  $.ajax({
      'async': false,
        type: "GET",
        url: "http://192.168.122.191/graph.php",
        data: dataString,
                cache: false,
        success: function(data) {
                 res=JSON.parse(data);
                  x=res.a;y=res.b;z=res.c;time=res.d;
                  arr[i]=i+1;
              //code for graph pearson


              var a = x.split(',');
              var a1 = a.map(Number);
              //console.log(a1);

              var b = y.split(',');
              var b1 = b.map(Number);
              //console.log(b1);
              var c = z.split(',');
              var c1 = c.map(Number);
              //console.log(c1);
            //  console.log(time);

              var xy = new Array(
                                  a1,
                                  b1
                      );
              var yz = new Array(
                                  b1,
                                  c1
                      );
              var zx = new Array(
                                  c1,
                                  a1
                      );
    //  console.log(pearsonCorrelation(xy,0,1));
    //          console.log(pearsonCorrelation(yz,0,1));
      //        console.log(pearsonCorrelation(zx,0,1));
              xyarr[i]=pearsonCorrelation(xy,0,1);
              yzarr[i]=pearsonCorrelation(yz,0,1);
              zxarr[i]=pearsonCorrelation(zx,0,1);
              i++;
                  //end

                    if(i%5==0)
                    {

                    

                         var layout = {
                  
                    paper_bgcolor: 'rgba(245,246,249,0)',
                    plot_bgcolor: 'rgba(245,246,249,0.4)',

                    showlegend: false,
                    annotations: [],
                    xaxis: {
                      title: 'Time'
                    },
                    yaxis: {
                      title: 'Pearson-Correlation'
                    }
                  };

                         console.log(xyarr);
                    var trace1 = {
                      x: arr, 
                      y: xyarr, 
                      type: 'scatter',
                      line: {
                        color: 'rgb(219, 64, 82)',
                        width: 3
                      }
                      

                    };
                    var data = [trace1];
                    Plotly.newPlot('myDiv', data,layout);
                    var trace2 = {
                      x: arr, 
                      y: yzarr, 
                      type: 'scatter',
                      line: {
                        color: 'rgb(219, 64, 82)',
                        width: 3
                      }
                    };
                    var data2 = [trace2];
                    Plotly.newPlot('myDiv2', data2,layout);
                    var trace3 = {
                      x: arr, 
                      y: zxarr, 
                      type: 'scatter',
                      line: {
                        color: 'rgb(219, 64, 82)',
                        width: 3
                      }
                    };
                    var data3 = [trace3];
                    Plotly.newPlot('myDiv3', data3,layout);
                   }



                },
        error: function(data)
        {
          alert("No data");
        }   
    });

},1000);

//console.log(arr);
//console.log(xyarr);

        
