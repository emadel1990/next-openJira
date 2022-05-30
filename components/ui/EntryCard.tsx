import { FC, useEffect, useContext, useState, DragEvent } from 'react';
import { UIContext } from '../../context/ui';

import { getCreatedAgo } from '../../utils';

import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces';

interface Props {
  entry: Entry;
}
export const EntryCard: FC<Props> = ({ entry }) => {
  const { setStartDragging, setEndDragging } = useContext(UIContext);
  const [timeAgo, setTimeAgo] = useState('');

  const onDragStart = (evt: DragEvent<HTMLDivElement>) => {
    evt.dataTransfer.setData('text', entry._id);
    setStartDragging();
    // todo: modificar el estado para indicar que estoy haciendo drag.
  };
  const onDragEnd = (evt: DragEvent<HTMLDivElement>) => {
    setEndDragging();
    // todo: fin del drag
  };

  useEffect(() => {
    setTimeAgo(getCreatedAgo(entry.createdAt));
  }, [entry]);
  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', padding: '2px 6px' }}>
          <Typography variant="body2">{`Last Updated - ${timeAgo}`}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
