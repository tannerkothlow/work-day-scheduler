
var nineAM = "note for 9am"
var tenAM = "note for 10am"
var elevenAM = "note for 11am"
var noon = "note for noon"
var onePM = ""
var twoPM = ""
var threePM = ""
var fourPM = ""
var fivePM = ""
var sixPM = ""
var sevenPM = ""
var eightPM = ""
var ninePM = ""
var notes = [nineAM, tenAM, elevenAM, noon, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM, ninePM]
var hour = moment()

//Populates the note boxes
for (let i = 0; i < 13; i++) {
    //This starts in military time
    let time = i + 9;
    //0 past 1 present 2 future
    let state = 0;
        if (time == hour.format("HH")) {
            state = 1;
        } else if (time > hour.format("HH")) {
            state = 2;
        }
        if (time >= 13) {
            //Converts to 12h for the time variable
            time = i - 3;
            time += "PM"
        } else if (time == 12) {
            time += "PM"
        } else {
            time += "AM"
        }
    //this makes me want to vomit but OH WELL
    $(".container").append(
        '<div class="row mb-2">' +
       '<div class="input-group">' +
          '<div class="input-group-prepend">' +
            '<span class="input-group-text hour pt-1 pr-3 pb-5 pl-5 align-content-start">' + time + '</span>' +
          '</div>' +
          '<textarea class="form-control' + ' box-for-' + time + '" aria-label="' + time + '"></textarea>' +
        '</div>' +
        '<button class="px-4 saveBtn button-for-' + time + '" title="Save">💾</button>' +
        '</div>' +
      '</div>'
        );
    $(".box-for-" + time).text(notes[i]);

    if (state == 0) {
        $(".box-for-" + time).addClass("past");
    } else if (state == 1) {
        $(".box-for-" + time).addClass("present");
    } else if ( state == 2) {
        $(".box-for-" + time).addClass("future");
    }
};

//Button
$(".saveBtn").click(function() {
    console.log("Big log");
    console.log($(".box-for-10AM").val());
    //add a check that looks up what child it is 
});


