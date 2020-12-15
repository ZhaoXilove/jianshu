import React from 'react'
import { Table } from 'antd'

import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
	box: {
		width: '100%',
	},
})
type rc = Array<Record<string, unknown>>
export interface Example {
	//数组包含一个对象 unknown: 不确定的值
	dataSource: Array<Record<string, unknown>>
	a: Record<string, unknown>
	b: string
	c: number
	d: boolean
	e: Record<string, unknown> | null
	f?: string //可选props
	g: boolean & number
	h: Array<number>
	i: Array<number & string>
	j: void
	k: any
}
export interface MyTableProps {
	dataSource: rc
	columns: rc

	defaultPageSize: number
}
const defaultArr: rc = []
const MyTable: React.FC<MyTableProps> = ({ dataSource = defaultArr, columns = defaultArr, defaultPageSize = 2 }: MyTableProps) => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.box}>
				<Table dataSource={dataSource} columns={columns} pagination={{ defaultPageSize }} />
			</div>
		</>
	)
}
export default MyTable
