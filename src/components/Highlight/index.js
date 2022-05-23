import React from 'react';
import { Grid } from '@material-ui/core';
import HighlightCard from './HighlightCard';

export default function Highlight({ summary }) {
      // kich thuoc sm tro len chia lam 3 collumn
      // Grid cua Material UI chia ra dang 12 collumn,
      // Muon co 3 cot tren 1 hang set sm = 4 ( 12/3 = 4)
      // kich thuoc xs = dien thoai => set 1 column 1 hang
  return (
    <Grid container spacing={3}>
      {summary.map((data) => (
        <Grid item sm={4} xs={12}>
          <HighlightCard
            title={data.title}
            count={data.count}
            type={data.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}
