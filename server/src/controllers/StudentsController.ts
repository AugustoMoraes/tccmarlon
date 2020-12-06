import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import db from '../database/connection'

import { validateEmail } from '../utils/validateEmail'
import jwt from 'jsonwebtoken'
import { secret } from '../config/JWT'

const saltRounds = 10

class StudentsController {

    async create(req: Request , res: Response){
        const {name,email,password} = req.body

        if(!name || !email || !password)
            return res.status(400).json({ error: 'Missing user informations' })

        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err)
                return res.status(500).send()

            const existentUser = await db('students').where({ email }).select()   // checking if user already exists
            if (existentUser.length)
                return res.status(400).json({ error: 'User already exists' })

            const trx = await db.transaction()

            try {
                await trx('students').insert({ name, email, password: hash })
                await trx.commit()
                return res.status(201).send()
            }
            catch (error) {
                await trx.rollback()
                res.status(400).json({ error: 'Unexpected error while creating an user' })
            }
        })
    }
}

export default StudentsController