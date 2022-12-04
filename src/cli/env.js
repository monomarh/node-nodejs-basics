const parseEnv = () => {
    let rssEnvs = Object.entries(process.env).filter(keyValuePair => keyValuePair[0].includes('RSS_', 0))
    let rssEnvsString = rssEnvs.map(keyValuePair => keyValuePair.join('=')).join('; ')

    console.log(rssEnvsString)
};

parseEnv();