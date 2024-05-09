import inquirer from "inquirer";
import chalk from "chalk";

console.log("Welcome to the Dungeon!");
console.log("--------------------------------");
console.log("  #   Skeleton has appeared   #  ");
console.log("                                ");

let person_hp = 100;
let skeleton_hp = 70;
let assian_hp = 45;
let warrior_hp = 75;

let potion = 3;

let cond = true;
let enemy = 'skeleton';

while (cond) {
  let ques1 = await inquirer.prompt([
    {
      name: "question1",
      type: "list",
      message: "What would you like to do?",
      choices: ["Attack", "Drink Health Potion", "Run!"],
    },
  ]);

  if (ques1.question1 == "Drink Health Potion" && potion > 0) {
    potion -= 1;
    person_hp += 30;
    console.log(`    >  You Drink a Health potion, Healing yourself for 30.`);
    console.log(`    >  You have now ${person_hp} HP`);
    console.log(`    >  You have ${potion} left`);
  } else if (potion <= 0) {
    console.log("    >  You Have 0 potion.")
  }

  if (ques1.question1 == "Run!") {
    console.log(`You run away from the danger zone!`);
    break;
  }

  if (ques1.question1 == "Attack") {
    person_hp -= 5;
    if (enemy === 'skeleton') {
      skeleton_hp -= 13;
      console.log("                                ");
      console.log("    >  You strike the Skeleton for 13 damage.");
      console.log("    >  You recieve 5 in retaliation");

      console.log(`    Person HP : ${person_hp}`);
      console.log(`    Skeleton HP : ${skeleton_hp}`);
      console.log("                                ");
    } else if (enemy === 'assassin') {
      assian_hp -= 13;
      console.log("                                ");
      console.log("    >  You strike the Assassin for 13 damage.");
      console.log("    >  You recieve 5 in retaliation");

      console.log(`    Person HP : ${person_hp}`);
      console.log(`    Assassin HP : ${assian_hp}`);
      console.log("                                ");
    } else if (enemy === 'warrior') {
      warrior_hp -= 9;
      console.log("                                ");
      console.log("    >  You strike the Warrior for 9 damage.");
      console.log("    >  You recieve 5 in retaliation");

      console.log(`    Person HP : ${person_hp}`);
      console.log(`    Warrior HP : ${warrior_hp}`);
      console.log("                                ");
    }
  }

  if (skeleton_hp <= 0) {
    console.log("Skeleton is defeated! ");
    console.log(`You have ${person_hp} HP Left`);
    console.log("You win this match");

    let cond1 = await inquirer.prompt([
      {
        name: "after_skeleton_died",
        type: "list",
        message: "What would you like to do now?",
        choices: ["Continue Fighting", "exit dungeon!"],
      },
    ]);

    if (cond1.after_skeleton_died == "Continue Fighting") {
      console.log(`  #   Assassin has appeared   #  `);
      console.log(`    Person HP : ${person_hp}`);
      console.log(`    Assassin HP : ${assian_hp}`);
      enemy = 'assassin';
    }
  } if (assian_hp <= 0) {
    console.log("Assassin is defeated! ");
    console.log(`You have ${person_hp} HP Left`);
    console.log("You win this match");

    let cond1 = await inquirer.prompt([
      {
        name: "after_assassin_died",
        type: "list",
        message: "What would you like to do now?",
        choices: ["Continue Fighting", "exit dungeon!"],
      },
    ]);

    if (cond1.after_assassin_died == "Continue Fighting") {
      console.log(`  #   Warrior has appeared   #  `);
      console.log(`    Person HP : ${person_hp}`);
      console.log(`    Warrior HP : ${warrior_hp}`);
      enemy = 'warrior';
    }
  } if (warrior_hp <= 0) {
    console.log("Warrior is defeated! ");
    console.log(`You have ${person_hp} HP Left`);
    console.log("You win this match");
    break;
  }

  if(person_hp <= 0 ) {
    console.log(`You have ${person_hp} HP`);
    console.log(`You are killed by ${enemy}`);
    break;
  };
}
