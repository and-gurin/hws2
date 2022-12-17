import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 300,
                marginRight: '20px',
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    '&:before': {
                        display: 'block',
                        borderRadius: '50%',
                        background: '#00CC22',
                        width: '30%',
                        height: '30%',
                        alignSelf: 'center',
                        zIndex: '+1'
                    },
                    '&:after': {
                        border: 'solid 2px #00CC22',
                        background: 'white',
                        width: '22px',
                        height: '22px'

                    }
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
