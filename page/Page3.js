import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	TextInput
} from 'react-native';

export default class Page3 extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		const {navigation} = this.props
		const {state, setParams} = navigation
		const {params} = state
		const showText = params.mode==='edit'?'正在编辑':'编辑完成'
		return (
			<View style={styles.container}>
				<Text>欢迎来了Page3</Text>
				<Text>{showText}</Text>
				<TextInput style={styles.input} onChangeText={text => {
					setParams({title: text})
				}}/>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	input: {
		height: 50,
		borderWidth: 1,
		borderColor: 'black'
	}
})