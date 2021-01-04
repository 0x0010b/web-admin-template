import { createServer, Response } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {

    let server = createServer({

        environment,

        routes() {

            this.namespace = 'api'
            
            this.post('/login', (schema, request) => {

                let attrs = JSON.parse(request.requestBody)
                let isValid = attrs.user == "admin" && attrs.password == "pass"

                let headers = {}
                let data = isValid ? {
                    success: true,
                    body: {
                        token: 'dump-user-token'
                    }
                } : {
                    success: false,
                    errorMessage: 'Login incorrecto'
                }
    
                return new Response(200, headers, data)
            }, { timing: 1000 })
        }
    })

    return server
}