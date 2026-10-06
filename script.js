
// // VARIABLES
// const doesnt change 
// let can change for merge vault add remove


// LIST OF ITEMS

// Original Items to Fish Out
let fish = [
    {name: "Cod", type: "Fish", rarity:"Common", value: 2 },
    {name: "Seaweed", type: "Plant", rarity:"Common", value: 2 },
    {name: "Salmon", type: "Fish", rarity:"Common", value: 3  },
    {name: "Pufferfish", type: "Fish", rarity:"Rare", value: 5 },
    {name: "Tropical Fish", type: "Fish", rarity:"Rare", value: 6 },
    {name: "Clownfish", type: "Fish", rarity:"Epic", value: 14 },
    {name: "Frog", type: "Amphibian", rarity:"Mythic", value: 20 },
    {name: "Trident", type: "Weapon", rarity:"Mythic", value: 20 },
];

// Additional Items for Merge Vault
let bonusFish = [
    {name: "Pirate Hat" , type: "Hat", rarity:"Epic", value: 14  },
    {name: "Pearl" , type: "Plant", rarity:"Mythic", value: 25  },
    {name: "Jellyfish" , type: "Fish", rarity:"Epic", value: 19  },
];




// STEP 1: Build the list and put it on the page
function fishList() {

    // Make an empty string to gather our HTML
     let ulHTML = "<ul>";

// Loop through each row of the multidimensional array

for (let i = 0; i < fish.length; i++) {
    // loop through each chunk with that row's data
    ulHTML+= 
    (
        "<li>" +
        fish[i]["name"] +
         " (" +
          fish[i]["rarity"] +
           ")" + " type: " +
          fish[i]["type"] 
          + ", Value: " +
          fish[i]["value"]
          + "</li>"

    ); 
    // shows arrays in order 8 times (amount from burger.length which is 8 rows) (adding name is [] or other shows names)
}; 


ulHTML += "</ul>";

// inject the final built string into the HTML 
document.getElementById("fish-container").innerHTML = ulHTML;

}


// STEP 2" Grabe every <li> on page and color it by rarity

function colorItems() {
    let items = document.getElementById("fish-container").getElementsByTagName("li"); 
    // So it only targets li elements in burger container, if you have another li list

    // For loop that defines a start, end, and incremental value
    for (let i = 0; i < items.length; i++) {
        // items[i] on the page matches the fish[1] in the array, because we built them in the same order
        let value = fish[i]["value"];

        // Check and color item based on score
        if (value >= 20) {
            items[i].style.color = "#7F2982"; // Mythic

        } else if (value >= 12) {
            items[i].style.color =  "#26C485"; // Epic

        } else if (value >= 5) {
            items[i].style.color = "#FE5F55"; // Rare. 

        } else {
            items[i].style.color = "#FFC43D"; // Common

        }
    }

    document.getElementById("item-count").innerHTML = items.length;
    
}

// STEP 3: Loop over the array to add up the total value
function showTotal() {
    let totalValue = 0; // Let total equal nothing at start

    for (let i = 0; i < fish.length; i++) {
        totalValue += fish[i]["value"];
    }

    document.getElementById("total-value").innerHTML = totalValue.toFixed(2);
    // toFixed(2) makes it so that it has at least 2 decimal places
}

function buildFish() {
    fishList();
    colorItems();
    showTotal();
}



// ADD hardcoded item into list
document.getElementById("add-btn").addEventListener("click", function() {
    fish.push({name: "Coral" , type: "Fish", rarity:"Mythic", value: 20  });
    buildFish();
});

// REMOVE hardcoded item into list
document.getElementById("remove-btn").addEventListener("click", function() {
    fish.pop();
    buildFish();
});

// MERGE hardcoded item into list
document.getElementById("merge-btn").addEventListener("click", function() {
    fish = [...fish, ...bonusFish];
    buildFish();
});



buildFish();


// STEP 4: while or do while loop to randomly pick items from collection until it lands on mythic

// BUTTONS

    // MYSTERY BOX BUTTON 
    document.getElementById("ran-btn").addEventListener("click", function() {
        randomSelect();
        document.getElementById("myst-box").innerHTML = fish[randomNumber]["name"];
    });
    

    // FILTER BUTTON
    document.getElementById("epic-btn").addEventListener("click", function() {
        filterEpic();
    });

     // SHOW ALL BUTTON
    document.getElementById("show-btn").addEventListener("click", function() {
        buildFish();
    });


// VARIABLE: Empty declared variable for randomly selected number from function code
let randomNumber;

// Function to select random mythic from fish array
function randomSelect() {

    let tries = 0;
    let pickedRarity;



    do {
        randomNumber = Math.floor(Math.random() * 8);
        pickedRarity = fish[randomNumber]["rarity"];
        tries++;
    } while (pickedRarity != "Mythic");



    document.getElementById("myst-tries").innerHTML = tries;


}

    // Function to filter epic

    function filterEpic () {

        let items = document.getElementById("fish-container").getElementsByTagName("li"); 
        let pickEpic;
        let i = 0;


        for (let i = 0; i < fish.length; i++) {
            pickEpic = fish[i]["rarity"];


            if (pickEpic == "Epic") {
                items[i].style.color =  "#26C485";
    
            } else {
                items[i].innerHTML = "";
    
            }
        }


    }




