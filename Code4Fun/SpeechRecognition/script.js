if ("webkitSpeechRecognition" in window) {
    // Initialize webkitSpeechRecognition
    let speechRecognition = new webkitSpeechRecognition();

    // String for the Final Transcript
    let final_transcript = "";

    // Set the properties for the Speech Recognition object
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;


    // Callback Function for the onStart Event
    speechRecognition.onstart = () => {
        // Show the Status Element
        $("#status").css("display", "block");
    };
    speechRecognition.onerror = () => {
        // Hide the Status Element
        $("#status").css("display", "none");
    };
    speechRecognition.onend = () => {
        // Hide the Status Element
        $("#status").css("display", "none");
    };

    speechRecognition.onresult = (event) => {
        let interim_transcript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            const transcript = event.results[i][0].transcript;

            if (transcript.includes("stop")) {
                speechRecognition.stop();
                return; // Exits callback without updating transcripts
            }

            if (event.results[i].isFinal) {
                final_transcript += transcript;
            } else {
                interim_transcript += transcript;
            }
        }
        // Set the Final transcript and Interim transcript.
        $("#final").html(final_transcript);
        $("#interim").html(interim_transcript);
    };

    $("#start").click(function () {
        speechRecognition.start();
        final_transcript = "";
        $("#final").empty();
        $("#interim").empty();
    });

    $("#stop").click(function () {
        speechRecognition.stop();
    });
} else {
    console.log("Speech Recognition Not Available");
}