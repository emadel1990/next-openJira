import { useState, ChangeEvent, useContext } from 'react';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

import { Box, Button, TextField } from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';
import AddBoxIcon from '@mui/icons-material/AddBox';

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingTask, addingTask } = useContext(UIContext);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) {
      isAddingTask(false);
      setInputValue('');
      return;
    }
    addNewEntry(inputValue);

    isAddingTask(false);
    setIsTouched(false);
    setInputValue('');
  };

  const onCancel = () => {
    isAddingTask(false);
    setIsTouched(false);
    setInputValue('');
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {addingTask ? (
        <>
          <TextField
            fullWidth
            sx={{ marginBottom: 1, marginTop: 1 }}
            placeholder="New Entry"
            multiline
            label="New Entry"
            helperText={
              inputValue.length === 0 && isTouched
                ? 'Entry input cant be empty'
                : 'Describe your new entry'
            }
            error={inputValue.length === 0 && isTouched}
            value={inputValue}
            onChange={handleTextChange}
            onBlur={() => setIsTouched(true)}
          />
          <Box
            sx={{ padding: '4px 8px' }}
            display="flex"
            justifyContent="space-between">
            <Button
              variant="outlined"
              color="primary"
              onClick={onCancel}>
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              disabled={inputValue.length === 0}
              endIcon={<SaveIcon />}
              onClick={onSave}>
              Save
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Button
            startIcon={<AddBoxIcon />}
            fullWidth
            variant="outlined"
            onClick={() => isAddingTask(true)}>
            Add Task
          </Button>
        </>
      )}
    </Box>
  );
};
