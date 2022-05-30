import { useContext, useMemo, DragEvent } from 'react';
import { Paper, List } from '@mui/material';
import { FC, ReactNode } from 'react';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';
import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDraggingTask, setEndDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries?.filter(entry => entry.status === status),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries]
  );

  const onDropEntry = (evt: DragEvent<HTMLDivElement>) => {
    const id = evt.dataTransfer.getData('text');
    const entry = entries?.find(e => e._id === id)!;
    entry.status = status;
    entry.createdAt = Date.now();
    updateEntry(entry);
    setEndDragging();
  };

  const allowDrop = (evt: DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
  };

  return (
    //TODO : aqui haremos drop
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDraggingTask ? styles.dragging1 : ''}>
      <Paper
        sx={{
          height: 'calc(100vh - 250px)',
          overflow: 'auto',
          padding: '1px 8px',
          backgroundColor: 'transparent',
          transition: 'all 0.25s ease'
        }}>
        <List
          sx={{
            opacity: isDraggingTask ? 0.5 : 1,
            transition: 'all 300ms ease'
          }}>
          {entriesByStatus?.map(entry => (
            <EntryCard
              key={entry._id}
              entry={entry}
            />
          ))}
        </List>
      </Paper>
    </div>
  );
};
