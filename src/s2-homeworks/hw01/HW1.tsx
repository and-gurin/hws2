import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import avatarF from './avatar_friend.png'

export type UserType = {
    avatar: string
    name: string
}
export type MessageUserType = {
    text: string
    time: string
}
export type MessageType = {
    id: number
    user: UserType
    message: MessageUserType
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Gregor',
    },
    message: {
        text: 'Deal with marketing department',
        time: '22:00',
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatarF,
        name: 'Jack',
    },
    message: {
        text: 'Get (launch, release) the product before our competitors',
        time: '22:20',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Friendly chat</div>
            <div className={s2.hw}>

                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
