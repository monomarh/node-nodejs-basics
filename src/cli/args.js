const parseArgs = () => {
    let args = process.argv.slice(2)
    let i = 0

    while (i < args.length) {
        let nameIndex = i++
        let valueIndex = i++

        if (nameIndex > args.length || valueIndex > args.length) {
            throw new Error('Wrong amount of args')
        }

        console.log(args[nameIndex].slice(2) + ' is ' + args[valueIndex])
    }
};

parseArgs();