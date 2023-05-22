import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'


export type AffairPriorityType = 'high'|'low'|'middle'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
    {_id: 6, name: 'pattern', priority: 'middle'},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if(filter === 'low'){
        affairs = affairs.filter((aff)=>aff.priority === 'low')
    }
    if(filter === 'high'){
        affairs = affairs.filter((aff)=>aff.priority === 'high')
    }
    if(filter === 'middle'){
        affairs = affairs.filter((aff)=>aff.priority === 'middle')
    }

    return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): any => {
    affairs = affairs.filter((aff)=>aff._id !== _id)
    return affairs
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => {
        const deletedAffairs = deleteAffair(affairs, _id)
        setAffairs(deletedAffairs)
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Affairs</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
