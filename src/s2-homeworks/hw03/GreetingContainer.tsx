import React, { ChangeEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string)=>void
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: any) => {
    if (name !== ''){
        addUserCallback(name)
        setName('')

    }
    if (name === ''){
        setError("Error! Enter a name!")
    }
}

export const pureOnBlur = (name: string, setError: any) => {
    if (name === ''){
        setError("Error! Enter a name!")
    }
}

export const pureOnEnter = (e: React.KeyboardEvent<HTMLInputElement>, addUser: any) => {
    if (e.key === 'Enter'){
        addUser()
    }
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback);
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length

    const lastUser = users.length ? users[users.length -1] : null

    const lastUserName = lastUser ? lastUser.name : ''

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
