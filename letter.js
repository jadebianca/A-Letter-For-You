$(document).ready(function () {
        var envelope = $("#envelope");
        var btn_open = $("#open");
        var btn_reset = $("#reset");

        const friends = {
          "030325": { name: "Jo", msg: "I am so thankful for all the happy times we shared since high school. We grew so much closer, and I treasure those days deeply. I am rooting for you and can’t wait to see you wearing your white coat! 🩷", img: "https://lh3.googleusercontent.com/d/1G1RmzQRcT6YxGDDUtO3q8PF9f7XYJJvE" },
          "020423": { name: "Eri", msg: "I am so grateful for all the happy moments we’ve shared and truly appreciate having such a thoughtful friend like you. I hope you find success in everything you do because you deserve nothing but the best. I know you will become an amazing and successful RRT in the future! 💜🩷", img: "https://lh3.googleusercontent.com/d/19kmvbafX9zQ3VFhbiaCv16A0M4siQq6n" },
          "061423": { name: "Kei", msg: "I truly admire your maturity and how comfortable it feels to talk to you about anything. I am grateful for our friendship, and I wish you all the luck in the world. I can’t wait to see you also wearing your white coat! 💙", img: "https://lh3.googleusercontent.com/d/18_gmQMlanAfKl20Lc2ueKjfDGdHrh1tb" },
          "071524": { name: "Neng", msg: "I am genuinely thankful for the happy times we got to spend together. I truly hope you are finding lots of joy and peace while staying in Malta. May your future be filled with luck and all the things that make you smile! 🩶", img: "https://lh3.googleusercontent.com/d/1E67D40C8_QjZhOH1u9BBhXtgSzGZS8CX" },
          "122823": { name: "Hanami", msg: "You are such a humorous friend and I am lucky to have you in my life. I appreciate you so much for traveling all the way from Cavite to Manila just to hang out with us. Good luck with everything your future holds for you! 💚", img: "https://lh3.googleusercontent.com/d/1Q8daZU0f1TlU8mAXDPA8IQ1scmkQrfJT" },
          "051624": { name: "Rico", msg: "Being best friends since kinder is something I will always be thankful for. You are such a funny person to be around and I look forward to more spontaneous galas and chikas with you. I wish you nothing but the best in your journey ahead! 💙", img: "https://lh3.googleusercontent.com/d/1F2wbizNCMIhYqsOVv9_h_GYCxzm8aV_7" },
          "032625": { name: "Derrick", msg: "I am very thankful for the fun times we’ve had, and I hope we grow even closer in the future. You are a wonderful friend with an amazing sense of humor, so keep being yourself. Good luck with your studies and everything else you do! 💙", img: "https://lh3.googleusercontent.com/d/15jRNcmBAGRhYXupRF1JXM1R25FBefUKZ" },
          "030623": { name: "Che", msg: "I really value how mature you are and how comfortable it is to talk to you about anything. I am thankful for our friendship, and I’m looking forward to more galas and chikas with you. I wish you so much luck for your future! 💙", img: "https://lh3.googleusercontent.com/d/12vJH4MhsDvjkHhoymG_zlrssNYLoz_wH" }
        };

        function open() {
          var passcode = prompt("Please enter your passcode:");
          if (friends[passcode]) {
            $("#recipient-name").text("To: " + friends[passcode].name);
            $("#message-body").text(friends[passcode].msg);
            $("#friend-photo").attr("src", friends[passcode].img).show();
            envelope.addClass("open").removeClass("close");
          } else if (passcode !== null) {
            alert("Invalid Passcode!");
          }
        }

        function close() {
          envelope.addClass("close").removeClass("open");
        }

        envelope.click(function () {
          if (envelope.hasClass("close")) open();
        });
        
        btn_open.click(open);
        btn_reset.click(close);
      });
