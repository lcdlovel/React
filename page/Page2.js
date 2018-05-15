import React, {Component} from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	Navigator
} from 'react-native';

export default class Page2 extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		const {navigation} = this.props;
		return (
			<View style={styles.container}>
				<Text>
					欢迎来到page2
				</Text>
				<Button title='GO Back' onPress={() => {
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