document.addEventListener('DOMContentLoaded', function() {
    // Define an array of elements to choose from
    const pickupLines = [
            "Do you have a name, or can I call you mine?",
            "If beauty were time, you'd be an eternity.",
            "Is it okay if I follow you home? Because my parents always told me to follow my dreams.",
            "Excuse me, but I think you dropped something: MY JAW!",
            "Is your name Google? Because you have everything I've been searching for.",
            "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
            "If you were a vegetable, you'd be a cute cumber!",
            "Do you believe in love at first sight, or should I walk by again?",
            "I'm not a photographer, but I can definitely picture us together.",
            "Were you a part of the Boy Scouts? Because you've got my heart tied in knots.",
            "If you were words on a page, you'd be fine print.",
            "Do you like Star Wars? Because Yoda one for me!",
            "I must be a snowflake, because I've fallen for you.",
            "Are you a loan? Because you have my interest!",
            "Do you play soccer? Because you're a keeper!",
            "Are we at the airport? Because my heart just took off when I saw you.",
            "I was wondering if you had an extra heart, because mine was just stolen.",
            "Do you have a pencil? Cause I want to erase your past and write our future.",
            "Is there an airport nearby or is it my heart taking off?",
            "Are you a campfire? Because you're hot and I want s'more.",
            "Do you have Wi-Fi? Because I'm feeling a connection.",
            "If looks could kill, you'd be a weapon of mass destruction.",
            "Are you a magician? Because every time I look at you, everyone else disappears.",
            "Is your name Wi-Fi? Because I'm feeling a connection.",
            "Is there a rainbow today? I just found the treasure I've been searching for!",
            "Are you a cat? Because you're purrfect.",
            "Do you have a sunburn, or are you always this hot?",
            "If we were at home, cuddling on a rainy Sunday morning, what would we have for breakfast? a) Pancakes b) Bacon and Eggs c) Crèpes d) Acai bowl e) Something else?",
            "Your hand looks heavy—can I hold it for you?",
            "Do you have an eraser? Because I can't get you out of my mind.",
            "I'd say God Bless you, but it looks like he already did.",
            "Are you an interior decorator? Because when I saw you, the entire room became beautiful.",
            "Is this the Hogwarts Express? Because it feels like you and I are headed somewhere magical.",
            "If you were a fruit, you'd be a fineapple. And if you were a vegetable, I'd visit you in the hospital every day.",
            "Do you have a map? I keep getting lost in your eyes.",
            "Are you a time traveler? Because I see you in my future!",
            "Can I follow you where you go? Because my parents always told me to follow my dreams.",
            "If beauty were time, you'd be an eternity.",
            "Is your name Google? Because you've got everything I've been searching for.",
            "Are you a bank loan? Because you got my interest!",
            "I'm not a photographer, but I can picture me and you together.",
            "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
            "If you were a vegetable, you'd be a cutecumber.",
            "Do you believe in love at first sight, or should I walk by again?",
            "Your lips look lonely. Would they like to meet mine?",
            "Do you have a map? I keep getting lost in your eyes.",
            "Are you a magician? Because whenever I look at you, everyone else disappears.",
            "Do you have a name, or can I call you mine?",
            "If beauty were time, you'd be an eternity.",
            "Is it okay if I follow you home? Because my parents always told me to follow my dreams.",
            "Excuse me, but I think you dropped something: MY JAW!",
            "Is your name Google? Because you have everything I've been searching for.",
            "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
            "If you were a vegetable, you'd be a cute cumber!",
            "Do you believe in love at first sight, or should I walk by again?",
            "I'm not a photographer, but I can definitely picture us together.",
            "Were you a part of the Boy Scouts? Because you've got my heart tied in knots.",
            "If you were words on a page, you'd be fine print.",
            "Do you like Star Wars? Because Yoda one for me!",
            "I must be a snowflake, because I've fallen for you.",
            "Are you a loan? Because you have my interest!",
            "Do you play soccer? Because you're a keeper!",
            "Are we at the airport? Because my heart just took off when I saw you.",
            "I was wondering if you had an extra heart, because mine was just stolen.",
            "Do you have a pencil? Cause I want to erase your past and write our future."
        ];
        



    function generateRandomElement() {
        const randomIndex = Math.floor(Math.random() * pickupLines.length);
        const selectedItem = pickupLines[randomIndex];
        document.getElementById("randomElement").innerText = selectedItem;
        }
    document.getElementById("generateButton").addEventListener("click", generateRandomElement);
});
