import React, { useState } from 'react'
import useUpdate from './useUpdate';
import { useEffect } from 'react';
type RecordItem = {
    tagIds: number[]
    note: string
    category: '+' | '-'
    amount: number
    createdAt: string //ISO 8601
}

type newRecordItem = Omit<RecordItem, 'createdAt'>


export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    }, [])
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
    }, [records])

    const addRecord = (newRecord: newRecordItem) => {
        if (newRecord.amount <= 0) {
            alert('金额不能为0')
            return false

        }
        if (newRecord.tagIds.length == 0) {
            alert('请选择标签')
            return false
        }
        const record = { ...newRecord, createdAt: (new Date()).toISOString() }
        setRecords([...records, record])
        return true
    }

    return { records, addRecord }
}