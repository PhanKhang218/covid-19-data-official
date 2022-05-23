import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';

import { getMapDataByCountryId } from '../apis';
import LineChart from '../Charts/LineChart';
import HighMaps from '../Charts/HighMaps';

export default function Summary({ countryId, report }) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (countryId) {
      getMapDataByCountryId(countryId)
        .then((res) => {
          setMapData(res);
        })
        .catch((err) => console.log({ err }));
    }
  }, [countryId]);

  return (
      // kich thuoc sm tro len chia lam 3 collumn
      // Grid cua Material UI chia ra dang 12 collumn,
      // Muon co 3 cot tren 1 hang set sm = 4 ( 12/3 = 4)
      // kich thuoc xs = dien thoai => set 1 column 1 hang
    <div style={{ height: '500px', marginTop: 10 }}>
      
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <LineChart data={report} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <HighMaps mapData={mapData} />
        </Grid>
      </Grid>
    </div>
  );
}
