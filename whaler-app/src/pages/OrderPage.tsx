import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';
import CoinyButton from '../components/CoinyButton';
import { useEffect, useState } from 'react';
import { ButtonPropsVariantOverrides } from '@mui/material';

const columns: GridColDef[] = [
    { field: 'asset', headerName: 'Aset', width: 300 },
    {
        field: 'price',
        headerName: 'Price',
        width: 300,
        sortable: false,
    },
    {
        field: 'buy',
        headerName: 'Buy',
        sortable: false,
        width: 300,
        renderCell: (params) => {
            const onClick = (e: any) => {
                e.stopPropagation(); // don't select this row after clicking

                const api: GridApi = params.api;
                const thisRow: Record<string, GridCellValue> = {};

                api
                    .getAllColumns()
                    .filter((c) => c.field !== '__check__' && !!c)
                    .forEach(
                        (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                    );

                return alert(JSON.stringify(thisRow, null, 4));
            };

            return <CoinyButton buttonText='Buy' onClick={onClick} />;
        },
    },
    {
        field: 'sell',
        headerName: 'Sell',
        sortable: false,
        width: 300,
        renderCell: (params) => {
            const onClick = (e: any) => {
                e.stopPropagation(); // don't select this row after clicking

                const api: GridApi = params.api;
                const thisRow: Record<string, GridCellValue> = {};

                api
                    .getAllColumns()
                    .filter((c) => c.field !== '__check__' && !!c)
                    .forEach(
                        (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                    );

                return alert(JSON.stringify(thisRow, null, 4));
            };

            return <CoinyButton buttonText='Sell' onClick={onClick} />;
        },
    },
];

const OrderPage = () => {
    const [btc, setBtc] = useState<number>(0);
    const [eth, setEth] = useState<number>(0);
    const [doge, setDoge] = useState<number>(0);
    const [uni, setUni] = useState<number>(0);

    const getPrice = (): void => {
        fetch(`http://localhost:3080/?apiKey=b3224a35-56de-457c-bf05-35de41c34cea`)
            .then(response => response.json())
            .then(data => {
                setBtc(data["BTC"])
                setEth(data['ETH'])
                setDoge(data['DOGE'])
                setUni(data['UNI'])
            });
    }

    useEffect(() => {
        getPrice()
    }, [])

    const rows = [
        { id: 1, asset: 'BTC', price: btc },
        { id: 2, asset: 'ETH', price: eth },
        { id: 3, asset: 'DOGE', price: doge },
        { id: 4, asset: 'UNI', price: uni },
    ];

    return (
        <div style={{ height: 400, width: '1200px', margin: 'auto', marginTop: '10%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight={true}
                autoPageSize={false}
                disableColumnFilter={true}
                disableExtendRowFullWidth={true}
                disableSelectionOnClick={true}
                disableColumnSelector={true}
                disableColumnMenu={true}
                disableDensitySelector={true}
            />
        </div>
    );
}

export default OrderPage