import React, {Component} from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	Navigator
} from 'react-native';

export default class Page1 extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		const {navigation} = this.props;
		return (
			<View style={styles.container}>
				<Text>
					欢迎来到page1
				</Text>
				<Button title={'Go back'} onPress={() => {
					navigation.goBack()
				}}/>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
})