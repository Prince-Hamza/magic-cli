#!/usr/bin/env node
const yargs = require("yargs")
const args = yargs.argv
const ArgsClass = require("./CliArgs").Cli_Args


class Main {
	ReadArgs () {
		const Args_Cli = new ArgsClass(args)
		const userInput = Args_Cli.Result()
		console.log(userInput)
	}
	
}


const App = new Main()
App.ReadArgs()
