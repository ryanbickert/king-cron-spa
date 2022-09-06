import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';

export default function CustomTable({ rows, columns }) {
    return (
        <div style={{ height: 250, width: '35vw' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[1]}
            />
        </div>
    );
}

{/* <TableContainer component={Paper}>
<Table sx={{ midWidth: 350 }} aria-label="High Scores Table">
    <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Score</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {props.map((row) => (
            <TableRow key={row.playerName}>
                <TableCell>{row.playerName}</TableCell>
                <TableCell align="right">{row.score}</TableCell>
            </TableRow>
        ))}
    </TableBody>
</Table>
</TableContainer> */}
