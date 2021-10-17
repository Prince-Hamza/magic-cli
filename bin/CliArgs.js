
 class Cli_Args {
	constructor(args) {
		this.command = args._[0]
		this.syllable = args._[1]
		this.options = [this.Has(args, 'npm'), this.Has(args, 'yarn')]
		this.packageManager = this.Packager()
	}

	Result () {
		return ({ command:this.command , syllable :this.syllable , packager:this.packageManager[0] })
	}

	Packager () {
		var packager = this.options.filter(Boolean)
		var packager = (packager.length == 0) ? ['pnpm'] : packager
		return packager
	}

	Has = (item ,prop) => {
		var resp = item.hasOwnProperty(prop) ? prop : undefined
		return resp
	}

}


module.exports = {
    Cli_Args
}