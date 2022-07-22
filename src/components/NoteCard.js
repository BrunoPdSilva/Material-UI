import React from 'react'

import { Card, CardHeader, CardContent, IconButton, Typography } from "@material-ui/core"
import { DeleteOutlineOutlined } from '@material-ui/icons'

export function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader 
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlineOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
