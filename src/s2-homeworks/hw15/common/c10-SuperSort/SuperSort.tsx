import React from 'react'
import up from './up.svg'
import down from './down.svg'
import noIcon from './noIcon.svg'

const downIcon = down;
const upIcon = up;
const noneIcon = noIcon

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    return sort === down ?  up : sort === up ? '' : sort === ''? down : sort === '1b' ? down : ''

}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt='sort icon'
            />
        </span>
    )
}

export default SuperSort
