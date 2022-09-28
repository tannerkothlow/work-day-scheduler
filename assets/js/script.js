
var nineAM = ""
var tenAM = ""
var elevenAM = ""
var noon = ""
var onePM = ""
var twoPM = ""
var threePM = ""
var fourPM = ""
var fivePM = ""
var sixPM = ""
var sevenPM = ""
var eightPM = ""
var ninePM = ""
//^This could probably just be an array. But it looks nicer like this.
var notes = [nineAM, tenAM, elevenAM, noon, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM, ninePM]
var marker = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM"]
var storedNotes = JSON.parse(localStorage.getItem("stored-notes"));
//First time users will not have a stored-notes file
    if (storedNotes != null) {
        notes = storedNotes;
    };
var hour = moment()
$("#currentDay").text("Today is " + hour.format("MMM Do, YYYY"));

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
//Was used to create 9AM-9PM before "marker" array was added.

        // if (time >= 13) {
        //     //Converts to 12h for the time variable
        //     time = i - 3;
        //     time += "PM"
        // } else if (time == 12) {
        //     time += "PM"
        // } else {
        //     time += "AM"
        // }

//Can probably be replaced with $(".container").add("div").addClass("row"); etc etc.
//marker[i] was formerly time, changed to make look up and save easier
    $(".container").append(
        '<div class="row">' +
       '<div class="input-group">' +
          '<div class="input-group-prepend">' +
            '<span class="input-group-text hour pl-5 align-items-start">' + marker[i] + '</span>' +
          '</div>' +
          '<textarea class="form-control' + ' box-for-' + marker[i] + '" aria-label="' + marker[i] + '"></textarea>' +
        '</div>' +
        '<button class="px-5 saveBtn button-for-' + marker[i] + '" title="Save">💾</button>' +
        '</div>' +
      '</div>'
        );
//Looks up the notes and adds them.
    $(".box-for-" + marker[i]).text(notes[i]);
//Adds class depending on state set by moment(), 
    if (state == 0) {
        $(".box-for-" + marker[i]).addClass("past");
    } else if (state == 1) {
        $(".box-for-" + marker[i]).addClass("present");
    } else if ( state == 2) {
        $(".box-for-" + marker[i]).addClass("future");
    }
};

//Save button that ONLY saves its respective text entry box
//Maybe add a message box that fades in to say which box was saved
$(".saveBtn").click(function() {
    console.log(this.className);
    for (let i = 0; i < marker.length; i++) {
        if (this.className.includes("button-for-" + marker[i])) {
            console.log("you pressed the button for " + marker[i]);
            console.log(notes[i]);
            notes[i] = $(".box-for-" + marker[i]).val();
            console.log(notes[i]);

            localStorage.setItem("stored-notes", JSON.stringify(notes));
        };
    };
});


