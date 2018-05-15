import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} from 'react-native';

export default class YgButton extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<TouchableHighlight
				onPress={this.props.onPress}
				style={this.props.style}>
				<View style={{width: 100, height: 50, backgroundColor: 'red'}}>
					<Text style={{margin:10}}>{this.props.title}</Text>
				</View>
			</TouchableHighlight>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})