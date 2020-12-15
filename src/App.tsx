import React, { FC } from 'react'
import MyTable from './components/MyTable'
import { dataSource, columns } from './utils/data'
import './App.css'
const App: FC = () => {
	const defaultPageSize = 2
	return (
		<>
			<div className="App">
				<MyTable dataSource={dataSource} columns={columns} defaultPageSize={defaultPageSize} />
			</div>
		</>
	)
}

export default App
