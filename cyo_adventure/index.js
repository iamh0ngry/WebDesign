/*
    For this project, we'll make a "choose your own adventure" game.
    The user will start on the home page, and make decisions to progress the story as they like.
    Whenever they make a decision, we will take them to a different "page"
        - These different pages are actually all the same .hbs file, just filled with different content
    
    We will use a query parameter in our url headers to tell the server where the user is in the story
    Unlike in the books, we don't have to use a number (for example, "go to page 53")!
        - Instead, we can have the paramater be some text that describes the action.
        - Example:
            - "to punch the monster, go to ~~~~?id=punch_monster"
            - "to run away, go to ~~~~?id=run_away"
            
        - This helps you as the writer keep better track of your story...
        - ...and also makes it harder for the user to cheat, since they'd have to guess the param correctly.
    We'll also use hyperlinks so that the user doesn't have to type in the id manually.
*/

var express = require("express");
var app = express();
var path = require("path");
var hbs = require("hbs");

/* swap from rendering html pages to using handlebars pages */
app.set("view engine", "hbs");
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/css", express.static(path.join(__dirname, "css")));


/* when the user comes to our home page, send them something */
app.get("/", function(req, res){
    console.log(req.query.decision);  // print out what the user tried to do to the console
    
    /*
        We'll use an object called "data" to store whatever text we'd like to put on screen.
        For now, let's just set some random values, we'll change them below. 
        
                               text_to_show --  this is whatever story related text we want to describe to the user
            option_1_text and option_2_text --  these are the options they're given ("run" or "hide", for example)
        option_1_result and option_2_result --  these are the ids we will send them to when they click an option
    */
    data = {
        text_to_show: "sample sample sample",
        option_1_text: "Option 1",
        option_1_result: "option_1_result",
        option_2_text: "Option 2",
        option_2_result: "option_2_result"
    }
    
    // the id is undefined when they first come to our page. Let's introduce the story to them
    if (req.query.decision == undefined) {
        data.text_to_show = "You wake up with a splitting headache, your mind is dizzy and lightheaded. Looking around you, you find a white door, a wooden nightstand with a wooden lamp, a nurse gown draped on you, and a little camera on the top right corner of your room. You have no idea how you got here, but you think the headache might be playing a part in that. What do you do?"
        data.option_1_text = "Stand up"
        data.option_2_text = "Stay put"

        // for the results, we can choose whatever we want. Let's be descriptive, but brief.
        data.option_1_result = "?decision=stand_up"
        data.option_2_result = "?decision=stay_put"

        // render the page with this data. Go look at "home.hbs" to see where it all goes!
        res.render("home", data);
    } else if (req.query.decision == "stand_up") {
        data.text_to_show = "As you try to painfully get out of bed making your headache worse, the camera beeps twice startling you. You think nothing of it as you twist the silver door knob to open the door. It shows an empty hallway with white tile floors and many other doors you think lead to other bedrooms. There are two ways to go down, which way do you go?"
        data.option_1_text = "Left"
        data.option_2_text = "Right"

        // for the results, we can choose whatever we want. Let's be descriptive, but brief.
        data.option_1_result = "?decision=left"
        data.option_2_result = "?decision=right"
        res.render("home", data);

    } else if (req.query.decision == "left") {
        data.text_to_show = "You go left because you see smoke coming from one of the doors. You walk until the door is right in front of you. Trembling, you twist the silver knob to open the door and you see a child in a seat on fire, the man working on her turns around and glares at you before shooting you in the face. You have died."
        data.option_1_text = "Restart"
        data.option_2_text = ""
        data.option_1_result = ""
        data.option_2_result = ""
        res.render("home", data);

    } else if (req.query.decision == "right") {
        data.text_to_show = "You go right because you hear footsteps coming from there. You walk cautiously to the sound, but you see a man in a grey suit, his brown hair flowing with every foot step he takes towards you. When he sees you, he walks faster toward you and you start to back up. \"Calm down y/n, it's just me\" the man says as I start backing up more. What do you do?"
        data.option_1_text = "Run away"
        data.option_2_text = "Stay there"

        // for the results, we can choose whatever we want. Let's be descriptive, but brief.
        data.option_1_result = "?decision=run_away"
        data.option_2_result = "?decision=stay"
        res.render("home", data);

    } else if (req.query.decision == "run_away") {
        data.text_to_show = "You turn your back to the man and start bolting down the hallway, looking back you see the man with a knife catching up to you, stabbing you. You flump to the ground. You have died."
        data.option_1_text = "Restart"
        data.option_2_text = ""
        data.option_1_result = ""
        data.option_2_result = ""
        res.render("home", data);

    } else if (req.query.decision == "stay") {
        data.text_to_show = "You stay put as the man walks up to you. \"hello y/n\" the man says in a calming voice. You tremble as he looks down on you, worried as to what he might do to you. You don't respond because of the state of shock you're currently in. He hands you a mask from his pocket, putting it across your face. You start to become more dizzy. The smell inside the mask was a lot like chloraphorm. You try taking it off, but the man instantly forces the mask onto you, knocking you out cold. The man has chloraphormed you, wiping your memory, and he has carried you to bed to start over."
        data.option_1_text = "Restart"
        data.option_2_text = ""
        data.option_1_result = ""
        data.option_2_result = ""
        res.render("home", data);


    } else if (req.query.decision == "stay_put") {
        data.text_to_show = "You stay in bed since your headache is not going away any time soon, and standing up just means more pain. You wait in bed, but you hear footsteps coming at your door. You tense up as the door opens for you to see a tall man in a gray suit, his brown hair sways along with his footsteps. \"hello y/n\" The man pulls up a chair from outside you vision and sits down beside you. What do you say?"
        data.option_1_text = "\"...\""
        data.option_2_text = "ask questions on why you're here"

        // for the results, we can choose whatever we want. Let's be descriptive, but brief.
        data.option_1_result = "?decision=nothing"
        data.option_2_result = "?decision=ask_questions"
        res.render("home", data);

        // then below this, you'd add more 
    } else if (req.query.decision == "ask_questions") {
        data.text_to_show = "\"Why am I here?\" You start asking question after question. Your voice sounds a bit hoarse, but you don't care. \"Gee your voice sounds terrible, would you like some water?\" The man says, ignoring every single question you just asked. \"You, you didn't answer my questions.\" you said, a tad bit of irritation showing. \"...you need water.\" the man says, getting up and leaving the room. He comes back with a glass of water, and gives it to me to drink. I drink it after being thirsty for awhile, right after I get even more dizzy and start choking. It was poison. You died in the bed."
        data.option_1_text = "Restart"
        data.option_2_text = "" // if we dont show any text, there's no second link
        data.option_1_result = "" // a blank result will send no "decision" parameter (sending them back to the main page)
        res.render("home", data);
    
    } else if (req.query.decision == "nothing") {
        data.text_to_show = "You say nothing, even though you have so many questions, you don't want to frighten the man. Plus, he might be dangerous. \"You're a quiet one aren't you?\" The man started to say after the bitter silence. You stare at him as he writes something down in his book. \" We don't really need you right now until about a couple hours, so in the mean time...\" the man pulls out a syringe in his jacket pocket, flicking it and injecting the liquid into you. You start to feel woozy and the liquid knocks you right out. Your memories have been wiped and you're back at the start."
        data.option_1_text = "Restart"
        data.option_2_text = ""
        data.option_1_result = ""
        data.option_2_result = ""
        res.render("home", data);
    
    } else {
        // the user should never really come here. if they did, you probably typoed one of the decisions
        // let's just send them back to the main page, and log a message for ourselves
        console.log("something broke. the user tried to make decision: " + req.query.decision);

        data.text_to_show = "You broke something"
        data.option_1_text = "Restart"
        data.option_2_text = ""
        data.option_1_result = ""
        data.option_2_result = ""
        res.render("home", data);   // <-------------------
    }
});

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("listening on port 8080");
});