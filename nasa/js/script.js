// Definisemo lokaciju naseg API fajla
var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=LyFH4vv3eWd56GwdHBpJdFxvIObrwkvgeivXIdaG";

// jQuery ajax poziv kako bi preuzeli podatke

$.ajax({
  url: url,
  success: function(result){

    x = result.photos;
    var output = "";
    for (i=0; i<x.length; i++) {

        image = x[i].img_src;
        id = x[i].id;
        earth_date = x[i].earth_date;
        sol = x[i].sol;
        rover_name = x[i].rover['name'];

        output += `<div class="col-md-6 data-holder">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="`+image+`" class="img-responsive" alt="">
                                </div>
                                <div class="col-md-6">
                                <h5>Image ID: `+id+`</h5>
                                <h5>SOL: `+sol+`</h5>
                                <h5>Earth Date: `+earth_date+`</h5>
                                <h5>Rover name: `+rover_name+`</h5>                           
                            </div>
                        </div>
                    </div>`;

    }

    $('.items').append(output);

}
});
