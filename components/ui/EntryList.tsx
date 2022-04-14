import { List, Paper } from '@mui/material'
import React, { DragEvent, FC, useMemo } from 'react'
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { useContext } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UiContext } from '../../context/ui';
import styles from "./EntryList.module.css"

interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {
    const { entries, updateEntry } = useContext(EntriesContext)
    const { isDragging, endDragging } = useContext(UiContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])


    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData("text")
        const entry = entries.find(e => e._id === id)!;
        entry.status = status
        updateEntry(entry);
        endDragging()
    }

    return (
        /* Aqui se ara el drop */
        <div onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ""}>
            <Paper sx={{
                height: "calc(100vh - 180px)",
                overflow: "scroll",
                backgroundColor: "transparent",
                '&::-webkit-scrollbar': { display: 'none' },
                padding: "1px 5px"
            }}>
                {/* Todo */}
                <List sx={{ opacity: isDragging ? 0.1 : 1, transition: "all .3s" }}>
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}
