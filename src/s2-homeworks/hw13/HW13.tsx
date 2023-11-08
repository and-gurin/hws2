import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc'
                : 'https://samurai.it-incubator.io/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')
        setIsLoading(true)

        axios
            .post(url, {success: x})
            .then((res) => {
                setCode('code 200!')
                setImage(success200)
                setText('...everything Ok)')
                setInfo('code 200 - usually means that most likely everything is ok)')
                setIsLoading(false)
            })
            .catch((e) => {
                setIsLoading(false)
                console.log(e.message)
                if (e.message === 'Request failed with status code 500') {
                    setCode('error 500!')
                    setImage(error500)
                    setText('simulation of an error on the server')
                    setInfo('error 500 - usually means that something brock down on the server , for example database)')
                }
                if (e.message === 'Request failed with status code 400') {
                    setCode('error 400!')
                    setImage(error400)
                    setText('You did not send success in body!')
                    setInfo('error 400 - usually means that front sent something wrong to the back!')
                }
                if (e.message === 'Network Error') {
                    setCode('Error!')
                    setImage(errorUnknown)
                    setText('Network Error')
                    setInfo('AxiosError')
                }
            })
    }

    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Interaction with server</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        disabled={isLoading}

                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        disabled={isLoading}

                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        disabled={isLoading}

                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)}
                        xType={'secondary'}
                        disabled={isLoading}

                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {code}
                        </div>
                        <div id={'hw13-text'} className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13
