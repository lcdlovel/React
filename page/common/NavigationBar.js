import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	Navigator
} from 'react-native';

const NAV_BAR_HRIGHT_ANDROID=50
const NAV_BAR_HRIGHT_IOS=40
const STATUS_BAR_HEIGHT=50

export default class NavigationBar extends Component{
	static propTypes = {
			style:View.PropTypes.style,

	}
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
	}
}
const styles = StyleSheet.create({

})