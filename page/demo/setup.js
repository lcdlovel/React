import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default class HelloCOmponent extends Component{
	constructor(props){
		super(props);
		console.log('-----')
	}
	componentWillMount(){
		console.log('组件被装载之前')
	}
	componentDidMount(){
		console.log('组件被装载')
	}
	render(){
		return <Text style={{fontSize:20}}>哈哈哈</Text>
	}
}