import { Button, TextField, Box } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ChangeEvent, useState, useContext } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UiContext } from '../../context/ui/UiContext';

export const NewEntry = () => {

    /*     const [isAdding, setIsAdding] = useState(false); */
    const [inputValue, setInputValue] = useState("")
    const [touched, setTouched] = useState(false)

    const { addNewEntry } = useContext(EntriesContext)
    const { setIsAddingEntry, isAddingEntry } = useContext(UiContext)

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(event.target.value)
    }
    const onSave = () => {
        if (inputValue.length === 0) return;
        addNewEntry(inputValue)
        setIsAddingEntry(false)
        setTouched(false)
        setInputValue("")

    }
    return (
        <Box sx={{ marginBottom: 2, paddingX: 1.5 }}>

            {
                isAddingEntry ? (<>
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        // placeholder="Nueva entrada"
                        autoFocus
                        multiline
                        label="Nueva entrada"
                        helperText={inputValue.length <= 0 && touched && "Ingresa un valor"}
                        onBlur={() => setTouched(true)}
                        error={inputValue.length <= 0 && touched}
                        value={inputValue}
                        onChange={onTextFieldChanged}
                    />

                    <Box display="flex" justifyContent="space-between">
                        <Button
                            variant="outlined"
                            onClick={() => setIsAddingEntry(false)}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            endIcon={<SaveIcon />}
                            onClick={onSave}
                        >
                            Guardar
                        </Button>
                    </Box>
                </>) : <Button
                    startIcon={<AddBoxIcon />}
                    fullWidth
                    variant='outlined'
                    onClick={() => setIsAddingEntry(true)}>
                    Agregar tarea
                </Button>
            }


        </Box>
    )
}
