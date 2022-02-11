import React, { PureComponent, useEffect, useState } from 'react'
import { Stack, Table } from 'rsuite'

export const Employees = () => {
    const { Column, HeaderCell, Cell } = { ...Table }
    const [dataList, setDataList] = useState([])
    useEffect(() => {
        console.log('usefefe')

        let headersList = {
            Accept: '*/*',
            'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        }

        fetch('http://localhost:3001/api/findall', {
            method: 'GET',
            headers: headersList,
        })
            .then((response) => {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                setDataList(data)
            })
    }, [])

    const transformedData = dataList.map(
        (item: any) =>
            ({
                ...item,
                ...item.connectInfo.address,
                ...item.connectInfo,
                // tel: item?.tel[0],
            } as any)
    )
    console.log(transformedData)

    return (
        <div>
            <h2>Employees</h2>
            <Table data={transformedData} rowKey="id" height={400}>
                <Column width={200} align="left" flexGrow={1}>
                    <HeaderCell>First Name</HeaderCell>
                    <Cell dataKey="firstName" />
                </Column>
                <Column width={200} align="left" flexGrow={1}>
                    <HeaderCell>Last Name</HeaderCell>
                    <Cell dataKey="lastName" />
                </Column>
                <Column width={200} align="left" flexGrow={1}>
                    <HeaderCell>Contact Number</HeaderCell>
                    <Cell dataKey="tel" />
                </Column>
                <Column width={200} align="left" flexGrow={1}>
                    <HeaderCell>City</HeaderCell>
                    <Cell dataKey="city" />
                </Column>
                <Column width={200} align="left" flexGrow={1}>
                    <HeaderCell>Street</HeaderCell>
                    <Cell dataKey="street" />
                </Column>

                <Column width={120} fixed="right">
                    <HeaderCell>Action</HeaderCell>

                    <Cell>
                        {(rowData) => {
                            function handleAction() {
                                alert(`id:${rowData._id}`)
                            }
                            return (
                                <span>
                                    <a onClick={handleAction}> Edit </a> |{' '}
                                    <a onClick={handleAction}> Remove </a>
                                </span>
                            )
                        }}
                    </Cell>
                </Column>
            </Table>
        </div>
    )
}
