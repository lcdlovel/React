import {StackNavigator} from 'react-navigation'
import HomePage from '../page/HomePage'
import Page1 from '../page/Page1'
import Page2 from '../page/Page2'
import Page3 from '../page/Page3'
import React from 'react'
import {Button} from 'react-native'


export const AppStackNavgator = StackNavigator({
	HomePage: {
		screen: HomePage,
	},
	Page1: {
		screen: Page1,
	},
	Page2: {
		screen: Page2,
		navigationOptions: ({navigation}) => ({
			title: `${navigation.state.params.name}页面名`
		})
	},
	Page3: {
		screen: Page3,
		navigationOptions: (props) => {
			const {navigation} = props;
			const {state, setParams} = navigation
			const {params} = state
			return {
				title: params.title ? params.title : 'this is Page3',
				headerRight: (
					<Button title={params.mode === 'edit' ? '保存' : '编辑'}
									onPress={() => {
										setParams({mode: params.mode === 'edit' ? '' : 'edit'})
									}}/>
				)
			}
		}
	}
}, {
	navigationOptions: {}
})