import React, { FC } from 'react'
import TodoList from './components/TodoList'
import './App.css'
const App: FC = () => {
	return (
		<>
			<div className="App">
				<TodoList />
			</div>
		</>
	)
}

export default App
