import { IENV } from 'types/env'

const env: IENV = {
  port: process.env.APPLICATION_PORT || '8080',
}

export default env
