import { exec } from "child_process"
export { bash }

async function bash(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                return reject(error)
            }
            const r = /^To github.com/i
            if (r.test(stderr)) {
                stdout += stderr
                stderr = ''
            }
            if (stderr) {
                return reject(stderr)
            }
            resolve(stdout)
        })
    })
}

