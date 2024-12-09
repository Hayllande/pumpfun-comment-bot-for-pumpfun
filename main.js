const { comment, comment_bot } = require("./source/comments.js");
const colors = require('colors');
const figlet = require('figlet');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {await comment();})();

async function showMenu() {
    console.clear();
    console.log(colors.cyan(figlet.textSync("PumpFun Comment Bot", { horizontalLayout: 'default' })));
    
    console.log(colors.yellow.bold("\n"));
    console.log(colors.green("1. ") + colors.green("Random Wallet Comments"));
    console.log(colors.magenta("2. ") + colors.magenta("Like Comments"));
    console.log(colors.yellow("3. ") + colors.yellow("Shill Bot"));
    console.log(colors.red("4. ") + colors.red("Exit"));
    
    const answer = await new Promise(resolve => rl.question(colors.cyan("\nEnter your choice (1-4): "), resolve));

    switch (answer.trim().toLowerCase()) {
        case "1":
            comment_bot(1);
            break;
        case "2":
            comment_bot(2);
            break;
        case "3":
            comment_bot(3);
            break;
        case "4":
            console.log(colors.blue("\nExiting..."));
            rl.close();
            process.exit(0);
            break;
        default:
            console.log(colors.red("Invalid option, please choose again."));
            await new Promise(resolve => setTimeout(resolve, 800));
            await showMenu();
    }
}

async function main() {
    showMenu();
}

main().catch((err) => {
    console.error("Error:", err);
});
