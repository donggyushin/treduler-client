let URL = "http://www.treduler.de"

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    URL = "http://127.0.0.1"
}

export const ENDPOINT = URL
