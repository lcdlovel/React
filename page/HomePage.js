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
import YgButton from './common/YgButton'
export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	static navigationOptions={
		title:"Home",
		headerBackTitle:'哈哈哈'
	}
	render() {
		const {navigation} = this.props
		return (
			<View style={styles.container}>
				<Text>欢迎来到HomePage</Text>
				<YgButton title='默认Button' onPress={()=>{navigation.navigate('Page1')}} />
				<Button title='默认Button' onPress={()=>{navigation.navigate('Page1')}}/>
				<Button title='Go to Page2' onPress={()=>{navigation.navigate('Page2',{name:'动态的'})}}/>
				<Button title='Go to Page3' onPress={()=>{navigation.navigate('Page3',{title:'Devio'})}}/>
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