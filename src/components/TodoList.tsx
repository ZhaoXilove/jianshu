import { Input, List, Typography } from 'antd'
import React, { useState } from 'react'
const TodoList: React.FC = () => {
	const [list, setList] = useState<Array<string>>([])
	const [inputValue, setInputValue] = useState<string>('')
	const handleInputSearch = (value: string) => {
		if (value) {
			setList((todo) => [...todo, value])
			setInputValue('')
		}
	}
	const handleDeleteItem = (index: number) => {
		const newList = [...list]
		newList.splice(index, 1)
		setList(newList)
	}
	return (
		<>
			<div style={{ padding: '20px' }}>
				<div>
					<Input.Search
						placeholder="请输入代办项"
						style={{ width: '500px' }}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						allowClear
						enterButton="提交"
						size="large"
						onSearch={handleInputSearch}
					/>
				</div>
				<div style={{ width: '500px', marginTop: '15px' }}>
					<List
						header={<div>TodoList</div>}
						bordered
						dataSource={list}
						renderItem={(item, index) => (
							<List.Item onClick={() => handleDeleteItem(index)}>
								<Typography.Text mark>[{index + 1}]</Typography.Text> {item}
							</List.Item>
						)}
					/>
				</div>
			</div>
		</>
	)
}

export default TodoList
